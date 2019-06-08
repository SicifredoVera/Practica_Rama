
//$(document).ready(function() {


//$('#buscar').click(function(){

//debugger




	/*	$.ajax({
			url: 'https://api.deezer.com/search?q=maluma',
			type: 'GET',
			dataType: 'application/json',
			contentType:false,
		})
		.done(function(response) {
			debugger
			console.log("success");
		})
		.fail(function(response) {
			debugger
			console.log("error");
		})




})

	
});

*/
function buscar(){
	
	var buscar=$('#inputBusqueda').val();
	$.get(`https://api.deezer.com/search?q=${buscar}`,function(resultado){
		debugger
		
		// datos=resultado; // descomentar si no funciona

			debugger
			
		//$('#table_mostrar').html(""); // limpiamos el body de la tabla
		$.each(resultado.data,function(i, musica){ // recorremos el resultado de la api
debugger
			// construimos la fila de la tabla con codigo html y llenamos los datos con los de la api
			// cada una de las musicas se almacenan en la variable musica del bucle
			mostrar=`
				<tr>
			  		<td>${musica.artist.name}</td>
			  		<td>${musica.title}</td>
			  		<td><img src="${musica.artist.picture_small}" width="40"></td>
			  		<td>
			  			<audio controls>
			  				<source src="${musica.preview}" type="audio/mp3">
			  			</audio>
			  		</td>
			  	</tr>
			`;

			// una vez llenemos la fila con los dato de la musica la agregamos a la tabla
			$('#table_mostrar').append(mostrar); // agregamos la fila al final de la tabla
		});
	});


	
}


	

	
