// const langEl = document.querySelector('.langWrap');
// const link = document.querySelectorAll('a');
// const uno = document.querySelector(".uno");
// const dos = document.querySelector(".dos");
// const tres = document.querySelector(".tres");
// const cuatro = document.querySelector(".cuatro");
// const cinco = document.querySelector(".cinco");
// const seis = document.querySelector(".seis");
// // const siete = document.querySelector(".siete")
// const ocho = document.querySelector(".ocho");
// const nueve = document.querySelector(".nueve");
// const diez = document.querySelector(".spanAbout.diez");
// const once = document.querySelector(".once");
// const doce = document.querySelector(".doce");
// const trece = document.querySelector(".trece");
// const catorce = document.querySelector(".catorce");
// const quince = document.querySelector(".quince");
// const diezseis = document.querySelector(".diezseis");
// const diezsiete = document.querySelector(".diezsiete");
// const diezocho = document.querySelector(".diezocho");
// const dieznueve = document.querySelector(".dieznueve");
// const veinte = document.querySelector(".veinte");
// const veintiuno = document.querySelector(".veintiuno");
// const veintidos = document.querySelector(".veintidos");
// const veintitres = document.querySelector(".veintitres");
// const veinticuatro = document.querySelector(".veinticuatro");
// const veinticinco = document.querySelector(".veinticinco");
// const veintiseis = document.querySelector(".veintiseis");
// const veintiseiss = document.querySelector(".veintiseiss");
// const veintisiete = document.querySelector(".veintisiete");
// const veintiocho = document.querySelector(".veintiocho");
// const treinta = document.querySelector(".treinta");



// link.forEach(r => {
//     r.addEventListener('click', () => {
//         const attr = r.getAttribute('language');
//         uno.textContent = changeLanguage[attr].uno;
//         dos.textContent = changeLanguage[attr].dos;
//         tres.textContent = changeLanguage[attr].tres;
//         cuatro.textContent = changeLanguage[attr].cuatro;
//         cinco.textContent = changeLanguage[attr].cinco;
//         seis.textContent = changeLanguage[attr].seis;
//         // siete.textContent = changeLanguage[attr].siete;
//         ocho.textContent = changeLanguage[attr].ocho;
//         nueve.textContent = changeLanguage[attr].nueve;
//         diez.textContent = changeLanguage[attr].diez;
//         once.textContent = changeLanguage[attr].once;
//         doce.textContent = changeLanguage[attr].doce;
//         trece.textContent = changeLanguage[attr].trece;
//         catorce.textContent = changeLanguage[attr].catorce;
//         quince.textContent = changeLanguage[attr].quince;
//         diezseis.textContent = changeLanguage[attr].diezseis;
//         diezsiete.textContent = changeLanguage[attr].diezsiete;
//         diezocho.textContent = changeLanguage[attr].diezocho;
//         dieznueve.textContent = changeLanguage[attr].dieznueve;
//         veinte.textContent = changeLanguage[attr].veinte;
//         veintiuno.textContent = changeLanguage[attr].veintiuno;
//         veintidos.textContent = changeLanguage[attr].veintidos;
//         veintitres.textContent = changeLanguage[attr].veintitres;
//         veinticuatro.textContent = changeLanguage[attr].veinticuatro;
//         veinticinco.textContent = changeLanguage[attr].veinticinco;
//         veintiseis.textContent = changeLanguage[attr].veintiseis;
//         veintisiete.textContent = changeLanguage[attr].veintisiete;
//         veintiocho.textContent = changeLanguage[attr].veintiocho;
//         treinta.textContent = changeLanguage[attr].treinta;
//     });
// });

// let changeLanguage = {

//     "spanish":
//     {
        
//         "uno": "Inicio",
//         "dos": "Sobre mi",
//         "tres": "Habilidades",
//         "cuatro": "Portafolio",
//         "cinco": "Contacto",
//         "seis": "Hola_",
//         // "siete": "",
//         "ocho": "Bienvenido a mi portafolio, dos años de experiencia como desarrollador web",
//         "nueve": "Sobre Mi",
//         "diez": "",
//         "once": "Hola, mi nombre es Esteban. Soy un desarrollador web - front end de Costa Rica. He estado estudiando diseño web durante los últimos dos años en la Universidad CENFOTEC. Tengo algunos proyectos personales en los que he trabajado por mi cuenta y que compartiré a continuación, Aún estoy estudiando, pero me encantaría mejorar y aprender más ¡Me encantaría tener la oportunidad de trabajar contigo!",
//         "doce": "",
//         "trece": "",
//         "catorce": "",
//         "quince": "",
//         "diezseis": "",
//         "diezsiete": "",
//         "diezocho": "",
//         "dieznueve": "",
//         "veinte": "",
//         "veintiuno": "",
//         "veintidos": "",
//         "veintitres": "",
//         "veinticuatro": "",
//         "veinticinco": "",
//         "veintiseis": "",
//         "veintiseiss": "",
//         "veintisiete": "",
//         "veintiocho": "",
//         "treinta": "",

//     },

//     //objeto de json que asigna los valores a cada clase en ingles  
//     "english":
//     {
//         "uno": "",
//         "dos": "",
//         "tres": "",
//         "tress": "",
//         "cuatro": "",
//         "cinco": "",
//         "seis": "",
//         "siete": "",
//         "ocho": "",
//         "nueve": "",
//         "diez": "",
//         "once": "",
//         "doce": "",
//         "trece": "",
//         "catorce": "",
//         "quince": "",
//         "diezseis": "",
//         "diezsiete": "",
//         "diezocho": "",
//         "dieznueve": "",
//         "veinte": "",
//         "veintiuno": "",
//         "veintidos": "",
//         "veintitres": "",
//         "veinticuatro": "",
//         "veinticinco": "",
//         "veintiseis": "",
//         "veintiseiss": "",
//         "veintisiete": "",
//         "veintiocho": "",
//         "treinta": "",
//     }
// }


var check = document.querySelector(".check");
check.addEventListener('click',idioma);


function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="indexes.html";
    }else{
        location.href="index.html";
    }
}