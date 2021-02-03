import API_KEY from './key'
const axios = require('axios').default

export default axios.create({
    baseURL: 'https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=2017-05-01&end_date=2017-06-15',
    headers: {
        Authorization: API_KEY
    }
})