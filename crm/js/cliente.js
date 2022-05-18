function agregar_cliente(){
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var id_cliente = document.getElementById("txt_id_cliente").value;
var dv = document.getElementById("txt_dv").value;
var nombres = document.getElementById("txt_nombres").value;
var apellidos = document.getElementById("txt_apellidos").value;
var email = document.getElementById("txt_email").value;
var celular = document.getElementById("txt_celular").value;
var fecha_registro = document.getElementById("txt_fecha_registro").value;

var raw = JSON.stringify({
  "id_cliente": id_cliente,
  "dv": dv,
  "nombres": nombres,
  "apellidos": apellidos,
  "email": email,
  "celular": celular,
  "fecha_registro": fecha_registro
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://frontend170.com/api/cliente", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}