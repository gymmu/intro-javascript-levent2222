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
function incrementCounter() {
  const numberelement = document.querySelector("#counter")
  let num = parseInt(numberelement.textContent)
  num = num + 1
  numberelement.textContent = num
}
function decrementCounter() {
  const numberelement = document.querySelector("#counter")
  let num = parseInt(numberelement.textContent)
  num = num -1
  numberelement.textContent = num
}