const form = document.querySelector('#inputForm');
const inputField = document.querySelector('#namn');
const formBtn = document.querySelector('#formBtn');
const output = document.querySelector('#output');
// ================================================
// const
// ================================================


// ================================================
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let result = find(inputField.value)
        .then(data => {
            // console.log(data);
            return data;
        })
        .catch(err => console.error(err));

    console.log(result);

    e.target.reset();
})
// ================================================


// ================================================
async function find(namn) {

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
function formatera() {
    return ``;
}
// ================================================


// ================================================
class ToDo {
}