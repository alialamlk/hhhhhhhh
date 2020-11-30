
  const Discord = require('discord.js')
const client = new Discord.Client 
client.login("NzMxNzU1MDgwOTQzOTI3MzQ3.XwqqBg.YzkVuMQl4rXAHF_PjMS9KXANJ3I");
console.log("test");
client.on('message', message => {

  if(message.content.startsWith("s s"))  {
  var w = new Discord.MessageEmbed() 
      .setTitle("تم البرمجة من قبل طماطه و alialmalk")
      .setDescription("[سيرفر السبورت](https://discord.gg/vefkV7ZNqK)") 
      .addField(`مافي شي اسويه للاسف `)
      .addField(`اذا عندك اقتراح نسويه اقترحه في سيرفر السبورت`)
     .setColor("Black") 
        .addField(":id:✽** Server ID**",`» ${message.guild.id}  `,  true)
          .addField(":crown:✽** Server owner**",`**${message.guild.owner}**`,  true)
        .addField(":calendar: ✽**created on**"
`» ${message.guild.createdAt.toLocaleString ()}
                 )

      message.channel.send(w)
}}) 

// ثوزني


// روح ملف ثاتي
//صبر يعم
client.on('message', message => {

  if(message.content.startsWith("!"))  {
      var w = new Discord.MessageEmbed() 

      .setDescription("test") 

     .setColor("RED")
      message.channel.send("هل تريد قائمة الهيلب") 
.then(msg => {

        msg.react('✅')
  

let k = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

let e = msg.createReactionCollector(k, { time: 20000 });

       

e.on("collect", r => {


message.author.send(w) 
   
    
    message.delete()
  msg.edit("تم الإرسال ") 
  msg.reactions.removeAll()
  .catch(console.error)
     })

    })

}

});
//يلا عادي بسوي كود   
// لا تكذب 
client.on('message', message => {

  if(message.content.startsWith("r"))  {
    if(mentionned){

          var k = mentionned; } else {

          var k = message.author;
let me = new Discord.MessageEmbed() 
.setImage(k.avatarURL())
 
    
}}}) 
