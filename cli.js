#!/usr/bin/env node

var isitup = require('./App');
(async () => {
if(await isitup(process.argv[2] || 'github.com')) console.log('yeah its up you should check your connection')
else console.log('Nope its down. And its gone it didnt do well its gone poof')
})();
