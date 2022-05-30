const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    if (!message.member.roles.cache.has(ayarlar.yetkilialımdm) && !message.member.hasPermission('ADMINISTRATOR')) return message.react("❌)

    if(!message.member.voice || message.member.voice.channelID != ayarlar.toplantıseskanal) return; 
    let üyeler = message.guild.members.cache.filter(member => member.roles.cache.has(ayarlar.katıldı) && member.voice.channelID != ayarlar.toplantıseskanal);
    üyeler.array().forEach((member, index) => {
      setTimeout(() => {
        member.roles.remove(ayarlar.katıldı).catch();
      }, index * 1250)
    });
    
    let katıldıverildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has(ayarlar.katıldı) && !member.user.bot)
    katıldıverildi.array().forEach((member, index) => {
      setTimeout(() => {
        member.roles.add(ayarlar.katıldı).catch();
      }, index * 1250)
    });
    message.channel.send(new Discord.MessageEmbed()
    .setFooter("Safe Code ❤ Adoncia")
    .setAuthor(message.author.tag,message.author.avatarURL({dynamic: true}))
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(`Katıldı Rolü Veriliyor \n\nRol Verilecek: ${katıldıverildi.size} \nRol Alınacak: ${üyeler.size}`)).catch();
    
      
    }
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['katıldı'],
    permLevel : 0
}
 
exports.help = {
    name : 'katıldı',
    description : '',
    usage : 'katıldı'
}
