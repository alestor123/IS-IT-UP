var axios = require('axios');
module.exports = async url => {
if(!url) throw Error('Url Not Found')
var data = await axios.get(`https://isitup.org/${url.replace(/^(?:https?:)?\/\//, '')}.json`)
return data.data.status_code==1
}