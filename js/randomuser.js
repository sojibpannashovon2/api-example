console.log('Its working babe!!!');
const userDetails = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())

        .then(data => userData(data.results))
}
const userData = users => {

    const divContainer = document.getElementById('user-container');
    for (const user of users) {
        console.log(user);
        const newDivs = document.createElement('div');
        newDivs.classList.add('item')
        newDivs.innerHTML = `
        <h4> Gender: ${user.gender} </h4>
        <p> id: ${user.email}</p>
        <p> Country: ${user.location.country}......City: ${user.location.city}</p>
        <p> phone: ${user.phone}</p>
        <div> Name: ${user.name.title} ${user.name.first} ${user.name.last}</div>

        `;
        divContainer.appendChild(newDivs);

    }
}