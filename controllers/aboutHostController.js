const router = require('express').Router()
const { AboutHost } = require('../models')
const validateTwo = require('../middleware/validateSessionHost');
const validate = require('../middleware/validateSessionGuest');

router.post('/host-info', validateTwo, async (req, res) => {
    try {
        if (req.body.HostId === req.hosts.id) {
            const info = await AboutHost.create(req.body);
            res.status(200).json({ info })
        } else {
            res.status(403).json({ message: 'Not Authorized' })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.get('/host-info/:HostId', validateTwo, validate, async (req, res) => {
    try {
        const info = await AboutHost.findOne({
            where: { HostId: req.params.HostId },
            include: ['Host']
        })
        res.status(200).json({ info })

    } catch (error) {
    res.status(500).json({ error })
}
})

router.put('/edit-bio/:HostId/:id', validateTwo, async (req, res) => {
    try{
        if(req.params.HostId == req.hosts.id) {
            const info = await AboutHost.update(req.body, {
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

