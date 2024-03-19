#!/usr/bin/node node

const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");

const token = config.token;
const serverId = config.serverId;
const channelId = config.channel_id;
const targetUserId = config.targetUserId;

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
