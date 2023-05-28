function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    string = string.toUpperCase()
    return console.log(string)
}

function logWhisper(string) {
    string = string.toLowerCase()
    return console.log(string)
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        string = "I can't hear you!"
        return string 
    }
    else if (string === string.toUpperCase()) {
        string = "YES INDEED!"
        return string
    }
    else {
        string = "I would love to!"
        return string
    }
}