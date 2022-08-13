module.exports = {
    type : "trackStart",
    channel : "$channelId",
    code: `
        $title[1;Now Playing...]
        $description[1;$if[$musicEventData[info.description]==;description not available;$musicEventData[info.description]]]
        $color[1;RANDOM]
        $author[1;$musicEventData[info.title]]
        $setVar[musictitle;$musicEventData[info.title]]
        $image[1;$musicEventData[info.thumbnail]]
      `,
  };