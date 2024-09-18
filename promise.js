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
    if (apiKey) 
        setTimeout(()=>{
            return ({pic: pictures})
        }, 1000)
}

const user = login('dea')
user.then(function(response){
    const {token} = response
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(response)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))