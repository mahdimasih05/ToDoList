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

  // show plans in list
  document.getElementById("list").innerHTML =
    "<li>" + arr.join("</li><li>") + "</li>";

  for (var i = 0; i < arr.length; i++) {
    document.getElementById("list").childNodes[i].id = "item" + i;
    var node = document.createElement("button");
    node.className = "delebut";
    var span = document.createElement("span");
    span.className = "fa fa-trash-o";
    span.style.fontSize = "23px";
    node.appendChild(span);
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
  }
}
