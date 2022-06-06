const ayarlar = require('../ayarlar.json');
const Discord = require("discord.js")
const moment = require("moment")
moment.locale("tr")  
exports.run = async(client, message, args) => {
if (!message.member.roles.cache.has(ayarlar.yetkilialımdm) && !message.member.hasPermission('ADMINISTRATOR')) return message.react("❌")
 let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
 if (!member) return message.react("❌")

let rol1 = ""
let rol2 = ""
member.roles.add(rol1)
member.roles.add(rol2)
message.react("✅")
let yetkiliyaptım = new Discord.MessageEmbed() 
.setColor("#2F3136")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`
${member} İsimli Kullanıcı ${message.author} İsimli Yetkili Tarafından Yetkiye Alındı
Yetkiye Alan: ${message.author} \`${message.author.id}\`
Yetkiye Alınan: ${member} (\`${member.id}\`)
Yetkiye Alınma Tarihi: \`${moment(Date.now()).format("LLL")}\``)
.setFooter("Safe Code ❤ Adoncia",message.author.avatarURL({dynamic: true}))
.setTimestamp()
return client.channels.cache.get(ayarlar.logkanal).send(yetkiliyaptım)
}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['yetkilial'],
    permLevel : 0
}
 
exports.help = {
    name : 'yetkilial',
    description : '',
    usage : 'yetkilial'
} 
