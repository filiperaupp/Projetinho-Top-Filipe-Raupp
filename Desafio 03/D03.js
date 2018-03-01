function addString() {
    let listItem = document.getElementById("theFrase").value;
    console.log(`${listItem}`);

    let element_father = document.getElementById("lista");
    let new_li = document.createElement('li');
    let texto = document.createTextNode(listItem);
    new_li.appendChild(texto);
    new_li.className= "list-group-item";
    new_li.onclick = function() {
        new_li.remove();
    }

    element_father.appendChild(new_li);

}



