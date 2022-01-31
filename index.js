// Coded By Nandu
const { Client, MessageEmbed, } = require('discord.js');
const { Collection } = require('discord.js');
const Discord = require('discord.js');
const config = require('./config');
const express = require('express');
const client = new Discord.Client();
const prefix = config.prefix;
// End of importing modules


// Web Server
// Web server to keep the bot online forever
const web = require('./server')


// Things to run the command handler and event handler
client.commands = new Discord.Collection();
client.event = new Discord.Colection();

[`commandHandler`, `eventHandler`].forEach(handler =>{
  require(`./handler/${handler}`)(client, Discord);
})


//Bot Login
client.login(config.token)