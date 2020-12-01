
const Discord = require('discord.js')
const client = new Discord.Client 
client.login("NzMxNzU1MDgwOTQzOTI3MzQ3.XwqqBg.SrjmSDbN7R10ip7qi9-RxNg3BJo");
console.log("this bot is on");
client.setMaxListeners(999)
const prefix78 = "!" ;

 // اول اقصد
// تجارب تايم

// روح ملف ثاتي
//
client.on('message', message => {
  
  if(message.content.startsWith(prefix78 + "help"))  {
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
  msg.reactions.removeAll()

o.on("collect", r => {




  
})  })
    
}) 
})

    })

      }
    });








     
client.on('message', m => {

// طماطه 

    let argresult = m.content.split(` `).slice(1).join(' ');

    if (m.content.startsWith('!setPlay')) {

 

    m.delete();

m.channel.send("هل تريد تغير الحالة") 

.then(msg => {

        msg.react('✅')

.then(() => msg.react('✅'))

let reaction10Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === m.author.id;

let reaction10 = msg.createReactionCollector(reaction10Filter, { time: 20000 });

       

reaction10.on("collect", r => {
msg.delete() 
  m.delete() 
     client.user.setActivity(argresult,{type: 'PLAYING'});

      m.channel.send("تم تغير الحالة ")




    })})}}) 

client.on('message', tomato => {

let args = tomato.content.split(" ").slice(1).join(" ")

    if (tomato.content.startsWith( "!setA")) { 

tomato.delete() 

tomato.channel.send("هل تريد تغير الصورة") 

.then(msg => {

        msg.react('✅')


let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === tomato.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });

       

reaction1.on("collect", r => {





      tomato.channel.send('تم تغير الصورة ')            

client.user.setAvatar(args)

  .catch(console.error); 
}) 
}) 
} 
});


client.on('message', tomato => {

let args = tomato.content.split(" ").slice(1).join(" ")

    if (tomato.content.startsWith( "!setName")) { 

tomato.delete() 

tomato.channel.send("هل تريد تغير  الاسم") 

.then(msg => {

        msg.react('✅')


let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === tomato.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });

       

reaction1.on("collect", r => {





client.user.setUsername(args)

  .then(user => 

      tomato.channel.send('تم تغير الاسم ')            

) 
 

  .catch(console.error); 
}) 
}) 
} 
});


client.on('message', m => {
      if (m.content.startsWith("رسالتك")) { 
        m.guild.id == '782767111885160488'


m.reply("رد البوت")
}})


client.on('message', tomato => {

let args = tomato.content.split(" ").slice(1).join(" ")

    if (tomato.content.startsWith( "!say")) { 

tomato.delete() 

tomato.channel.send(args) 
}}) 
/*
client.on('message', ali =>{
var prefix = '-'
  if(ali.author.bot)return;
  let args = ali.content.split(" ").slice(1).join(" ")
  if(!ali.member.hasPermission('ADMINISTRATOR'))return;
  if(ali.content.startsWith(prefix + 'say')) {
    var wp = new Discord.MessageEmbed()
    .setAuthor(ali.guild.name)
    .setThumbnail(ali.guild.iconURL())
    .setColor('#RANDOM')
    .setDescription(args)
    .setTimestamp()
    ali.delete(1000);
    ali.chennel.send(wp);
  } 
} )
*/
client.on('message', tomato => {
var logchannel = tomato.guild.channels.cache.find(r=> r.name === 'اقتراحات')
let args = tomato.content.split(" ").slice(1).join(" ")

    if (tomato.content.startsWith( "!اقتراح")) { 
tomato.delete() 
let us = new Discord.MessageEmbed() 
.setTitle("اقتراح من " + tomato.author.username) 
.setDescription(`الاقتراح

${args}

`
                
                ) 
.setThumbnail(tomato.author.avatarURL()) 
.setColor("RED") 
logchannel.send(us) 

.then(msg => {
msg.react("✅")
  msg.react("⛔")  // ثواني احرب كودي
}) // قصدك يوصل لروم خاص اذا قبلتة ينرسل
 }})  //بجرب اسوي كود + كم تقيمك لي 

client.on('message', alialmalk => {
var logchannel = alialmalk.guild.channels.cache.find(r=> r.name === 'طلبات')
let args = alialmalk.content.split(" ").slice(1).join(" ")
    if (alialmalk.content.startsWith( "!طلب")) { 
alialmalk.delete() // يخي خذة كوبي وعدل
let ff = new Discord.MessageEmbed()
.setTitle("طلب جديد من" + alialmalk.author.username)
.setDescription(`الطلب



  ${args}  `)
 
.setThumbnail(alialmalk.author.avatarURL()) 
.setColor("RANDOM")
logchannel.send(ff) 
      
                
    
    }})// لا تشيل يغبي
client.on('message', alialmalk => {
var prefix = '-';
var logchannel = alialmalk.guild.channels.cache.find(r=> r.name === 'شكاوي')

let args = alialmalk.content.split(" ").slice(1).join(" ")

    if (alialmalk.content.startsWith(prefix + "report")) { 

alialmalk.delete() // يخي خذة كوبي وعدل

let ff = new Discord.MessageEmbed()

.setTitle("شكوى جديده" + alialmalk.author.username)

.setDescription(` الشكوى 

  ${args}  `)  

.setThumbnail(alialmalk.author.avatarURL()) 

.setColor("RANDOM")

logchannel.send(ff)

    

    
// ايرور عندي
}}) //كفو

  
  

           

client.on('ready', () => {
  console.log(` تم التسجيل لهاذ البوت ${client.user.tag}!`).catch(console.error) ;
}); // إضغط bot في دبلوفر و صور
//ترا غيرت التوكن اصعد فوق انسخه
  //ايش البوت تبند ؟
//شوف الدس

client.on("message", ali => {
      let argresult = ali.content.split(` `).slice(1).join(' ');
    if (ali.content.startsWith("رسالتك")) { 
      let me = new Discord.MessageEmbed
      .setTitle("عنوان القائمه")
      .addFile("اكتب اي شي")
      .setDescription("test")
      .setAuthor(ali.guild.name)
      ali.channel.send(me)

}})