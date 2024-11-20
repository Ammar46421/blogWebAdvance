function addBlog() {
    document.getElementById('blogButton').style.display = 'none';
    document.getElementById('blogInfo').style.display = 'none';
    document.getElementById('blogContainer').style.display = 'block';
}

function submitBlog() {
    let title = document.getElementById('addTitle').value;
    let content = document.getElementById('addContent').value;

    if (title === "" || content === "") {
        alert("Please fill in both the title and content.");
        return;
    }


    let blogPost = document.createElement("div");
    blogPost.classList.add("blogPost");

    

    blogPost.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <button class="editButton" onclick="editBlog(this)">Edit</button>
    <button class="deleteButton" onclick="deleteBlog(this)">Delete</button>`;

    document.getElementById("blogPost").appendChild(blogPost);

    document.getElementById("addTitle").value = "";
    document.getElementById("addContent").value = "";

    document.getElementById('blogContainer').style.display = 'none';
    document.getElementById('blogInfo').style.display = 'block';
    document.getElementById('blogButton').style.display = 'block';
};


function editBlog(button) {
    let blogPost = button.parentElement;
    let titleElement = blogPost.querySelector('h3');
    let contentElement = blogPost.querySelector('p');

    document.getElementById('addTitle').value = titleElement.innerText;
    document.getElementById('addContent').value = contentElement.innerText;

    blogPost.remove();

    button.innerText = "Save";
    button.setAttribute('onclick', 'saveBlog(this)');

    document.getElementById('blogButton').style.display = 'none';
    document.getElementById('blogInfo').style.display = 'none';
    document.getElementById('blogContainer').style.display = 'block';
}

function saveBlog(button) {
    let newTitle = document.getElementById('addTitle').value.trim();
    let newContent = document.getElementById('addContent').value.trim();

    if (newTitle === "" || newContent === "") {
        alert("Please fill in both the title and content.");
        return;
    }

    let blogPost = button.parentElement;
    let titleElement = blogPost.querySelector('h3');
    let contentElement = blogPost.querySelector('p');

    titleElement.innerText = newTitle;
    contentElement.innerText = newContent;

    document.getElementById('addTitle').value = "";
    document.getElementById('addContent').value = "";

    button.innerText = "Edit";
    button.setAttribute('onclick', 'editBlog(this)');

    document.getElementById('blogButton').style.display = 'block';
    document.getElementById('blogInfo').style.display = 'block';
    document.getElementById('blogContainer').style.display = 'none';
}

function deleteBlog(button) {
    let blogPost = button.parentElement;
    blogPost.remove();
}
