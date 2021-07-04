const jwt = require('jsonwebtoken')
const {Host} = require('../models')

const validateTwo = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(403).json({
            auth: false, 
            message: 'No token present'
        })
    }else{
        jwt.verify(token, 'I_AM_SECRET', (err, decoded) => {
            if(!err && decoded){
                Host.findOne({
                    where:{
                        id: decoded.id
                    }
                })
                .then(host => {
                    if(!host) throw err;

                    req.hosts = host
                    return next()
                })
                .catch(err => next(err))
            }else {
                req.errors = err; 
            return res.status(500).send('You are not authorized.')
        }})
    }
}

module.exports = validateTwo