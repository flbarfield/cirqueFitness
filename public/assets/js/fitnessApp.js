// Unhiding Sections

// document.querySelectorAll('.fa-note-sticky').addEventListener('click', showNotes)
// document.querySelectorAll('.fa-stopwatch').addEventListener('click', showTimer)

function showNotes () {
    //TODO
}

function showTimer() {
    // TODO
}

// Date setting
// function setDate () {
//     const [date] = formatDate(new Date()).split(' ')
//     const dateInputValue = document.getElementById('date')

//     dateInputValue.value = date
// }




// dateInputValue = date

// Header quote generation //

async function quoteApiRequest() {
    try {
        let res = await fetch('https://api.kanye.rest')
        let data = await res.json()

        // runs API fetch again if risky quotes are given.
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
// setDate()
