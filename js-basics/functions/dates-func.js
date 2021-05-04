let date = new Date();


// Converting Date into format (EN, DE)
// returns a string with a language sensitive representation of this date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

// 1) Set country based date format and timeZone automatically 
// Respectively to the location and time of the user
console.log(date.toLocaleString())

// 2) Set country based date format manually and timeZone automatically
console.log(date.toLocaleString('de-DE'))

// 3) Set country based date format and timeZone manually 
console.log(date.toLocaleString('en-US', { timeZone: 'UTC' })) 
