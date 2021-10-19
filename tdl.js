var arr = [];
// main function for field
function subFunction() {
  var field = document.getElementById("main-input");

  // getting values
  if (field.value == "") {
    M.toast({ html: "Please type something !" });
    return;
  } else {
    arr.push(field.value);
    field.value = "";
    field.innerHTML = "";
  }

  // putting values in list
  document.getElementById("list").innerHTML =
    "<li>" + arr.join("</li><li>") + "</li>";

  // code for each value
  for (var i = 0; i < arr.length; i++) {
    // asigning id to list items
    document.getElementById("list").childNodes[i].id = "item" + i;

    // edit element
    var edit = document.createElement("span");
    edit.id = "edit";
    edit.className = "material-icons editicon";
    edit.textContent = "edit";
    edit.style.fontSize = "26px";
    edit.onclick = function editFu() {
      var thh = this;
      var editbox = document.getElementById("editbox");
      var editfield = document.getElementById("editfield");
      var changebut = document.getElementById("changebut");
      editbox.style.display = "block";
      editfield.value = this.parentElement.childNodes[0].textContent;
      changebut.onclick = function () {
        thh.parentElement.childNodes[0].textContent = editfield.value;
        editbox.style.display = "none";
        M.toast({ html: "The plan was changed !" });
      };
    };

    // trash element
    var node = document.createElement("button");
    node.className = "delebut";
    var trash = document.createElement("span");
    trash.className = "material-icons";
    trash.textContent = "delete";
    trash.style.fontSize = "27px";
    node.appendChild(trash);
    node.addEventListener("click", deleteFu);
    function deleteFu() {
      var ths = this;
      var deleAlert = document.getElementById("deleAlert");
      var yes = document.getElementById("yes");
      var no = document.getElementById("no");
      var comalert = document.getElementById("comalert");
      deleAlert.style.display = "inline-block";
      // no button
      no.onclick = function () {
        deleAlert.style.display = "none";
      };
      // yes button
      yes.onclick = function () {
        ths.parentElement.remove();
        var current = parseInt(node.parentElement.id);
        arr.splice(current, 1);
        deleAlert.style.display = "none";
        M.toast({ html: "the plan was removed !" });
      };
    }
    // appending tools to each list item
    document.getElementById("item" + i).appendChild(node);
    document.getElementById("item" + i).appendChild(edit);
  }
}
