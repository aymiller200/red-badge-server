const router = require('express').Router()
const {Guest, Host, Book} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validate = require('../middleware/validateSessionGuest')


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
            let token = jwt.sign({ id: guest.id }, process.env.JWT_SECRET, { expiresIn: '1d' })
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
                    let token = jwt.sign({ id: guest.id }, process.env.JWT_SECRET, { expiresIn: '1d' })
                    res.send({ guest: guest, token: token })
                }
            } else {
                res.send(`Guest not found`)
            }
        }).catch(err => res.status(500).json({ error: err }))
})

router.get('/', validate,  async(req, res) => {
    try{
        const guests = await Guest.findAll({
            include: ['books']
        })
        res.status(200).json({guests})
    }catch(error){
        res.status(500).json({error})
    }
})

router.get('/hosts', validate, async (req, res) => {
    try{ 
        const hosts = await Host.findAll({
            include: ['hostBooks', 'AboutHost']
            
        })
        if(hosts){
        res.status(200).json({hosts})
        }else{
            res.status(403).json({message: 'Not Authorized'})
        }
    }catch(error){
        res.status(500).json({error})
        console.log(error)
        
    }
})

module.exports = router