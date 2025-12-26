function login() {
 const u = usuario.value;
 const s = senha.value;

 if (u === "admin" && s === "1234") {
  localStorage.setItem("tipoUsuario", "admin");
  location.href = "../TelaAdmin/adicionar.html";
 } else if (u === "user" && s === "1234") {
  localStorage.setItem("tipoUsuario", "usuario");
  location.href = "../TelaPrincipal/Index.html";
 } else {
  erro.innerText = "Login inválido";
 }
}
