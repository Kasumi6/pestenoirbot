const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`${client.user.tag} prêt pour le carnage`)
    client.user.setActivity(`PN!help | By Kasumi`,{type:"LISTENING"})
    })
    client.on("message", message => {

        if(message.content.includes("PN!help")){
            var help_embed = new Discord.RichEmbed()
            .setAuthor("Help")
            .setColor("E46525")
            .setTitle("🤖 Voici les commandes du bot :")
            .setDescription("----------------------")
            .addField("PN!blacklist", "Le bot vous envois la liste de tous les anti-raideurs.")
            .addField("PN!bot", "Le bot vous envois la liste de tous les bots raid et si ils sont connectés ou non.")
            message.channel.send(help_embed)
            console.log(`Help par ${message.author.tag}`)
        }
    })
    client.login("NTE5NTgwNTIzMjA3ODUyMDM0.DuhZTA.eBcVJhrWVE93stGR8qYnHJePxUc")
