window.addEventListener("load", init, false);

function init() {
  let nombre = document.getElementById("nombreTxt");
  let email = document.getElementById("emailTxt");
  let mensaje = document.getElementById("mensajeTxt");
  //   let alerta = document.getElementById("mensajeAlert");
  let btnSendd = document.getElementById("btnSendd");
  let expressionEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  btnSendd.onclick = function () {
    nombre = nombreTxt.value;
    email = emailTxt.value;
    mensaje = mensajeTxt.value;

    if (nombre === "" || email === "" || mensaje === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "¡Por favor complete toda la información!",
        background: "#fff",
        timer: 4000,
      });
    } else if (nombre === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "¡Por favor complete toda la información!",
        background: "#fff",
        timer: 4000,
      });
    } else if (email === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "¡Por favor complete toda la información!",
        background: "#fff",
        timer: 4000,
      });
    } else if (expressionEmail.test(email) === false) {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "Email incorrecto",
        background: "#fff",
        timer: 4000,
      });
    } else if (mensaje === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "No deje campos vacios!",
        background: "#fff",
        timer: 4000,
      });
    } else {
      Swal.fire({
        title: "Respuestas enviadas",
        text: "Thanks for getting in contact",
        html: '<iframe src="https://embed.lottiefiles.com/animation/95029"></iframe>',
        timer: 4000,
      });

      emailjs.sendForm(
        "service_gani1jm",
        "template_ild1as3",
        "#form",
        "pzwtHPQfqbfOd9Q9d"
      );
      cleanInputs();
    }
  };

  function cleanInputs() {
    nombreTxt.value = "";
    apellidoTxt.value = "";
    emailTxt.value = "";
    numberTxt.value = "";
    mensajeTxt.value = "";
  }
}
