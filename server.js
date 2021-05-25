let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "looking up funny cats | c.help" }, status: "idle" })

})

client.on("guildMemberAdd", member => {
  if(member.guild.id === "839388726428827708") {
    client.channels.cache.get("839397938995658783").send(`welcome to the server! ${member}`)
  }
})

client.on("message", message => {
if (message.content === "c.ping") {
  message.channel.send("pong")
} 

let Discord = require("discord.js")
let snipe = new Discord.Collection();

if(message.content.startsWith("c.8ball")) {
   let ref = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Concentrate and ask again.", "Don’t count on it.", "Most likely.", "My reply is no.", " My sources say no.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Very doubtful.", "Yes.", "Yes – definitely.", "You may rely on it."]
message.channel.send(`${ref[Math.floor(Math.random() * ref.length)]}`)
}
  
if(message.content.startsWith("c.kiss")) {
   let victim = message.mentions.users.first()
if(!victim) message.reply ("Metion someone to kiss")
else {
message.channel.send(`${victim} has been kissed!`)
}
  }
  
if(message.content === "c.cat") {
let image = new Discord.MessageAttachment("https://i.pinimg.com/originals/1e/18/d6/1e18d69a7b0f64af10799a53c31b8b41.jpg")
message.channel.send(image)
}

if(message.content.startsWith("c.slap")) {
   let victim = message.mentions.users.first()
if(!victim) message.reply ("Mention someone to slap")
else {
   message.channel.send(`${victim} has been slapped!`)
}
}

if(message.content === "c.dog") {
let image = new Discord.MessageAttachment("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*")
message.channel.send(image)
}

if(message.content === "c.help") {
      message.channel.send("hi im catto. nice to meet you!!! if you want to look at the commands, please go to https://github.com/zettaexa/catto :)")
}

if(message.content === "c.bunny") {
let image = new Discord.MessageAttachment("https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg")
message.channel.send(image)
}

if(message.content === "c.koala") {
let image = new Discord.MessageAttachment("https://preview.redd.it/lhkiwjbh0a831.png?width=630&format=png&auto=webp&s=aa3e9501822fa107e9109995612793bf72472843")
message.channel.send(image)
}

if(message.content === "c.pasta") {                                  
message.channel.send("enjoy your meal")
let image = new Discord.MessageAttachment("https://assets.bonappetit.com/photos/5aa9665c275dc52331d9184b/5:7/w_2445,h_3423,c_limit/pantry-pasta.jpg")
message.channel.send(image)
}

if(message.content === "c.burger") {
message.channel.send("enjoy your meal :)")
let image = new Discord.MessageAttachment("https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg")
message.channel.send(image)
}

if(message.content === "c.pizza") {
message.channel.send("enjoy your meal :)")
let image = new Discord.MessageAttachment("https://tummytrip.com/wp-content/uploads/2019/12/Cheese-Pizza-500x375.jpg")
message.channel.send(image)
}

if(message.content === "c.cola") {
message.channel.send("enjoy your drink!!")
let image = new Discord.MessageAttachment("https://upload.wikimedia.org/wikipedia/commons/1/10/Glass_cola.jpg")
message.channel.send(image)
}

if(message.content.startsWith ("c.kick")) {
  if(message.member.hasPermission ("KICK_MEMBERS")) {
    let member = message.mentions.members.first()
    if (!member) message.channel.send("please mention someone next time")
    else {
      member.kick().then(mem => {
        message.channel.send(`you kicked ${mem.user.username}`)
      })
    }
    
  } else {
    message.reply("you cant kick members, sorry.")
  }
  
}
  
if(message.content.startsWith ("c.ban")) {
  if(message.member.hasPermission ("BAN_MEMBERS")) {
    let member = message.mentions.members.first()
    if (!member) message.channel.send("please mention someone next time")
    else {
      member.ban().then(mem => {
        message.channel.send(`you banned ${mem.user.username}`)
      })
    }
    
  } else {
    message.reply("you cant kick ban members, sorry.")
  }
  
}
  
client.on("messageDelete", message => {
 snipe.set(message.channel.id, {
 content: message.content,
 author: message.author,
 });
 });
 if (message.content === "c.snipe") {
 const msg = snipe.get(message.channel.id);
 if (!msg) return message.channel.send("there is nothing to snipe");
 else {
 const embed = new Discord.MessageEmbed()
 .setTitle("haha sniped!!!")
 .setColor("RANDOM")
 .setTimestamp()
 .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
 .addFields(
 { name: "Sender", value: msg.author.username },
 { name: "Content", value: msg.content }
 );
 message.channel.send(embed);
 }
 }
  
if(message.content === "c.sex") {
  message.channel.send("among us in real life")
}
  
if(message.content === "c.capybara") {               
let image = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/778001604665409587/839953717536751646/b4c99b5f3f04f00c682f2340289ab0ba1d3946a4a95441d14d198fa66f504742_1.png")
message.channel.send(image)
}
  
  
          })
client.login(process.env.TOKEN)