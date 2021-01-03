const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");

/* Create your personal token on https://lichess.org/account/oauth/token */
const personalToken = "";

fetch("https://lichess.org/api/account", {
  headers: {
    Authorization: "Bearer " + "zBrylyUgcs3avSQ1",
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

client.login("Nzk1MTIzODU3ODIzODkxNDc2.X_EyzA.oryy6RmiqpLGSThYBV2jHRXblSQ");
