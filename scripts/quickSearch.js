const origin = document.getElementById('Origin')
const destination = document.getElementById('Destination')
const trains = document.getElementById('trains')
const searchBtn = document.getElementById('searchBtn')

function datVerif() {
    if(origin.value === '' || destination.value === '') {
        return trains.innerHTML = `<h2 style="color: red; text-align: center;">Please fill in both fields</h2>`
    }
    for(let i = 0; i < numbers.length; i++) {
        if(origin.value.includes(numbers[i])) {
            return trains.innerHTML = `<h2 style="color: red; text-align: center;">Cities cannot include a number</h2>`
        }
    }
    for (i = 0; i < spChars.length; i++) {
        if(origin.value.includes(spChars[i])) {
            return trains.innerHTML = `<h2 style="color: red; text-align: center;">Cities cannot include a special character</h2>`
        }
    }
    return true;
}

function searchTrips() {

    let tripsList = `
        <table>
            <tr>
                <th>Departure</th>
                <th>Destination</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
            </tr>`

    for (let i = 0; i < trips.length; i++) {

        if (
            trips[i].departure.toUpperCase() === origin.value.toUpperCase() &&
            trips[i].destination.toUpperCase() === destination.value.toUpperCase()
        ) {

            tripsList += `
                <tr>
                    <td>${trips[i].departure}</td>
                    <td>${trips[i].destination}</td>
                    <td>${trips[i].departureTime}</td>
                    <td>${trips[i].arrivalTime}</td>
                </tr>
            `
        }
    }

    tripsList += `</table>`
    if(tripsList === `
        <table>
            <tr>
                <th>Departure</th>
                <th>Destination</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
            </tr></table>`) { tripsList = `<h2 style='color: red; text-align: center'>No trips was found</h2>`}
    trains.innerHTML = tripsList
}


searchBtn.addEventListener('click', function() {
    if(datVerif() === true){
        searchTrips()
    }
})