const path = require("path");
const Commando = require("discord.js-commando");
require("dotenv").config();

const client = new Commando.CommandoClient({
  owner: "184858490634895360",
  commandPrefix: "!",
});
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.registry
    .registerGroups([
      ["misc", "misc commands"],
      ["moderation", "moderation commands"],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "cmds"));
});
client.login(process.env.BOTTOKEN);
