let price = 5
let fullPrice
// let totalExpense 



console.log('Add validation!');
const form = document.querySelector('#parking-form')
let formIsValid

window.addEventListener('submit', event => {
    event.preventDefault()

})

form.addEventListener('submit', validate)


function validate (event) {
    // removeValidMessage()
    formIsValid = true
    confirmValidForm()
}

function confirmValidForm() {
    if (true) {
        const validMsgEl = document.querySelector('#total')
        validMsgEl.innerText = totalExpense()
    }
}

function totalExpense() {
    const totalDays = document.querySelector('#days').value
    let startDate = document.querySelector('#start-date').valueAsDate
    let startDay = startDate.getDay()
    console.log("day of the week", startDay)
    console.log("start date", typeof startDate, startDate)
    getParkingDates(startDate, totalDays)
    let fullPrice = totalDays * price
    return `Your total cost is $ ${fullPrice}`

}

function getParkingDates(startDate, numOfDays) {
    let copyEndDate = new Date(Number(startDate))
    console.log("number of days", numOfDays)
    let dayArray = []
    dayArray.push(startDate.getDay())
    console.log("day array", dayArray)
    for (let i = 1; i <= numOfDays; i++) {
        endDate = copyEndDate.setDate(startDate.getDate() + i)
        endDay = new Date(endDate).getDay()
        dayArray.push(endDay)
        console.log("the end day's number code value is: ", endDay, i)   
    }

  console.log("day array", dayArray)  
//  console.log("end date", endDate)
}





// cost is now $5/day on weekdays and $7/day on weekends
// use .map to pull days and multiply by 5, 7 or combination of both
// make weekday price variable & weekend price variable? use for/of for this I think? Weekday & weekend array?
// getDay can be used to get days of the week - Sunday = 0 - Saturday = 6

// let weekdayPrice = $5 if day = 1-5 = weekdayPrice 
// let weekendPrice = $7 - if day =  6 || 0 = weekendPrice = 7



// function totalVariableCost() {
//     let variedPrice = document.querySelector('#days').value {
//     if 
// //  variable of weekdayPrice & weekendPrice ? 
// }
// let startDate = document.querySelector('#start-date').value
//     console.log("startDate should be ", startDate)


