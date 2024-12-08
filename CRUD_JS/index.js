let data = [
    { id: 1, name: "Mohan", email: "mtm.kcs@gmail.com" },
    { id: 2, name: "Rmohan", email: "Rockabye@gmail.com" }
]

function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    let tableData = document.getElementById("d_table");

    var object = localStorage.getItem("object");
    var objData = JSON.parse(object);
    console.log(objData);
    var elements = "";

    objData.map((e) => {
        elements += `<tr>
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>
            <button onclick="edit(${e.id})">Edit</button>
            <button onclick="del(${e.id})">Delete</button>
            </td>
        </tr>`
    });

    tableData.innerHTML = elements;
    console.log(tableData);
};

function del(id){
    // data.splice(id,1);
    data = data.filter(del => del.id !== id);
    readAll();
}

function Create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_name").style.display = "none";
}

function add() {
    var name = document.querySelector(".input").value;
    var email = document.querySelector(".email").value;

    var newObj = { id: 3, name: name, email: email };
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_name").style.display = "block";

    readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector(".uinput").value = obj.name;
    document.querySelector(".uemail").value = obj.email;
    document.querySelector(".id").value = obj.id;
}


function update() {
    var id = parseInt(document.querySelector(".id").value);
    var name = document.querySelector(".uinput").value;
    var email = document.querySelector(".uemail").value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = { id, name, email };

    document.querySelector(".update_form").style.display = "none";
    readAll();
}