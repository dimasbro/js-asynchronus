const token = ~~[Math.random() * 12345678]
const pictures = ['1.jpg', '2.jpg']

function login(username) {
    return {token, username}
}

function getUser(token) {
    if (token) return {apiKey: 'xkey123'}
}

function getPictures(apiKey) {
    if (apiKey) return pictures
}

const user = login('dea')
console.log(user.token)

const {apiKey} = getUser(user.token)
console.log(apiKey)

const getUserPicture = getPictures(apiKey)
console.log(getUserPicture)