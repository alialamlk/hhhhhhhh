
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
   .then(msg2 => {

        msg2.react('▶️')
    let yt = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;

let ml = msg2.createReactionCollector(yt, { time: 20000 });
  

ml.on("collect", r => {
message.delete() 
  let co = new Discord.MessageEmbed() 

 .setColor("RED") 

 .setTitle("قائمة الاوامر ٢")
.setDescription("قريباً ") 
  msg2.edit(co)
msg2.react("◀️") 
    let yu = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;

let mli = msg2.createReactionCollector(yu, { time: 20000 });

  

mli.on("collect", r => {
msg2.edit(w) 
    

 

 })

}) 
 
       

 })}) 
  
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
      message.channel.send("ايش تبي ؟")
.then(msg =>
      {
msg.react('⏺')

let k = (reaction, user) => reaction.emoji.name === '⏺' && user.id === message.author.id;

let e = msg.createReactionCollector(k, { time: 20000 });

e.on("collect", r => {

  
  message.author.send(w) 


  
message.delete
msg.edit('تم الارسال')
  msg.reactions.removeAll()

     .then(msg => {

msg.react('▶️')
  
let kk = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;

let o = msg.createReactionCollector(kk, { time: 20000 });

o.on("collect", r => {

  let ko = new Discord.MessageEmbed() 

      var ggg = new Discord.MessageEmbed() 


.setColor("Red")
    .setTitle('قائمه الاوامر رقم 2')
        .setDescription("قريبا جدا جدا ") 
msg.edit(ko)
  msg.reactions.removeAll()
msg.react('◀️')
  message.author.send(ggg) 

       .then(msg => {

msg.react('🔼')

let mkmk = (reaction, user) => reaction.emoji.name === '🔼' && user.id === message.author.id;

let mmmm = msg.createReactionCollector(kk, { time: 20000 });






        
  
   
    


  

} )  })
    
}) 
})

    }) 

      }
    });