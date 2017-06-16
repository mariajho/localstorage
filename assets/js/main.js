/*desarrollamos una funcion guardarDatos, para recuperar los dato que el usuario ingrese en los input*/

function guardarDatos{
	localStorage.nombre = document.getElementById("nombre").value;
	localStorage.password = document.getElementById("password").value;
}

/*funcion que recupera datos*/

function recuperarDatos(){
	if ((localStorage.nombre != undefined) && (localStorage.password != undefined)){
		document.getElementById("datos").inner.HTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
	}
	else{  
		document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
}
}