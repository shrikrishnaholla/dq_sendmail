var nodemailer = require('nodemailer');
var commandLineArgs = require('command-line-args');

var argDefinitions = [
  { name: 'tls', type: Boolean },
  { name: 'smtp-user', type: String },
  { name: 'smtp-pass', type: String },
  { name: 'smtp-domain', type: String },
  { name: 'from', type: String },
  { name: 'to', type: String },
  { name: 'subject', type: String },
  { name: 'body', type: String }
]

var args = commandLineArgs(argDefinitions)

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport((args.tls ? 'smtps://' : 'smtp://') +
  args['smtp-user'] + ':' +
  args['smtp-pass'] + '@' +
  args['smtp-domain']);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: args.from,
    to: args.to,
    subject: args.subject,
    html: args.body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
