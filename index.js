const postTitle = document.querySelector("#post-title")
const postBody = document.querySelector("#post-body")
const blogList = document.querySelector("#blog-list")
const postBtn = document.querySelector('#post-btn')
const newPost = document.querySelector('#new-post')
let postArr = []

const renderPost = (e) => {
    let html = ""
    for(let post of postArr) {
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
    `
    }
    blogList.innerHTML = html
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data =>  {
        postArr = data.splice(0,5)
        renderPost()
    })

    newPost.addEventListener('submit', (e) => {
        e.preventDefault()
        let titleVal = postTitle.value
        let bodyVal = postBody.value
        const data = {
            title: titleVal,
            body: bodyVal
        } 
        fetch('https://apis.scrimba.com/jsonplaceholder/posts', { 
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
         })
            .then(res => res.json())
            .then(post => {
                postArr.unshift(post)
                renderPost()
        })
    })

