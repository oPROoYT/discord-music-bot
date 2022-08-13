module.exports = {
    name: "queue",
    code: `
    $deletecommand
     $title[1;Queue]
     $author[1;Requested By $usertag;$authorAvatar]
     $description[1;$queue[$if[$message==;1;$message]]]
     $footer[1;number of songs -> $queueLength]
     $color[1;RANDOM]
     $addTimestamp[1]

     $onlyif[$voiceId!=;join a voice channel before using this cmd]
      `,
  };