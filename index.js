const dateReceivedOrBought = moment('07-11-2023').format('MM-DD-YYYY')
console.log('Date Received: ', dateReceivedOrBought)

const daysToReturn = 45;
const dateToReturn = moment(dateReceived).add(daysToReturn, 'days').format('MM-DD-YYYY')
console.log('Date to return: ', dateToReturn)
