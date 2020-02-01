document.getElementById('formLogin').addEventListener('submit', checar);

function checar(event){
  event.preventDefault();
  var user = document.getElementById("user");
  var senha = document.getElementById("senha");

  if (user.value == 'admin' && senha.value == '123456') 
  window.location.href = ('../admin/admin.html');
  else if (user.value == 'user' && senha.value == 'user') 
    window.location.href = ('../deliciasvovo/index.html');
  else {
    document.getElementById("val").innerHTML = "Usuário e/ou senha inválidos";
    user.value = "";
    senha.value = "";
    user.focus();
  }
}