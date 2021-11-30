const express = require('express');
const ejs = require('ejs');
const authController = require('./../controllers/authController');



const router = express.Router();


// app.set("view engine", "ejs");

router.route('/register')
    .get((req, res) => {
        res.render('register.ejs')
    })
    .post(authController.register)

router.route('/login')
    .get((req, res) => {
        res.render('login.ejs')
    })
    .post(authController.login)

router.get('/home', authController.protect, (req, res) => {
    res.render('home.ejs', {name: req.body.name})
})

router.route('/checkPage')
    .get((req, res) => {
        res.render('checkPage.ejs')
    })

router.route('/forgotPassword')
    .get((req, res) => {
        res.render('forgotPassword.ejs')
    })
    .post(authController.forgotPassword)

router.get('/resetPassword/:token', (req, res) => {
    res.render('resetPassword.ejs', {token : req.params.token})
})
router.post('/resetPassword/:token', authController.resetPassword)
module.exports = router;
