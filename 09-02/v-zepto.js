const body = $('body')
const api = axios.create({
    baseURL: 'https://dummyjson.com'
});

api.get('posts/5')
.then(res => {
    body.append(`<h1>${res.data.title}</h1>`);
    body.append(`<p>${res.data.body}</p>`)
})

// api.get('comments/post/5')
// .then(res => {
//     res.data.comments.forEach(comments => {
//         const userName = document.createElement('h2');
//         document.body.appendChild(userName);
//         // console.log(res.data)
//         userName.innerHTML = comments.user.username
//         const post = document.createElement('p');
//         document.body.appendChild(post)
//         post.innerHTML = comments.body
//     })
// })