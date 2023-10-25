const form = document.querySelector('#inputForm');
const inputField = document.querySelector('#namn');
const formBtn = document.querySelector('#formBtn');
const output = document.querySelector('#output');
// ================================================
// const tempStorage =[];
// ================================================


// ================================================
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let result = myFind(inputField.value)
        .then(data => {
            // console.log(data);
            myPars(data);
        })
        .catch(err => console.error(err));

    e.target.reset();
})
// ================================================


// ================================================
async function myFind(namn) {

    let result = await fetch(`https://www.swapi.tech/api/people/?name=${namn}`)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.error(err));

    return result.result;
}
// ================================================


// ================================================
function myPars(result) {

    console.log(result);

    if (result.length < 1) {
        console.log('No person found!');
        output.innerHTML = '<p>No person found!</p>';
    }
    else {
        output.innerHTML = '';
        result.forEach(person => {

            console.log(person);

            let myProperties = person.properties

            console.log(myProperties);

            let name = myProperties.name;
            let height = myProperties.height
            let mass = myProperties.mass
            let gender = myProperties.gender
            let hair_color = myProperties.hair_color

            myPrint(name, height, mass, gender, hair_color);
        });
    }
}
// ================================================


// ================================================
function myPrint(name, height, mass, gender, hair_color) {

    console.log(`name: ${name}, height: ${height}, mass: ${mass}, gender: ${gender}, hair_color: ${hair_color}`);

    let myHtml = `<div class="listItem"><p>
        <strong>Name:</strong> ${name}<br>
        <strong>Height:</strong> ${height}<br>
        <strong>Mass:</strong> ${mass}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Hair color:</strong> ${hair_color}
    </p></div>`;

    output.innerHTML += myHtml;
}