function addProduct() {
    document.getElementById('productButton').style.display = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('productContainer').style.display = 'block';
    // document.getElementById('recentProducts').style.display = 'block';

}

function submitBlog() {
    let title = document.getElementById('addTitle').value;
    let price = document.getElementById('addPrice').value;
    let content = document.getElementById('addDescription').value;

    if (title === "" || content === "") {
        alert("Please fill in both the title and content.");
        return;
    }

    let products = document.createElement("div");
    products.className = 'products';
    products.innerHTML = `
    <h3>${"$"+price}</h3>
    <h3>${title}</h3>
    <p>${content}</p>
    <button class="editButton" onclick="editBlog(this)">Edit</button>
    <button class="deleteButton" onclick="deleteBlog(this)">Delete</button>`;

    document.getElementById("products").appendChild(products);

    document.getElementById("addTitle").value = "";
    document.getElementById("addPrice").value = "";
    document.getElementById("addDescription").value = "";

    document.getElementById('productContainer').style.display = 'none';
    document.getElementById('recentProducts').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('productButton').style.display = 'block';
};


function editBlog(button) {
    let products = button.parentElement;
    let titleElement = products.querySelector('h3');
    let priceElement = products.querySelector('h3');
    let contentElement = products.querySelector('p');

    document.getElementById('addTitle').value = priceElement.innerText;
    document.getElementById('addPrice').value = titleElement.innerText;
    document.getElementById('addDescription').value = contentElement.innerText;

    products.remove();

    button.innerText = "Save";
    button.setAttribute('onclick', 'saveBlog(this)');

    document.getElementById('productButton').style.display = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('productContainer').style.display = 'block';
    // document.getElementById('recentProducts').style.display = 'block';
}

function saveBlog(button) {
    let newTitle = document.getElementById('addTitle').value.trim();
    let newContent = document.getElementById('addDescription').value.trim();

    if (newTitle === "" || newContent === "") {
        alert("Please fill in both the title and content.");
        return;
    }

    let products = button.parentElement;
    let titleElement = products.querySelector('h3');
    let contentElement = products.querySelector('p');

    titleElement.innerText = newTitle;
    contentElement.innerText = newContent;

    document.getElementById('addTitle').value = "";
    document.getElementById('addDescription').value = "";

    button.innerText = "Edit";
    button.setAttribute('onclick', 'editBlog(this)');

    document.getElementById('productButton').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('productContainer').style.display = 'none';
    
}

function deleteBlog(button) {
    if (confirm("Are you sure you want to delete this blog post?")) {
        let products = button.parentElement;
        products.remove();
    }

    if (!products || products.innerHTML === "") {
        if (recentProducts) {
            recentProducts.style.display = "none";
        }
}
}