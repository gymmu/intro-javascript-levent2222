function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "red"
}

function deleteText (){
  const elemtodeletetext = document.querySelector("#to-delete")
  elemtodeletetext.textContent = "Inhalt gelöscht"
  

}
function counter() {
  const numberElement = document.querySelector("#zahl")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num
}