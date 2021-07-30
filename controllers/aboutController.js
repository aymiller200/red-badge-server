const router = require('express').Router()
const { AboutYou } = require('../models')
const validate = require('../middleware/validateSessionGuest')
const validateTwo = require('../middleware/validateSessionHost')


router.post('/guest-info', validate, async (req, res) => {
    try {
        if (req.body.GuestId === req.guest.id) {
            const info = await AboutYou.create(req.body);
            res.status(200).json({ info })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({ error })
        console.log(error)
    }
})

router.get('/get-bio/:GuestId', validate, validateTwo ,async (req, res) => {
    try {
        if(req.params.GuestId == req.guest.id){
        const info = await AboutYou.findOne({
            where: {GuestId: req.params.GuestId},
            include: ['Guest']
        })
        res.status(200).json({ info })
    }else{
        res.status(403).json({message: 'Not Authorized'})
    }
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.put('/edit-bio/:GuestId/:id', validate, async (req, res) => {
    try{
        if(req.params.GuestId == req.guest.id) {
            const info = await AboutYou.update(req.body, {
                where: {id:req.params.id}
            })
            res.status(200).json({message:'Successfully Updated', info})
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