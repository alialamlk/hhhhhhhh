
  const Discord = require('discord.js')
const client = new Discord.Client 
client.login("NzMxNzU1MDgwOTQzOTI3MzQ3.XwqqBg.YzkVuMQl4rXAHF_PjMS9KXANJ3I");
console.log("test");
client.on('message', message => {

  if(message.content.startsWith("s s"))  {
        if (!message.channel.guild)
                return message.channel.send(` | This Command is used only in servers!`);
       const millis = new Date().getTime() - message.guild.createdAt.getTime();
       const now = new Date();
       const verificationLevels = ["None", "Low", "Medium", "Extreme"];
       const days = millis / 1000 / 60 / 60 / 24;
       var w = new Discord.MessageEmbed()
       .setAuthor(message.guild.name, message.guild.iconURL)
       .addField(":id:✽** Server ID**",`» ${message.guild.id}  `,  true)
       .addField(
       ":calendar:✽** Created On**",
       `» ${message.guild.vreated.toLocaleString()}`,
         true
       )
       
       .addField(":crown:✽** Server owner**",`**${message.guild.owner}**`,  true)

  
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
  if(message.content.startsWith("a"))  {
     let me = new Discord.MessageEmbed() 
     

.setImage(message.author.avatarURL()) 
     message.channel.send(me)
    }}) 
