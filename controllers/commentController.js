const router = require('express').Router()
const { Comment } = require('../models')
const validate = require('../middleware/validateSessionGuest')
const validateTwo = require('../middleware/validateSessionHost')

router.post('/message', validate, async (req, res) => {
    try {
        if (req.body.GuestId === req.guest.id) {
            const comment = await Comment.create(req.body);
            res.status(200).json({ comment })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.post('/host-message', validateTwo, async (req, res) => {
    try {
        if (req.body.HostId === req.hosts.id) {
            const comment = await Comment.create(req.body);
            res.status(200).json({ comment })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.get('/all/:GuestId', validate, async (req, res) => {
    try {

        if (req.params.GuestId == req.guest.id) {
            const comments = await Comment.findAll({
                where: { GuestId: req.params.GuestId },
                include: ['Book']

            })
            res.status(200).json({ comments })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }

    } catch (error) {
        res.status(500).json({ error })

    }
})

router.get('/host-all/:HostId', validateTwo, async (req, res) => {
    try {
        if (req.params.HostId == req.hosts.id) {
            const comments = await Comment.findAll({
                where: { HostId: req.params.HostId },
                include: ['Book']
            })
            res.status(200).json({ comments })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }

    } catch (error) {
        res.status(500).json({ error })
    }
})

router.put('/edit/:id', validate, async (req, res) => {
    try {
        if (req.body.GuestId === req.guest.id) {
            const comment = await Comment.update(req.body, { where: { id: req.params.id } })
            res.status(200).json({ message: 'Successfully Updated', comment })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.put('/host-edit/:id', validateTwo, async (req, res) => {
    try {
        if (req.body.HostId === req.hosts.id) {
            const comment = await Comment.update(req.body, { where: { id: req.params.id } })
            res.status(200).json({ message: 'Successfully Updated', comment })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }

    } catch (error) {
        res.status(500).json({ error })
    }
})

router.delete('/delete/:id', validate, async (req, res) => {
    try {
        console.log(req.body.GuestId, req.guest.id)
        if (req.body.GuestId === req.guest.id) {
            const comment = await Comment.destroy({
                where: { id: req.params.id }
            })
            res.status(200).json({ message: 'Successfully Deleted', comment })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.delete('/host-delete/:id', validateTwo, async (req, res) => {
    try {
        if(req.body.HostId === req.hosts.id){
            const comment = await Comment.destroy({
                where: {id: req.params.id}
            })
            res.status(200).json({message: 'Successfully deleted', comment})
        }else{
            res.status(403).json({message:'Not Authorized'})
        }

    } catch (error) {
        res.status(500).json({ error })
    }
})



module.exports = router