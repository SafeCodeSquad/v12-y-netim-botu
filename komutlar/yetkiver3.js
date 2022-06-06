const ayarlar = require('../ayarlar.json');
const Discord = require("discord.js")
const moment = require("moment")
moment.locale("tr")  
exports.run = async(client, message, args) => {
if (!message.member.roles.cache.has("KULLANACAK YETKİLİ ROL İD") && !message.member.hasPermission('ADMINISTRATOR')) return message.react("❌")
let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
if (!member) return message.react("❌")


let rol1 = ""
let rol2 = ""
let rol3 = ""
let rol4 = ""
let rol5 = ""
let rol6 = ""
let rol7= ""
let rol8= ""
member.roles.remove(rol1)
member.roles.remove(rol2)
member.roles.remove(rol3)
member.roles.remove(rol4)
member.roles.remove(rol5)
member.roles.remove(rol6)
member.roles.add(rol7)
member.roles.add(rol8)
message.react("✅")
let yetki3 = new Discord.MessageEmbed() 
.setColor("RANDOM")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`
${member} İsimli Kullanıcı ${message.author} İsimli Yetkili Tarafından Yetkisi Yükseltildi
Yetkisini Yükselten: ${message.author} \`${message.author.id}\`
Yetkisi Yükselen: ${member} (\`${member.id}\`)
Yetki Türü: \`Kademe 2\`
Yetki Yükseltme Tarihi: \`${moment(Date.now()).format("LLL")}\``)
.setFooter("Safe Code ❤ Adoncia",message.author.avatarURL({dynamic: true}))
.setTimestamp()
return client.channels.cache.get(ayarlar.logkanal).send(yetki3)
}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['yt3'],
    permLevel : 0
}
 
exports.help = {
    name : 'yt3',
    description : '',
    usage : 'yt3'
} 
