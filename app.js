const Discord = require('discord.js');
const bot = new Discord.Client();
                                      
bot.on("ready", async () => {
    console.log(`${bot.user.username} ${bot.guilds.size} sunucuda aktif!`);
  
    bot.user.setActivity("Brawlhalla", {type: "PLAYING"});
  });
  
                                                                                                                                 
bot.login(process.env.BOT_TOKEN);

