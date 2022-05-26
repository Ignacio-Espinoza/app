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
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://frontend170.com/api/cliente", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function actualizar_cliente(){
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

fetch("http://frontend170.com/api/cliente/198067733", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}

function obtener_clientes(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://frontend170.com/api/cliente", requestOptions)
  .then((response) => response.json())
  .then((json) => json.forEach(completarFila)
  )
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function completarFila (element, index, arr){
  arr[index] = document.querySelector('#tbl_clientes tbody').innerHTML +=
  `<tr>
      <td>${element.id_cliente}-${element.dv}</td>
      <td>${element.nombres}</td>
      <td>${element.apellidos}</td>
      <td>${element.email}</td>
      <td>${element.celular}</td>
      <td>${element.fecha_registro}</td>
      <td> <a href='eliminar_cliente.html?id=${element.id_cliente}'><img src='img/delete_24x24.png'> </a> <img src='img/edit_24x24.png'>
  </tr>`
};
function obtenerIDCliente(){
  //Obtenemos la url de la pagina actual
  var queryString = window.location.search;
  //Buscamos los parametros en la URL actual
  var urlParams = new URLSearchParams(queryString);
  //Extraemos el id del cliente
  var p_id_cliente = urlParams.get('id');

  //Invocamos funcion para consultar
  obtenerDatosCliente(p_id_cliente);
} 
//cosas mias
function obtenerDatosCliente(p_id_cliente){
  //Incorpore aqui las instrucciones para obtener los datos del cliente
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://frontend170.com/api/cliente/"+p_id_cliente, requestOptions)
  .then((response) => response.json())
  .then((json) => json.forEach(completarClienteElimniado)
  )
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  // y mostrarlos en la pagina
  alert("id cliente recibido :") + p_id_cliente;
}
function completarClienteElimniado (element, index, arr){
  arr[index] = document.querySelector('#contenedor_eliminar tbody').innerHTML +=
  `<tr>
      <td>${element.id_cliente}-${element.dv}</td>
      <td>${element.nombres}</td>
      <td>${element.apellidos}</td>
      <td>${element.email}</td>
      <td>${element.celular}</td>
      <td>${element.fecha_registro}</td>
  </tr>`
};