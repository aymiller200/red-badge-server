const router = require('express').Router()
const { Genre } = require('../models')
const validate = require('../middleware/validateSessionGuest')
const validateTwo = require('../middleware/validateSessionHost')

router.post('/post', validate, async (req, res) => {
    try {
        if (req.body.GuestId === req.guest.id) {
            const genre = await Genre.create(req.body);
            res.status(200).json({ genre })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({ error })
        console.log(error)
    }
})

router.get('/get-genre/:GuestId', validate, validateTwo, async (req, res) => {
    try {
        if(req.params.GuestId == req.guest.id){
        const genre = await Genre.findOne({
            where: { GuestId: req.params.GuestId},
            include: ['Guest']
        })
        res.status(200).json({ genre })
    }else{
        res.status(403).json({
            message:'Not Authorized'
        })
    }
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.put('/edit/:GuestId/:id', validate, async (req, res) => {
    try{
        if(req.params.GuestId == req.guest.id) {
            const genre = await Genre.update(req.body, {
                where: {id:req.params.id}
            })
            res.status(200).json({message:'Successfully Updated', genre})
        } else {
            res.status(403).json({
                message:'Not Authorized'
            })
        }
    } catch(error){
        res.status(500).json({error})
    }
})

module.exports = router
