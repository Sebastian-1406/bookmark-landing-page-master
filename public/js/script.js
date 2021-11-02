let contendorPreguntas = document.getElementById("contenedor__preguntas");
let formularioContacto = document.getElementById("formularioContacto");
let enviarContacto = document.getElementById("enviarContacto");
let contenedorTabs = document.getElementById("contenedorTabs");
let pregunta = document.querySelectorAll(".desplegarPregunta")
const expresion = {correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,};
const contenedorTab = {

     tab1 : {
          img : "./images/illustration-features-tab-1.svg",
          subTitulo : "Bookmark in one click",
          parrafo : "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
     },
     tab2 : {
          img : "./images/illustration-features-tab-2.svg",
          subTitulo : "Share your bookmarks",
          parrafo : "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
     },
     tab3 : {
          img : "./images/illustration-features-tab-3.svg",
          subTitulo : "Intelligent search",
          parrafo : "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
     }


}
let radio = document.querySelectorAll("[type=radio]");
let iconNav = document.getElementById("iconNav");
let contendorEnlaces = document.getElementById("navEnlace");
let body = document.querySelector("body");

iconNav.addEventListener("click", () => {
     let logo = document.getElementById("logo");
     let logoNav = document.getElementById("navLogo");


     logo.classList.toggle("hidden")
     contendorEnlaces.classList.toggle("hidden");
     
     body.classList.toggle("overflow-hidden")

     if(logoNav.classList.contains('hidden')){
          logoNav.classList.remove("hidden");
          iconNav.src = "./images/icon-close.svg";
          contendorEnlaces.style.background = "#252b46e6";
     }else{
          logoNav.classList.add("hidden")
          iconNav.src = "./images/icon-hamburger.svg";
          contendorEnlaces.style.background = "#fff";
     }

})


radio.forEach(input => {
     input.addEventListener("click", () => {
          radio.forEach(element => {
     
               if(element.checked){
                    element.nextElementSibling.classList.remove("hidden")
                    element.nextElementSibling.classList.add("inline-block")
                    
               }else{
                    element.nextElementSibling.classList.add("hidden")
                    element.nextElementSibling.classList.remove("inline-block")
               }
          })
     })
})


pregunta.forEach(element => {
          element.addEventListener("click", () => {
               element.classList.toggle("rotate-180");

               if(element.parentNode.nextElementSibling.classList.contains('hidden')){
                    element.parentNode.nextElementSibling.classList.remove("hidden");
                    element.classList.add("text-red-700");
                    element.classList.remove("text-blue-600");
               }else{
                    element.parentNode.nextElementSibling.classList.add("hidden");
                    element.classList.remove("text-red-700");
                    element.classList.add("text-blue-600");
               }
       })
})

enviarContacto.addEventListener("click", (e) => {
     e.preventDefault();

     let mensaje = document.getElementById("mensajeIncorrecto");
     let email = document.getElementById("email");
     let campoIncorrecto = document.getElementById("campoIncorrecto");

     if(expresion.correo.test(email.value)){
          mensaje.classList.add("hidden");
          campoIncorrecto.classList.remove("bg-red-600")
          campoIncorrecto.classList.remove("h-20")
          enviarFormulario();
     }else{
          mensaje.classList.remove("hidden");
          campoIncorrecto.classList.add("bg-red-600")
          campoIncorrecto.classList.add("h-20")
     }

})

const enviarFormulario = () => {
     formularioContacto.reset()
}

contenedorTabs.addEventListener("click", (e) => {
     if(e.target.id == "tab1") {
          completarInformacion("tab1");
     }else if(e.target.id == "tab2") {
          completarInformacion("tab2");
     }else if(e.target.id == "tab3") {
          completarInformacion("tab3");
     }

})

const completarInformacion = (tab) => {
     let imagen = document.getElementById("tabImagen");
     let titulo = document.getElementById("tabSubtitulo");
     let parrafo = document.getElementById("tabParrafo");

     if(tab == "tab1"){
          imagen.src = contenedorTab.tab1.img
          titulo.innerHTML = contenedorTab.tab1.subTitulo
          parrafo.innerHTML = contenedorTab.tab1.parrafo
     }else if (tab == "tab2") {
          imagen.src = contenedorTab.tab2.img
          titulo.innerHTML = contenedorTab.tab2.subTitulo
          parrafo.innerHTML = contenedorTab.tab2.parrafo
     }else if (tab == "tab3") {
          imagen.src = contenedorTab.tab3.img
          titulo.innerHTML = contenedorTab.tab3.subTitulo
          parrafo.innerHTML = contenedorTab.tab3.parrafo
     }

}