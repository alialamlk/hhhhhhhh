
  const Discord = require('discord.js')
const client = new Discord.Client 
client.login("NzMxNzU1MDgwOTQzOTI3MzQ3.XwqqBg.YzkVuMQl4rXAHF_PjMS9KXANJ3I");
console.log("test");
client.on('message', message => {

  if(message.content.startsWith("Y"))  {
       var w = new Discord.MessageEmbed()
       .setTitle("طماطه مبرمج محترف")
       .setField("من مهارته يصلح البروجكت")
  message.channel.send(w)
}}) 

// ثوزني


// روح ملف ثاتي
//صبر يعم
client.on('message', message => {
  if(message.content.startsWith("!"))  {
      var w = new Discord.MessageEmbed() 

      .setDescription("قريباً ") 

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
  if(message.content.startsWith("a"))  {
     let me = new Discord.MessageEmbed() 
     

.setImage(message.author.avatarURL()) 
     message.channel.send(me)
    }}) 
