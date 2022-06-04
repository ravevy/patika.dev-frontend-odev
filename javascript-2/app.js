const form = document.querySelector("#form")
const liste = document.querySelector("#liste")
const asari = `<input type="checkbox" class="form-check-input me-2"><li class="me-auto"></li><span class="mx-2 fst-italic text-muted"></span><i class="xo fa-solid fa-xmark my-auto"></i>`
const ksari = `<input type="checkbox" class="form-check-input me-2"><li class="me-auto"></li><span class="mx-2 fst-italic text-muted"></span><i class="xo fa-solid fa-xmark my-auto"></i>`


form.addEventListener("submit", addElem)
function addElem(event){
  event.preventDefault()
  //girdi variableı
  var task = document.querySelector("#task").value
  //boşluk veya değersizse alert
  if(!/\S/.test(task) || task == null){
    alert("Bir değer girmediniz.")
  }
  //inputta içerik varsa bir önceki task itemın stiline bakarak stil belirlenir ve içerik yaratılır
  else{
    var newElem = document.createElement("div")
    if(liste.lastElementChild == null || liste.lastElementChild.classList.contains("list-item-t")){
      newElem.innerHTML = asari
      newElem.classList = "list-item-o d-flex p-3 bg-warning bg-opacity-10 rounded-3"
    }
    else{
      newElem.innerHTML = ksari
      newElem.classList = "list-item-t d-flex p-3 bg-warning bg-opacity-25 rounded-3"
    }
    //içeriğe html ekleme ve içeriği listeye ekleme
    newElem.getElementsByTagName("li")[0].innerHTML = task
    liste.appendChild(newElem)
    //placeholder clearance
    document.querySelector("#task").value = ""
  }
}

document.addEventListener("click", modElem)
function modElem(event){
  //deleting items
  if(event.srcElement.classList.contains("fa-solid")){
    liste.removeChild(event.srcElement.parentElement)
  }
  //modify checked and unchecked element and add date when checked
  var t = new Date
  var time = "(" + t.getHours() + ":" + t.getMinutes() + ")"
    if(event.srcElement.type == "checkbox"){
      if(event.srcElement.checked == true){
        event.srcElement.nextSibling.classList.add("checked")
        event.srcElement.nextSibling.nextSibling.innerHTML = time
      }
      else if(event.srcElement.checked == false){
        event.srcElement.nextSibling.classList.remove("checked")
        event.srcElement.nextSibling.nextSibling.innerHTML = ""
      }
    }
}



