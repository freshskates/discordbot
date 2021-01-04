const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
require("dotenv").config();
/* Create your personal token on https://lichess.org/account/oauth/token */
const personalToken = "";

fetch("https://lichess.org/api/account", {
  headers: {
    Authorization: "Bearer " + process.env.CHESSTOKEN,
  },
})
  .then(res => res.json())
  .then(console.log);

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
