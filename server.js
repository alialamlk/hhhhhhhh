
  const Discord = require('discord.js')
const client = new Discord.Client 
client.login("NzMxNzU1MDgwOTQzOTI3MzQ3.XwqqBg.YzkVuMQl4rXAHF_PjMS9KXANJ3I");
console.log("test");



 


// روح ملف ثاتي
//صبر يعم
client.on('message', message => {
  if(message.content.startsWith("!"))  {
      var w = new Discord.MessageEmbed() 
.setTitle("الاوامر العامة") 
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
 
  .then(() => msg.react('▶️')) 
  

        
let yt = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;

let ml = msg.createReactionCollector(yt, { time: 20000 });

       

ml.on("collect", r => {
  let co = new Discord.MessageEmbed() 
 .setColor("RED") 
 .setTitle("قائمة الاوامر ٢")
  msg.edit(co)
  
 })}) 
  .catch(console.error)
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

client.on('message', message => {
if(message.content.startsWith("k"))  {
      var w = new Discord.MessageEmbed() 
      .setTitle("الاوامر")
      .setDescription("test ") 
      message.channel.send(`تبي ايش ؟ `)
.then(msg => 
      {
msg.react('1️⃣')

let k = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

let e = msg.createReactionCollector(k, { time: 20000 });

e.on("collect", r => {

message.delete
msg.edit('تم الارسال')

  
  
    msg.reactions.removeAll()


})

    }) 

      }

} ); // خلي `