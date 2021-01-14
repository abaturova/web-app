const { Router } = require('express')
const User = require('../models/user')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})


router.get('/register', async(req, res) => {
    const users = await User.find({}).lean()

    res.render('register', {
        title: 'Register'
    })
})

router.post('/register', async(req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.firstName
    })

    await user.save()
    res.render('/register', {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    })
})

module.exports = router