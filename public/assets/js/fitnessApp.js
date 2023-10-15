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

// date setting.....
function defaultDate () {
    //TODO
}


//show exerciseBank
function showExerciseBank () {
    document.getElementById('exerciseBank').classList.toggle('hidden')
}

// populates exercise bank
function populateExerciseBank () {
    const bankList = document.getElementById('bankList')

    for (e in exercises) {
        let fixedE_String = e.replaceAll('_', ' ')
        bankList.appendChild(document.createElement('a'))
        bankList.lastChild.textContent = fixedE_String
        //sets classname as exercise bank name for reference in adding links.
        bankList.lastChild.setAttribute('class', e + ' bankListItem' )
    }

    // adds event listener to all bankList items
    const addedExerciseBankItems = document.querySelectorAll('.bankListItem')

    addedExerciseBankItems.forEach((exerciseItem) => {
        //returns needed prop for exercise bank
        exerciseItem.addEventListener('click', (e) => {
            populateBankInfo(e.target.classList[0])
        })
    })
}

// adds descriptions, images and links to bankInfo
function populateBankInfo (prop) {

    // converts variable property from classList into an expression
    const {photo, instructions, video, muscleGroups} = eval(`exercises.` + `${prop}`)

    document.querySelector('.bankInfoExerciseTitle').innerText = prop.replaceAll('_', ' ')
    document.querySelector('.bankImg').src = photo
    document.querySelector('.muscleGroups').innerText = muscleGroups
    document.querySelector('.bankInstructions').innerText = instructions
    document.querySelector('.youTubeLink').href = video 
    document.querySelector('.youTubeLink').innerText = 'YouTube Link' 
}

// exercise bank content
const exercises = {
    Hanging_Leg_Raises : {
        instructions: '1) Hang on your chosen apperatus with a firm grip. 2)Raise your legs to a level that feels challenging but still enables you to keep good form. Strive to get them parallel to the ground (so that your hips are bent at 90 degrees), or a little higher if you can. 3)Lower your legs back down slowly until they return to the starting position, inhaling during this portion of the exercise. Maintain your posterior pelvic tilt, even at the bottom of the movement.',
        photo: 'https://res.cloudinary.com/dniwvymzt/image/upload/v1697237600/Cirque%20Fitness/hangingLegRaises_gwychp.jpg',
        video:'https://youtu.be/Pr1ieGZ5atk?si=SnzS-pUU3-RhYYgF',
        muscleGroups: 'Hip extensors, Abdominals', 
        apperatus: 'Any aerial apperatus',
    },
    Ring_Push_Ups : {
        instructions: '1) Place the rings over a bar. The straps should be adjusted so that the rings are around 2 inches above the ground. The two rings should be shoulder width apart. If using aerial straps or silks, perform a double-wrap before attempting this exercise. 2) Place your feet on a chair, bench or plyobox to elevate your feet. Perform a pushup while your feet are elevated. 3) To make Ring pushups more challenging,  end each repetition with a RTO or Ring turn out. This mean at the top of each ring pushup, keep your arms straight and turn your hands so that your elbows are facing back. This makes the ring pushup much more challenging and will also help translate to straight arm holds like the back lever and planche.',
        photo: 'https://res.cloudinary.com/dniwvymzt/image/upload/v1697237628/Cirque%20Fitness/ringPushUp2_lypsjr.webp',
        video:'https://youtu.be/K_ZNhLw2yb4?si=PzQWeR47_Vmye9nH',
        muscleGroups: 'Chest, Abdominals', 
        apperatus: 'Rings, Aerial Straps, Silks',
    },
    Meat_Hook : {
        instructions: '1) Grab your chosen aerial apperatus tightly if it\'s a bar apperatus. Perform a double wrap if you\'re using aerial straps 2) Perform a windshield wiper toward your dominant arm 3) When your legs are all the way over to the side, lift your hips toward your elbow, folding your body around your arm. It may take some trial and error to get a feel for finding the “sweet spot” but at a certain point, you will feel your balance shift. 4) Once your hips are in position, begin to loosen the grip on your secondary hand, gradually transferring all of your weight to the other arm. When you feel confident enough to completely release your secondary hand from the bar, do so carefully. 5) You\'re now holding a meathook - congratulations! Stay here for a few seconds, then slowly reverse the movement and try it on the other side.',
        photo: 'https://res.cloudinary.com/dniwvymzt/image/upload/v1697237621/Cirque%20Fitness/meatHook_orscow.jpg',
        video:'https://youtu.be/ySm23sR0ick?si=RKYvG4tHRSpF0weB',
        muscleGroups: 'Shoulders, Lats, Abdominals', 
        apperatus: 'Aerial Straps, Lyra, Trapeze',
    }
}

populateExerciseBank()
quoteApiRequest()

