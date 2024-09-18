const token = ~~[Math.random() * 12345678]
const pictures = ['1.jpg', '2.jpg']

function login(username) {
    console.log('processing token...')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username != 'dea') failed('sorry wrong data')
            success({token})
        }, 300)
    })
}

function getUser(token) {
    console.log('processing api key...')
    return new Promise((success, failed) => {
        if (!token) failed('sorry, no token')
        setTimeout(()=>{
            success({apiKey: 'xkey123'})
        }, 500)
    })        
}

function getPictures(apiKey) {
    console.log('processing picture...')
    return new Promise((success, failed) => {
        if (!apiKey) failed('sorry, no api key')
        setTimeout(()=>{
            success({pic: pictures})
        }, 1000)
    })
}

async function userDisplay() {
    try {
        const {token} = await login('dea')
        const {apiKey} = await getUser(token)
        const {pic} = await getPictures(apiKey)
        console.log(`
            token: ${token}
            apiKey: ${apiKey}
            pic: ${pic}
        `)
    } catch (err) {
        console.log(err)
    }
}

userDisplay()