const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.channel.id == "795130801926438953" && msg.content === "ping") {
    // msg.reply("pong");
    msg.channel.send("pong");
  }
});

client.login(process.env.BOTTOKEN);
