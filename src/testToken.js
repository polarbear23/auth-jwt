const { createToken,
    createTokenWithExpiry,
    verifyToken
} = require("./token");

const header = {
    "alg": "HS256",
    "typ": "JWT"
}

const payload = {

    "id": 153,
    "username": "sanchez",
    "email": "rick@sanchez.com",
    "role": "ADMIN"

}

const secret = "87764d1a-92dc-4ced-a758-9c898c31d525"

console.log(createToken(payload, secret));