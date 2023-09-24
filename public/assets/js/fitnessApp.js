async function quoteApiRequest() {
    try {
        const res = await fetch('https://api.kanye.rest')
        const data = await res.json()

        document.getElementById('quote').innerText = `Randomized motivational Kanye West quote of the session: \n '${data.quote}'`
    } catch (error) {
        console.log(error)
    }

}

quoteApiRequest()