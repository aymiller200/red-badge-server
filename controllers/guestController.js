const router = require('express').Router()
const Guest = require('../models/guest')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/register', (req, res) => {
    Guest.create({
        email: req.body.email,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        bandName: req.body.bandName,
        password: bcrypt.hashSync(req.body.password, 13),
    })
        .then(guest => {
            let token = jwt.sign({ id: guest.id }, 'I_AM_SECRET', { expiresIn: '1d' })
            res.status(200).send({ guest: guest, token: token })
        })
        .catch((err => res.status(500).send({ err })))
})

router.post('/login', (req, res) => {
    Guest.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(guest => {
            if (guest) {
                bcrypt.compare(req.body.password, guest.password,
                    function (err, match) {
                        match ? generateToken(guest) : res.send(`Something went wrong: ${err}`)
                    })

                const generateToken = (guest) => {
                    let token = jwt.sign({ id: guest.id }, 'I_AM_SECRET', { expiresIn: '1d' })
                    res.send({ guest: guest, token: token })
                }
            } else {
                res.send(`Guest not found`)
            }
        }).catch(err => res.status(500).json({ error: err }))
})

module.exports = router