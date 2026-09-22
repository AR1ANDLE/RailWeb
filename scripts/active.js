
let trains = document.querySelector('#trains')
let tripList = `
    <table>
        <th> Departure </th>
        <th> Destination </th>
        <th> Departure Time </th>
        <th> Arrival Time </th>
`

for(let i = 0; i < trips.length; i++) {
    tripList += `
    <tr>
        <td>${trips[i].departure}</td>
        <td>${trips[i].destination}</td>
        <td>${trips[i].departureTime}</td>
        <td>${trips[i].arrivalTime}</td>
    </tr>
`
}

tripList += `</table>`

trains.innerHTML += tripList
