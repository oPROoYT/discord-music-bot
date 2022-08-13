const { Voice, LoadCommands, Bot } = require("aoi.js")

const bot = new Bot({

  // IF YOU DO NOT KNOW HOW TO GET YOUR DISCORD BOT TOKEN REFER TO THIS VIDEO FOR HELP | https://www.youtube.com/watch?v=aI4OmIbkJH8&ab_channel=WomboTech
  token: "you-wish",
  prefix: "!",
  intents: "all"
});

const loader = new LoadCommands(bot);

bot.onMessage()

bot.variables({

  // DO NOT TOUCH \\
  musictitle: "Nothing Playing...",
  queuelength: "Nothing in queue",
  
  // ONLY EDIT BELOW \\ // IF YOU DO NOT KNOW HOW TO GET THE ID OF THE ROLE CLICK THIS LINK \\ | https://www.youtube.com/watch?v=Xme4lBvrCN8&ab_channel=Asqry
  
  // YOU MUST SETUP THE ROLES BELOW FIRST BEFORE TRYING TO DO SOME COMMANDS \\ | IT WILL CRASH YOUR BOT IF YOU DO NOT DO IT FIRST \\

  botownerrole: "",
  moderatorrole: "",

})

  // DO NOT EDIT UNLESS YOU KNOW WHAT YOUR DOING\\

bot.status({
  text: "$if[$voiceID[$clientID;954747529214455808]==;Nothing Playing...;$getVar[musictitle]]",
  type: "PLAYING",
  
  // THE TIME BELOW SHOWS HOW LONG THE ACTIVITY OF THE BOT WILL APPEAR FOR \\ I RECOMMEND 3-7 FOR EACH
  time: 5
})

bot.status({
  text: "$if[$voiceID[$clientID;954747529214455808]==;Nothing in queue;$getVar[queuelength] songs in queue]",
  type: "WATCHING",

  // THE TIME BELOW SHOWS HOW LONG THE ACTIVITY OF THE BOT WILL APPEAR FOR \\ I RECOMMEND 3-7 FOR EACH
  time: 3
})


  // THIS IS THE VOICE CLASS | DO NOT TOUCH UNLESS YOU KNOW WHAT YOUR DOING | \\
const voice = new Voice(
  bot,
  {
    cache: {
      cacheType: "Memory",//Disk
      enabled: true,
      //directory : "music", only for Disk type
    },
  playerOptions: {
    trackInfoInterval: 5000,
  },//optional
  },
  true, //to enable pruneMusic 
);


bot.readyCommand({
  channel: "",
  code: `$log[Ready on $userTag[$clientID]]`
})

voice.onTrackStart();
voice.onTrackEnd();

loader.load(bot.cmd, "./commands/"); //bot cmds
loader.load(voice.cmd, "./voice/"); //voice cmds