const jwt = require('jsonwebtoken')
const Guest = require('../models/guest')

const validate = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(403).json({
            auth: false, 
            message: 'No token present'
        })
    }else{
        jwt.verify(token, 'I_AM_SECRET', (err, decoded) => {
            if(!err && decoded){
                Guest.findOne({
                    where:{
                        id: decoded.id
                    }
                })
                .then(guest => {
                    if(!guest) throw err;

                    req.guest = guest
                    return next()
                })
                .catch(err => next(err))
            }else req.errors = err; 
            return res.status(500).send('You are not authorized.')
        })
    }
}

module.exports = validate