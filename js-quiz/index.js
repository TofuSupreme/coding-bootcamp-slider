const data = [
    {
        name: 'John',
        age: 38,
        location: 'New York',
    },

    {
        name: 'Kelly',
        age: 62,
        location: 'New York'
    },

    {
        name: 'Ken',
        age: 24,
        location: 'Chicago'
    }

]

function createListItem(text) {
    const el = document.createElement('li')
    el.innerText = text
    return el
}

// Create a list of names and render it to the ul#names-list element.

// Version 1 - works but ideal answer
// const nameList = data.map(person => person.name)
// const ulList = document.getElementById("names-list")
// ulList.innerText = nameList

// Version 2 - best answer
const ulList = document.getElementById("names-list")
data.forEach(person => {
    const el = document.createElement('li')
    el.innerText = person.name
    ulList.appendChild(el)
})

// Create a list of people and their location who only live in New York.
//  Render the list to ul#location-list

const ulLocation = document.getElementById("location-list")

data.filter(person => person.location === "New York")
    // .forEach(person => {
        // Version 1
        // const el = document.createElement('li')
        // el.innerText = persone.name + " - " + person.location <- not as clean as string interpolation
        // el.innerText = `${person.name} - ${person.location}`

        // Version 2 with variable and helper function
        // const el = createListItem(`${person.name} - ${person.location}`)
        // ulLocation.appendChild(el)

        // Version 3 with helper function
        // ulLocation.appendChild(createListItem(`${person.name} - ${person.location}`))
    // })
    
    // Version 4 super condensed, dropped function brackets
    .forEach(person => ulLocation.appendChild(
        createListItem(`${person.name} - ${person.location}`)
    ))

    // Version 5 using only 1 for loop
    // .forEach(person => {
    //     if (person.location === 'New York') {
    //         ulLocation.appendChild(
    //             createListItem(`${person.name} - ${person.location}`)
    //         )
    //     }
    // })