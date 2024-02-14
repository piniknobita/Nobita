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
    var rndm = ["আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘", " কি গো সোনা আমাকে ডাকছ কেনো", "বার বার আমাকে ডাকস কেন😡","আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱","হুম জান তোমার অইখানে উম্মমাহ😷😘"," আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি","আমাকে এতো না ডেকে বস নয়নকে একটা গফ দে 🙄","jang hanga korba","jang bal falaba🙂"];
    var msg = rndm[Math.floor(Math.random() * rndm.length)]
    if (!prompt) return api.sendMessage(`${name}, ${msg}`, event.threadID, event.messageID);
    const res = await axios.get(`http://eu4.diresnode.com:3431/sim?type=ask&ask=${prompt}`);
  console.log(res.data)
  
    const response = res.data.data.msg;


        return api.sendMessage({
            body: response

        }, event.threadID, event.messageID);
}
