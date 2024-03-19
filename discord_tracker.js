#!/usr/bin/node node

const { Client, GatewayIntentBits } = require("discord.js");

const token = "BOT_TOKEN";
const serverId = "ID_OF_SERVER";
const channelId = "ID_OF_CHANNEL_TO_POST_STATUS";
const targetUserId = "ID_OF_DISCORD_USER";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
  ],
});

let previousUserStatus = null;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  checkAndNotifyStatus();
});

async function checkUserStatus() {
  const guild = client.guilds.cache.get(serverId);
  const targetUser = await guild.members.fetch(targetUserId);
  console.log(targetUser);
  return targetUser.presence.status;
}

async function sendDiscordNotification(status) {
  if (!status) return;
  const channel = await client.channels.fetch(channelId);

  if (status !== previousUserStatus) {
    if (status === "online") {
      await channel.send("User is online!");
    } else {
      await channel.send("User is offline!");
    }
  }

  previousUserStatus = status;
}

async function checkAndNotifyStatus() {
  console.log("Checking User..");
  const currentUserStatus = await checkUserStatus();
  sendDiscordNotification(currentUserStatus);

  setTimeout(checkAndNotifyStatus, 60000);
}

client.login(token);
