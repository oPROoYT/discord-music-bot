module.exports = {
    name: "play",
    $if: "v4",
    code: `
    $deletecommand
    $author[1;Song Queue]
    $description[1;Added **$playTrack[youtube;$message;5s;yes;{newEmbed:{title:Error} {description:Something went wrong!} {color:RANDOM}}] **in queue!]
    $setVar[queuelength;$queuelength]
    $footer[1;Requested by $userTag[$authorID]]

    $if[$hasPlayer==false]
    $joinVC
    $endIf


    $onlyif[$voiceId!=;join a voice channel before using play cmd]
    $argscheck[>0;You have to put a valid song name and or url.]
  `
};