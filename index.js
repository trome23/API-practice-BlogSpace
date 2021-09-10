const titleInput = document.querySelector("#title-input")
const bodyInput = document.querySelector("#body-input")
const blogList = document.querySelector("#blog-list")

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

