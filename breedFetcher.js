const request = require('request');
const param = process.argv.slice(2)[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${param}`
request(url, function (error, response, body) {
    const data = JSON.parse(body);
    try {
        if (data.length === 0) {
            console.log(`the requested breed is not found`);
        } else {
            console.log(`The ${param} is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.`); 
        }
    } catch(e) {
        console.log(e);
    }
});