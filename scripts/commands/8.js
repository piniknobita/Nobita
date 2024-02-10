const fs = require("fs");
module.exports.config = {
        name: "autoreact",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Islamick Chat",
        description: "non prefix reply",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (haha.includes("😚") || haha.includes("😍") || haha.includes("🥰") || haha.includes("🌼") || haha.includes("🌸") || haha.includes("😌") || haha.includes("-") || haha.includes("🖤") || haha.includes("😊") || haha.includes("💜") || 
haha.includes("😘") || haha.includes("🤭") || haha.includes("🤗") || haha.includes("☺️") || haha.includes("😇")){                 
    return api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("😩") || haha.includes("😹") || haha.includes("🙄") || haha.includes("😒") || haha.includes("🤧") || haha.includes("🤐") || haha.includes("😁") || haha.includes("😜") || haha.includes("😋") || haha.includes("🥴") || haha.includes("😎")){
      return  api.setMessageReaction("🤖", event.messageID, (err) => {}, true);
}
  if (haha.includes("😓") || haha.includes("😪") || haha.includes("😢") || haha.includes("😭") || haha.includes("😥") || haha.includes("☹️") || haha.includes("☹️") || haha.includes("😟") || haha.includes("😔") || haha.includes("🥲") || haha.includes("😅") || haha.includes("❤️‍🩹")){
    return api.setMessageReaction("🥺", event.messageID, (err) => {}, true);
  }
  if (haha.includes("ভালোবাসা") || haha.includes("love")){
    api.sendMessage("আমাকে নাহ আমার বস মাহফুজ কে ভালোবাস-!!🫶🏻😽", event.threadID, event.messageID)
  }
  if (haha.includes("Tuki") || haha.includes("Tuki")){
    api.sendMessage("______এইত টুকি সোনা আমি বসে আছি..!>3😚☺️\n\nতুমি কি কর", event.threadID, event.messageID)
  }
if (haha.includes("😄") || haha.includes("😆")){
    api.sendMessage("হাসিস না চুরের মত লাগে..!!🙄👊", event.threadID, event.messageID)
}
  if (haha.includes("ummmah") || haha.includes("ummah")){
    api.sendMessage("আমি রোবোট আমার চুম্মা খেলে কি তুমার ফিলিংস আসবে__||🙄😒\n\nআমার বস মাহফুজ বসকে বল উম্মাহ দিতে__||😌🥹😽", event.threadID, event.messageID)
  }
  if (haha.includes("টুকি কই") || haha.includes("টুকি")){
    api.sendMessage("হুম টুকি সোনা বল-!!🥰😇", event.threadID, event.messageID)
  }
  if (haha.includes("মাহফুজ") || haha.includes("মাহফুজ্জা")){
    api.sendMessage("হুম জান বল শুনছি-!!🥰🤖", event.threadID, event.messageID)
  }
  if (haha.includes("😊") || haha.includes("🙂")){
    api.sendMessage("আহারে কত কষ্ট-!!🙄🔪", event.threadID, event.messageID)
  }
if (haha.includes("biye") || haha.includes("বিয়ে")){
    api.sendMessage("🦋💚\n\nবিয়ে করলে কবুল বল-!!😒🔪💁🏻‍♂️", event.threadID, event.messageID)
}
  if (haha.includes("মিস করি") || haha.includes("miss")){
    api.sendMessage("আমার বস মাহফুজ তোমাকে অনেক মিস করে-!!☺️💔", event.threadID, event.messageID)
      }
if (haha.includes("বেপ্স") || haha.includes("বেবি")){
    api.sendMessage("হুম বেবি বল শুনছি আমি-!!🙃😽", event.threadID, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
  }
