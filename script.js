
// Function for adding user input to localstorage

function Getupdate() {
    titl = document.getElementById("title").value;
    text = document.getElementById("description").value;
    if (localStorage.getItem("itemjson") == null) {
        itemjsonArr = [];
        itemjsonArr.push([titl, text]);
        localStorage.setItem("itemjson", JSON.stringify(itemjsonArr));
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    } else {
        itemjsonArrStr = localStorage.getItem("itemjson");
        itemjsonArr = JSON.parse(itemjsonArrStr);
        itemjsonArr.push([titl, text]);
        localStorage.setItem("itemjson", JSON.stringify(itemjsonArr));
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    }
    update();
}

// If list got delete update it by empty arr

function update() {
    if (localStorage.getItem("itemjson") == null) {
        itemjsonArr = [];
        localStorage.setItem("itemjson", JSON.stringify(itemjsonArr));
    } else {
        itemjsonArrStr = localStorage.getItem("itemjson");
        itemjsonArr = JSON.parse(itemjsonArrStr);
    }

    // Upating the tables
    let addtodo = document.getElementById("tableBody");
    let html = "";
    itemjsonArr.forEach((element, index) => {
        html += `<tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary" onclick="deletetodo(${index})"  >Delete</button></td>
            </tr>`;
    });

    addtodo.innerHTML = html;
    document.body.style.fontSize = '35px';
    // document.body.style.color = 'blue';
    document.body.style.fontFamily = 'fantasy';
}

let add = document.getElementById("add");
add.addEventListener("click", Getupdate);
update();

function deletetodo(index) {
    itemjsonArrStr = localStorage.getItem("itemjson");
    itemjsonArr = JSON.parse(itemjsonArrStr);
    itemjsonArr.splice(index, 1);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonArr));
    update();
}

function clearlist() {
    // let clear = document.getElementById('clearlists');
    if (confirm("are you sure to delete all lists?")) {
        localStorage.clear();
        update();
    }
}



