module.exports = ({
    name: "eval",
    code: `
    
    $eval[$message]
    
    $onlyForRoles[$getVar[botownerrole];:x: You must be the bot owner!!!]
    
    `
})