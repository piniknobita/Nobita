module.exports.config = {
  name: "bot",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Nayan",
  description: "sad video",
  category: "admin",
  usages: "",
    cooldowns: 5,
};





module.exports🫢.run = async function({ api, event, args, Users }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const prompt = args.join(" ");
    var name = await Users.getNameUser(event.senderID);
    var rndm = ["Bot না জানু বল-!!🥰😌","আমাকে না ডেকে আমার বস মাহফুজ কে একটা গফ দে-!!😒🔪"," প্লিজ আমাকে ডাকবেন না আমি মাহফুজ বসের সাথে বিজি আছি-!!🫂💁🏻‍♂️","আমাকে না ডেকে আমার বস মাহফুজকে নিয়ে ঘুরতে যাও-!!🫶🫰🏻","প্লিজ আমাকে ডাকবেন না আজকে আমার মন ভালো নেই-!!😓💔","তর কথা ত তর বাড়ির মানুষই শুনে না আমি কি শুনব-!!😩🔪","জ্বি বলেন শুনছি আমি-!!😇","আর পাত্তা দিমু না সুন্দর হওয়ার চুনু কিনছি-!!😏🥱"];
    var msg = rndm[Math.floor(Math.random() * rndm.length)]
    if (!prompt) return api.sendMessage(`${name}, ${msg}`, event.threadID, event.messageID);
    const res = await axios.get(`http://eu4.diresnode.com:3431/sim?type=ask&ask=${prompt}`);
  console.log(res.data)
  
    const response = res.data.data.msg;


        return api.sendMessage({
            body: response

        }, event.threadID, event.messageID);
}
