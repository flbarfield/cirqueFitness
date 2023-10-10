//Stopwatch

let startTime
let stopwatchInterval
let elapsedPausedTime = 0

function startStopwatch() {
    if(!stopwatchInterval) {
        // get the starting time by subtracting the elapsed paused time from the current time
        startTime = new Date().getTime() - elapsedPausedTime
        stopwatchInterval = setInterval(updateStopwatch, 1000)
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval)
    elapsedPausedTime = new Date().getTime() - startTime
    stopwatchInterval = null
}

function resetStopwatch () {
    stopStopwatch()
    elapsedPausedTime = 0
    document.getElementById('stopwatch').innerHTML = '00:00:00'
}

function updateStopwatch () {
    let currentTime = new Date().getTime()
    let elapsedTime = currentTime - startTime
    let seconds = Math.floor(elapsedTime / 1000) % 60
    let minutes = Math.floor(elapsedTime / 1000 / 60) % 60
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60)
    let displayTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
    document.getElementById('stopwatch').innerHTML = displayTime
}

function pad(number) {
    // add a leading zero if the number is less than 10
    return (number < 10 ? '0' : '') + number
}


// Header quote generation //

async function quoteApiRequest() {
    try {
        let res = await fetch('https://api.kanye.rest')
        let data = await res.json()

        // runs API fetch again if the more risqué quotes are given.
        if (data.quote === 'I feel like me and Taylor might still have sex' || data.quote === 'Shut the fuck up I will fucking laser you with alien fucking eyes and explode your fucking head' ) {
            res = await fetch('https://api.kanye.rest')
            data = await res.json()
        }

        document.getElementById('quote').innerText = `Randomized motivational Kanye West quote of the session: \n \n '${data.quote}'`
    } catch (error) {
        console.log(error)
    }

}

quoteApiRequest()
