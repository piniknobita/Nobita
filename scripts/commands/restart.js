module.exports.config = {
	name: "rest",
	version: "7.0.0",
	permission: 2,
	credits: "ryuko",
	prefix: false,
	description: "restart bot system",
	category: "admin",
	usages: "",
	cooldowns: 0,
	dependencies: {
		"process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
  const process = require("process");
  const { threadID, messageID } = event;
  api.sendMessage(`𝙱𝚘𝚜𝚜 𝚒 𝚊𝚖 𝚛𝚎𝚜𝚝𝚊𝚛𝚝𝚒𝚗𝚐 ${global.config.BOTNAME} ai, please be patient.`, threadID, ()=> process.exit(1));
}
