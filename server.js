
  const Discord = require('discord.js')
const client = new Discord.Client 
client.login("NzMxNzU1MDgwOTQzOTI3MzQ3.XwqqBg.YzkVuMQl4rXAHF_PjMS9KXANJ3I");
console.log("test");
client.on('message', message => {

  if(message.content.startsWith("r"))  {

var aa = new Discord.MessageEmbed() 

.setTitle("تم البرمجه من alialmalk و طماطه")

// اتركني اصحح 

.setDescreiption("[سيرفر السبورت](https://discord.gg/qxraAyNT)")

        message.channel.send(aa) 

// معرف الايبمد aa مسوية انت

}}) 

// ثوزني


// روح ملف ثاتي
//صبر يعم
