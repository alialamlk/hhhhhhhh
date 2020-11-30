
  const Discord = require('discord.js')
const client = new Discord.Client 
client.login("NzMxNzU1MDgwOTQzOTI3MzQ3.XwqqBg.YzkVuMQl4rXAHF_PjMS9KXANJ3I");
console.log("test");
client.on('message', message => {

  if(message.content.startsWith("r"))  {
  var w = new Discord.MessageEmbed() 

      .setTitle("test")
   
      .setDescription("[test](https://discord.gg/vefkV7ZNqK)") 
      
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
essage.author.bot || message.channel.type == "dm") return;
var args = message.content.split("")[1];
var avt = args || message.author.Id;
client
.fetchUser(avt)
.then(user => {
avt = user;
let avtEmbed = new Discord.RichEmbed
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Avatar`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`يجب عليك وضع ايدي الشخص`));
}
});





