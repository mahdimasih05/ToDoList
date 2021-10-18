var arr = [];
function subFunction() {
  var field = document.getElementById("main-input");

  if (field.value == "") {
    M.toast({ html: "Please type something !" });
    return;
  } else {
    arr.push(field.value);
    field.value = "";
    field.innerHTML = "";
  }

  /*var arr2 = arr.map(arrFunction);
  function arrFunction(currentValue, index, arr) {
    // putting values in list
    document.getElementById("list").innerHTML += "<li>" + arr.splice(-1);
    // setting id for li
    document.getElementById("list").childNodes[index].id = "item" + index;
    // creating delete button
    var node = document.createElement("button");
    node.className = "delebut";
    var span = document.createElement("span");
    span.className = "fa fa-trash-o";
    span.style.fontSize = "23px";
    node.appendChild(span);
    // adding delete button to li
    document.getElementById("item" + index).appendChild(node);

    node.addEventListener("click", deleteFu);
    function deleteFu() {
      var ths = this;
      var deleAlert = document.getElementById("deleAlert");
      var yes = document.getElementById("yes");
      var no = document.getElementById("no");
      var comalert = document.getElementById("comalert");
      deleAlert.style.display = "inline-block";
      no.onclick = function () {
        deleAlert.style.display = "none";
      };
      yes.onclick = function () {
        ths.parentElement.remove();
        var curr = parseInt(node.parentElement.id);
        arr.splice(curr, 1);
        deleAlert.style.display = "none";
        M.toast({ html: "the plan was removed !" });
      };
    }
  }
}*/

  document.getElementById("list").innerHTML =
    "<li>" + arr.join("</li><li>") + "</li>";

  for (var i = 0; i < arr.length; i++) {
    document.getElementById("list").childNodes[i].id = "item" + i;
    var node = document.createElement("button");
    node.className = "delebut";
    var trash = document.createElement("span");
    trash.className = "material-icons";
    trash.textContent = "delete";
    trash.style.fontSize = "27px";
    node.appendChild(trash);
    var edit = document.createElement("span");
    edit.id = "edit";
    edit.className = "material-icons editicon";
    edit.textContent = "edit";
    edit.style.fontSize = "26px";
    edit.addEventListener("click", editFu);
    function editFu() {
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
    }
    node.addEventListener("click", deleteFu);
    function deleteFu() {
      var ths = this;
      var deleAlert = document.getElementById("deleAlert");
      var yes = document.getElementById("yes");
      var no = document.getElementById("no");
      var comalert = document.getElementById("comalert");
      deleAlert.style.display = "inline-block";
      no.onclick = function () {
        deleAlert.style.display = "none";
      };
      yes.onclick = function () {
        ths.parentElement.remove();
        var current = parseInt(node.parentElement.id);
        arr.splice(current, 1);
        deleAlert.style.display = "none";
        M.toast({ html: "the plan was removed !" });
      };
    }
    document.getElementById("item" + i).appendChild(node);
    document.getElementById("item" + i).appendChild(edit);
  }
}
