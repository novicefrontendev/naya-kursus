let url = "https://reqres.in/api/users";

function fetchData() {
    fetch(url).then(res => {
        if (!res.ok) {
            throw Error("Error")
        }
        return res.json();
    }).then( data => {
        const html = data.data.map(user => {
            return `
            <div class="user">
                <p><img src="${user.avatar}" alt="${user.first_name}"></p>
                <p>Name : ${user.first_name}</p>
                <p>Email : ${user.email}</p>
            </div>
            `;
        }).join("");
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    }).catch(error => {
        console.log(error);
    })
}

fetchData();

function postData() {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            name: "Adli",
            job : "Backend Engineer"
        })
    }).then(res => {
        if (!res.ok) {
            throw Error("Error")
        }
        return res.json();
    }).then( data => {
        console.log(data)
    }).catch(error => {
        console.log(error);
    })
}

postData();