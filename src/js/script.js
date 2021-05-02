form.addEventListener("submit", (e) => {
  e.preventDefault();
  validaFormulario();
});

function validaFormulario() {
  let formulario = document.getElementById("form");
  let nome = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let erroNome = document.getElementById("erroNome");
  let erroEmail = document.getElementById("erroEmail");

  let padrao = /\S+@\S+\.\S+/;
  let nomeValido = nome || nome.length >= 2;
  let emailValido = email.match(padrao);

  if (nomeValido) {
    erroNome.classList.remove("validaErro");
  } else {
    erroNome.classList.add("validaErro");
  }

  if (emailValido) {
    erroEmail.classList.remove("validaErro");
  } else {
    erroEmail.classList.add("validaErro");
  }

  // modal
  if (nomeValido && emailValido) {
    let modal = document.getElementById("myModal");
    let span = document.getElementById("fechaModal");

    let fecharModal = function () {
      modal.style.display = "none";
    };

    span.onclick = fecharModal;

    window.onclick = function (event) {
      if (event.target == modal) {
        fecharModal();
      }
    };

    modal.style.display = "block";
    document.getElementById("modalMensagem").innerHTML =
      "Olá " +
      nome +
      " recebemos seus dados! As novidades serão enviadas para seu email: " +
      email +
      " .";
    formulario.reset();
  }
}
// menu hamburguer
let hamburguer = document.getElementById("hamburguer");
let navUl = document.getElementById("navUl");
let sideNav = document.getElementById("mySidenav");

hamburguer.addEventListener('click', () =>{
  // navUl.classList.toggle("show");
  sideNav.style.width = "250px";
}) 
function closeNav() {
  sideNav.style.width = "0";
}

