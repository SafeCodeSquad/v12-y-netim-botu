const ayarlar = require('../ayarlar.json');
const Discord = require("discord.js")
const moment = require("moment")
moment.locale("tr")  
exports.run = async(client, message, args) => {
if (!message.member.roles.cache.has(ayarlar.yetkilialımdm) && !message.member.hasPermission('ADMINISTRATOR')) return message.react("❌")
let Adoncia = message.mentions.users.first()
if (!Adoncia) return message.react("❌")
let member = message.guild.member(Adoncia)
let rol1 = ""
let rol2 = ""
let rol3 = ""
let rol4 = ""
let rol5 = ""
let rol6 = ""
let rol7 = ""
let rol8 = ""
member.roles.remove(rol1)
member.roles.remove(rol2)
member.roles.remove(rol3)
member.roles.remove(rol4)
member.roles.remove(rol5)
member.roles.remove(rol6)
member.roles.remove(rol7)
member.roles.remove(rol8)

let yetkiçektim = new Discord.MessageEmbed() 
.setColor("#2F3136")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`
${member} İsimli Kullanıcı ${message.author} İsimli Yetkili Tarafından Yetkisi Alındı
Yetkisini Alan: ${message.author} \`${message.author.id}\`
Yetkisi Alınan: ${member} (\`${member.id}\`)
Yetkisi Alınma Tarihi: \`${moment(Date.now()).format("LLL")}\``)
.setFooter("Safe Code ❤ Adoncia",message.author.avatarURL({dynamic: true}))
.setTimestamp()
return client.channels.cache.get(ayarlar.logkanal).send(yetkiçektim)
}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['yetkiçek'],
    permLevel : 0
}
 
exports.help = {
    name : 'yetkiçek',
    description : '',
    usage : 'yetkiçek'
} 
