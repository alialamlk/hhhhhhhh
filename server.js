
  const Discord = require('discord.js')
const client = new Discord.Client 
client.login("NzMxNzU1MDgwOTQzOTI3MzQ3.XwqqBg.YzkVuMQl4rXAHF_PjMS9KXANJ3I");
console.log("test");
client.on('message', message => {

  if(message.content.startsWith("r"))  {
  var w = new Discord.MessageEmbed() 

      .setTitle("test")
   
      .setDescription("[test](https://discord.gg/vefkV7ZNqK)") 
      .addField(``)
      .addField(`ايش تبي`)
  
     .setColor("RED") 

      message.channel.send(w)
}}) 

// ثوزني


// روح ملف ثاتي
//صبر يعم
client.on('message', message => {

  if(message.content.startsWith("!"))  {
      var w = new Discord.MessageEmbed() 

      .setDescription("test") 

     .setColor("RANDOM") 

message.author.send(w) 
   
    message.channel.send("") 
}}) 
