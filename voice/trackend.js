module.exports = {
    type : "trackEnd",
    channel : "$channelId",
    code: `
    $setVar[musictitle;Nothing Playing...]
    $setVar[queuelength;Nothing in queue]
      `,
  };