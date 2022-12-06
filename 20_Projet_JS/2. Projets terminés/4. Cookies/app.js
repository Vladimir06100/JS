const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
  input.addEventListener("invalid", handleValidation)
  input.addEventListener("input", handleValidation)
})

function handleValidation(e){
  if(e.type === "invalid") {
    e.target.setCustomValidity("Ce champ ne peut être vide.")
  }
  else if (e.type === "input"){
    e.target.setCustomValidity("")
  }
}

const cookieForm = document.querySelector("form")
cookieForm.addEventListener("submit", handleForm)

function handleForm(e){
  e.preventDefault()

  const newCookie = {};

  inputs.forEach(input => {
    const nameAttribute = input.getAttribute("name")
    newCookie[nameAttribute] = input.value;
  })
  newCookie.expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  cookieForm.reset()

  createCookie(newCookie)
}

function createCookie(newCookie){

  if(doesCookieExist(newCookie.name)) {
    createToast({name: newCookie.name, state: "modifié", color: "orangered"})
  } 
  else {
    createToast({name: newCookie.name, state: "créé", color: "green"})
  }

  document.cookie = `${encodeURIComponent(newCookie.name)}=${encodeURIComponent(newCookie.value)};expires=${newCookie.expires.toUTCString()}`

  if(cookiesList.children.length) {
    displayCookies()
  }
}

function doesCookieExist(name) {

  const cookies = document.cookie.replace(/\s/g, "").split(";");
  const onlyCookiesName = cookies.map(cookie => cookie.split("=")[0])

  const cookiePresence = onlyCookiesName.find(cookie => cookie === encodeURIComponent(name))

  return cookiePresence;
}

const toastsContainer = document.querySelector(".toasts-container")

function createToast({name, state, color}){
  const toastInfo = document.createElement("p");
  toastInfo.className = "toast";

  toastInfo.textContent = `Cookie ${name} ${state}.`;
  toastInfo.style.backgroundColor = color;
  toastsContainer.appendChild(toastInfo)

  setTimeout(() =>{
    toastInfo.remove()
  }, 2500)
}

const cookiesList = document.querySelector(".cookies-list")
const displayCookieBtn = document.querySelector(".display-cookie-btn")
const infoTxt = document.querySelector(".info-txt")

displayCookieBtn.addEventListener("click", displayCookies)

let lock = false;
function displayCookies(){
 
  if(cookiesList.children.length) cookiesList.textContent = "";

  const cookies = document.cookie.replace(/\s/g, "").split(";").reverse()
  console.log(cookies);

  if(!cookies[0]) {
    if(lock) return;

    lock = true;
    infoTxt.textContent = "Pas de cookies à afficher, créez-en un!"

    setTimeout(() =>{
      infoTxt.textContent = "";
      lock = false;
    }, 1500)
    return;
  }

  createElements(cookies)
}


function createElements(cookies) {

  cookies.forEach(cookie => {
    const formatCookie = cookie.split("=");
    const listItem = document.createElement("li");
    const name = decodeURIComponent(formatCookie[0])
    listItem.innerHTML =  `
      <p>
        <span>Nom</span> : ${name}
      </p>
      <p>
        <span>Valeur</span>: ${decodeURIComponent(formatCookie[1])}
      </p>
      <button>X</button>
    `;
    listItem.querySelector("button").addEventListener("click", e => {
      createToast({name:name, state: "supprimé", color: "crimson"})
      document.cookie = `${formatCookie[0]}=; expires=${new Date(0)}`
      e.target.parentElement.remove()
    })
    cookiesList.appendChild(listItem);
  
  })

}