 Dicord Status Checker

 This is a Node.js application that uses Discord.js to check the status of a specific discord user and sends notifications to a Discord channel based on the users status. It periodically checks the status of the user and notifies you if it becomes available or unavailable.

 Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Miscellaneous](#miscellaneous)

 ### Installation

 **Step 1: Clone the Repository**

 First, you need to clone the repository to your local machine. You can do this by running the following command in your terminal:

 ```bash
 git clone https://github.com/Bennobear/Discord-Status-Tracker.git
 ```

 **Step 2: Install Node.js Dependencies**

 Navigate to the project directory and install the required Node.js packages using npm. Run the following command in your terminal:

 ```bash
 cd discord-status-tracker
 npm install
 ```

 **Step 3: Configure the Application**

 Before you can use the application, you need to configure it. Create or edit `config.json` file in the project directory and set the following parameters:

 ```json
 {
     "token": "YOUR_DISCORD_BOT_TOKEN",
     "serverId": "ID_OF_SERVER";,
     "channel_id": "YOUR_DISCORD_CHANNEL_ID",
     "targetUserId" : "ID_OF_DISCORD_USER",
 }
 ```

 - `token`: Replace with your Discord bot token.
 - `channel_id`: Replace with the Discord server ID.
 - `channel_id`: Replace with the Discord channel ID.
 - `targetUserId`: Replace with the User ID
 - 

 ### Usage

 **Step 1: Run the Application**

 After configuring the `config.json` file, you can run the application using the following command:

 ```bash
 node discord_tracker.js
 ```

 **Step 2: Monitor Restaurant Status**

 The application will log in to Discord using the provided token and start checking the staus of the user every minute.

 **Step 3: Receive Notifications**

 If the status changes (from available to unavailable or vice versa), the application will send a notification to the specified Discord channel.

 **Step 4: Continuous Monitoring**

 You can keep the application running to continuously monitor the restaurant's status. It will automatically check and notify you according to the configured interval.

 ### Dependencies

 This project uses the following Node.js packages:

 - [discord.js](https://www.npmjs.com/package/discord.js): A library for interacting with the Discord API.

 ### Miscellaneous
