const router = require('express').Router()
const { Book } = require('../models')
const validate = require('../middleware/validateSessionGuest');
const validateTwo = require('../middleware/validateSessionHost')

router.post('/schedule/:GuestId', validate, async (req, res) => {
    try {
        if (req.params.GuestId == req.guest.id) {
            const book = await Book.create(req.body);
            res.status(200).json({ book });
        } else {
            res.status(403).json({ message: 'Forbidden' })
        }

    } catch (error) {
        res.status(500).json({ error })
    }

})

router.put('/edit/:GuestId/:id', validate, async (req, res) => {
    try {

        if (req.params.GuestId == req.guest.id) {
            const book = await Book.update(req.body, { where: { id: req.params.id } })
            res.status(200).json({ message: 'Successfully updated', book })
        } else {
            res.status(500).json({ message: 'Could not update' })
        }

    } catch (error) {
        res.status(500).json({ error })
    }
})

router.get('/schedule/:GuestId', validate, async (req, res) => {
    try {
        if (req.params.GuestId == req.guest.id) {
            const bookings = await Book.findAll({
                where: { GuestId: req.params.GuestId },
                include: ['Guest', 'Host', 'bookComments']
            })
            res.status(200).json({ bookings })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }

    } catch (error) {
        res.status(500).json({ error }) 
    }
})

router.get('/host-schedule/:HostId', validateTwo, async (req, res) => {
    try {
        if (req.params.HostId == req.hosts.id) {
            const bookings = await Book.findAll({
                where: { HostId: req.params.HostId },
                include: ['Host', 'Guest', 'bookComments']
            })
            res.status(200).json({ bookings })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

router.delete('/delete/:GuestId/:id', validate, async (req, res) => {
    try {
        if (req.params.GuestId == req.guest.id) {
            const book = await Book.destroy({
                where: { id: req.params.id }
            })
            
            res.status(200).json({ message: 'Successfully deleted', book})
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({ error })
    }

})

module.exports = router