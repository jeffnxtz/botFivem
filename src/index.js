const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

module.exports = client;

global["Command"] = require("../src/Structures/Command.js");
global["events"] = require("../src/Structures/events.js");

client.slashCommands = new Collection();

require("../src/Structures/Client.js")(client);

process.on("unhandledRejection", (reason, promise) => {
  console.log(`🚫 Erro Detectado:\n\n` + reason, promise);
});

process.on("uncaughtException", (err, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + err, origin);
});

client.login(process.env.token);
