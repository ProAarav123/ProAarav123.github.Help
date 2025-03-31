let items = JSON.parse(localStorage.getItem("shoppingList")) || [];

function renderList() {
    const itemsDiv = document.getElementById("items");
    itemsDiv.innerHTML = "";
    items.forEach((item, index) => {
        itemsDiv.innerHTML += `<div class='item'>
            ${item} <span class='remove' onclick='removeItem(${index})'>❌</span>
        </div>`;
    });
}

function addItem() {
    const input = document.getElementById("itemInput");
    if (input.value.trim() !== "") {
        items.push(input.value.trim());
        localStorage.setItem("shoppingList", JSON.stringify(items));
        input.value = "";
        renderList();
    }
}

function removeItem(index) {
    items.splice(index, 1);
    localStorage.setItem("shoppingList", JSON.stringify(items));
    renderList();
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        showShoppingPage();
    } else {
        alert("Invalid login!");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    showLoginPage();
}

function showShoppingPage() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("shoppingPage").classList.remove("hidden");
    renderList();
}

function showLoginPage() {
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("shoppingPage").classList.add("hidden");
}

window.onload = function() {
    if (localStorage.getItem("loggedIn") === "true") {
        showShoppingPage();
    } else {
        showLoginPage();
    }
};
