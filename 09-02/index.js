const api = axios.create({
    baseURL: 'https://dummyjson.com'
});

api.get('posts/5')
.then(res => {
    const title = document.createElement('h1');
    document.body.appendChild(title)
    title.innerHTML = res.data.title
    const post = document.createElement('p');
    document.body.appendChild(post)
    post.innerHTML = res.data.body
})

api.get('comments/post/5')
.then(res => {
    res.data.comments.forEach(comments => {
        const userName = document.createElement('h2');
        document.body.appendChild(userName);
        // console.log(res.data)
        userName.innerHTML = comments.user.username
        const post = document.createElement('p');
        document.body.appendChild(post)
        post.innerHTML = comments.body
    })
})


