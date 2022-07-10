const express = require('express')
const app = express()
const port = 83
const path = require('path')
const bodyParser = require("body-parser");
const router = express.Router();
const Discord = require('discord.js')
// Static Files
app.use(express.static(__dirname + '/views/assets'));
app.use('/css', express.static(__dirname + 'views/assets/css'))
app.use('/js', express.static(__dirname + 'views/assets/js'))
app.use('/img', express.static(__dirname + 'views/assets/img'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set Views
app.set("views", path.join(__dirname, "/views"));
app.get('/', async (req, res) => {
    res.render('index.ejs')
})
const webhook = new Discord.WebhookClient({
      id: '988048177972269056',
      token: 'MTqvwmNY5yB_76CepxJUQ_VmptIQUUYAtqg-ZvLNGsOIGaIgNchYURID_g68LgeEUhN_'
});
app.post('/apply', function(req, res){
    console.log(req)
    const b = req.body
    const embed = new Discord.MessageEmbed()
    .setTitle(`Apply from ${req.body.fullname}`)
    .addField('Full Name', b.fullname, true)
    .addField('Email', b.email, true)
    .addField('Phone Number', b.phonenumber, true)
    .addField('Discord Tag', b.discordtag, true)
    .addField('Position', b.position, true)
    .addField('IP', req.rawHeaders[1], true)
    .setColor('#5866ef')
    .setDescription(`**__Motivation: + Experience__**\n\`\`\`${req.body.motivation}\`\`\``)
    webhook.send({
        username: "DLS Apply Logs",
        avatarURL: `https://cdn.discordapp.com/attachments/955562162967953460/995739896503341066/favicon.jpg`,
        embeds: [embed]});
})
app.listen(port, function () { console.log(`Listening on port http://localhost:${port}`) })