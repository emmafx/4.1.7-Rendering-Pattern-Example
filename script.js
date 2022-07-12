const people = [
    {
        name: "Roger",
        age: "31",
        hometown: "Philly"
    },
    {
        name: "Doc",
        age: "2",
        hometown: "Ocala"
    },
    {
        name: "Jas",
        age: "27",
        hometown: "Arlington"
    },
]

const mainContainer = document.querySelector('main')

people.forEach(person => {
    let nameElement = document.createElement('h2')
    let ageElement = document.createElement('p')
    let hometownElement = document.createElement('h2')

    nameElement.innerHTML = person.name
    ageElement.innerHTML = person.age
    hometownElement.innerHTML = person.hometown


    mainContainer.appendChild(nameElement)
    mainContainer.appendChild(ageElement)
    mainContainer.appendChild(hometownElement)
})


function renderAPerson(person) {
    let { name, age, hometown } = person

    let content = `
        <h2>${name}</h2>
        <h3>${hometown}</h3>
        <p>${age}</p>
        `

    return content
}


function render() {
    const mainContainer = document.querySelector('main')

    mainContainer.innerHTML = ""

    const content = people.map(renderAPerson).join("")

    mainContainer.innerHTML = content
}

render()