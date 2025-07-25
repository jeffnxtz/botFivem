const { ActivityType } = require("discord.js");
module.exports = class ready extends events {
  constructor(...args) {
    super(...args);
    this.event = "ready";
  }

  async exec(client) {
    client.user.setActivity(`🔥| Faça sua Whitelist!`, {
      type: ActivityType.Custom,
    });

    console.log(`Bot Online ✅`);
  }
};
