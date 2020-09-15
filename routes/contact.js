var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "pamintuan.aerone@gmail.com",
            pass: "eatsleeplol04"   
        }
    })
    var mailOptions = {
        from: '"Aerone" <pamintuan.aerone@gmail.com>',
        to: "aerone@wizy.io",
        subject: "PC Repair test",
        text: "You have a submission from... Name: "+req.body.name+" Email: "+req.body.email+" Message: "+req.body.message,
        html: "<p>You have a submission from...</p> <ul><li>Name: "+req.body.name+" </li><li> Email: "+req.body.email+" </li><li> Message: "+req.body.message+" </li></ul> "
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log('error', error)
        } else {
            console.log('Message Sent', info.response)
            res.redirect("/")
        }
    })
})

module.exports = router;
