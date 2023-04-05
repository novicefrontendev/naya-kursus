const url = "https://dummyjson.com/users";
const urlSingle = "https://dummyjson.com/users/1";
const endpoint = "https://reqres.in/api/users";

// GET - METHOD 

// fetch(url)
//     .then((data) => data.json())
//     .then((result) => console.log(result))

// Undefined
// fetch(urlSingle)
//     .then((result) => result.json())
//     .then(({data}) => console.log(data))

// async function hitAPI() {
//     const api = await fetch(url);
//     const data = await api.json()
//     console.log(data);
// }

// hitAPI()

// Undefined
// async function hitAPI() {
//     const api = await fetch(urlSingle);
//     const {data} = await api.json()
//     console.log(data);
// }

// hitAPI()


// POST - METHOD
fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify({
        email: "adlirahadyan@gmail.com",
        firstName: "Adli",
    }),
})
    .then((data) => data.json())
    .then((result) => console.log(result))
