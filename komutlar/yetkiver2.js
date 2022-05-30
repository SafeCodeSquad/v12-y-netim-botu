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
member.roles.remove(rol1)
member.roles.remove(rol2)
member.roles.add(rol3)
member.roles.add(rol4)
member.roles.add(rol5)
member.roles.add(rol6)

let yetki2 = new Discord.MessageEmbed() 
.setColor("#2F3136")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`
${member} İsimli Kullanıcı ${message.author} İsimli Yetkili Tarafından Yetkisi Yükseltildi
Yetkisini Yükselten: ${message.author} \`${message.author.id}\`
Yetkisi Yükselen: ${member} (\`${member.id}\`)
Yetki Türü: \`Kademe 2\`
Yetki Yükseltme Tarihi: \`${moment(Date.now()).format("LLL")}\``)
.setFooter("Safe Code ❤ Adoncia",message.author.avatarURL({dynamic: true}))
.setTimestamp()
return client.channels.cache.get(ayarlar.logkanal).send(yetki2)
}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['yt2'],
    permLevel : 0
}
 
exports.help = {
    name : 'yt2',
    description : '',
    usage : 'yt2'
} 
