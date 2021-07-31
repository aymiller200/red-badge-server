const router = require('express').Router()
const {Host} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/register', (req, res) => {
    Host.create({
        email: req.body.email,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        streetAddress: req.body.streetAddress,
        state: req.body.state,
        city: req.body.city,
        zip: req.body.zip,
        password: bcrypt.hashSync(req.body.password, 13)
    })
        .then(host => {
            let token = jwt.sign({ id: host.id }, 'I_AM_SECRET', { expiresIn: '1d' })

            res.status(200).send({ host: host, token: token })
        })
        .catch((err => res.status(500).send({ err })))
})

router.post('/login', (req, res) => {
    Host.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(host => {
            if (host) {
                bcrypt.compare(req.body.password, host.password,
                    function (err, match) {
                        match ? generateToken(host) : res.send(`Something went wrong: ${err}`)
                    })

                    const generateToken = (host) => {
                        let token = jwt.sign({id: host.id}, 'I_AM_SECRET', {expiresIn: '1d'})
                        res.send({host:host, token:token})
                    }
            }else{
                res.send('No host detected')
            }

        }).catch(err => res.status(500).json({error: err}))
})


module.exports = router