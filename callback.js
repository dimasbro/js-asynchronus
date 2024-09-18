const token = ~~[Math.random() * 12345678]
const pictures = ['1.jpg', '2.jpg']

function login(username, callback) {
    console.log('processing token...')
    setTimeout(() => {
        callback({token, username})
    }, 300)
}

function getUser(token, callback) {
    console.log('processing api key...')
    if (token) 
        setTimeout(()=>{
            callback({apiKey: 'xkey123'})
        }, 500)
}

function getPictures(apiKey, callback) {
    console.log('processing picture...')
    if (apiKey) 
        setTimeout(()=>{
            callback({pic: pictures})
        }, 1000)
}

login('dea', function(response) {
    const {token} = response
    getUser(token, function(response){
        const {apiKey} = response
        getPictures(apiKey, function(response){
            console.log(response)
        })
    })
})