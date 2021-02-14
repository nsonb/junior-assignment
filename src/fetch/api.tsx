const axios = require('axios').default
// axios is used for api fetching
const instance = axios.create({
    baseURL: 'https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/',
})
export default instance