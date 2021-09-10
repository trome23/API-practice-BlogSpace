const postTitle = document.querySelector("#post-title")
const postBody = document.querySelector("#post-body")
const blogList = document.querySelector("#blog-list")
const postBtn = document.querySelector('#post-btn')
const newPost = document.querySelector('#new-post')

newPost.addEventListener('submit', (e) => {
    e.preventDefault()

    let title = postTitle.value
    let body = postBody.value

    const data = {
        title: title,
        body: body
    } 
    console.log(data);
})

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data =>  {
        const postArr = data.splice(0,5)

        let html = ""

        for(let post of postArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        blogList.innerHTML = html
    })

