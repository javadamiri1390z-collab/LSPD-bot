require("dotenv").config();

const http = require("http");

const {
Client,
GatewayIntentBits,
Partials,
Events
} = require("discord.js");

const config = require("./config");
const setupLogger = require("./handlers/logger");

// ========================================
// DISCORD CLIENT
// ========================================

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildVoiceStates,
GatewayIntentBits.GuildModeration
],

```
partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.User
]
```

});

// ========================================
// DISCORD READY
// ========================================

client.once(Events.ClientReady, (readyClient) => {
console.log("========================================");
console.log("        VANGUARD LSPD LOGGER");
console.log("========================================");
console.log("Bot      : " + readyClient.user.tag);
console.log("Bot ID   : " + readyClient.user.id);
console.log("Guild ID : " + config.GUILD_ID);
console.log("Guilds   : " + readyClient.guilds.cache.size);
console.log("Status   : ONLINE");
console.log("========================================");
});

// ========================================
// LOGGER HANDLERS
// ========================================

setupLogger(client);

// ========================================
// HTTP SERVER FOR RENDER
// ========================================

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
res.writeHead(200, {
"Content-Type": "text/plain; charset=utf-8"
});

```
res.end("Vanguard LSPD Logger is ONLINE");
```

});

server.listen(PORT, "0.0.0.0", () => {
console.log("[WEB] Server listening on port " + PORT);
});

// ========================================
// DISCORD LOGIN
// ========================================

if (!process.env.DISCORD_TOKEN) {
console.error("❌ DISCORD_TOKEN is missing!");
process.exit(1);
}

client.login(process.env.DISCORD_TOKEN)
.then(() => {
console.log("[DISCORD] Login request sent successfully.");
})
.catch((error) => {
console.error("❌ Discord login failed:");
console.error(error);
process.exit(1);
});
