/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
	
	/*var duration=movies.forEach(function(time){
		console.log(typeof(time.duration));
		console.log(parseInt(time.duration));

	});
*/

// Get the average of all rates with 2 decimals 
	var contador=0,times=0,prom=0;
	var average=movies.forEach(function(rate){	
		var cambio= parseFloat(rate.rate);
		contador=contador+cambio;
		times++;
		prom=contador/times;
		return prom;
	});
	console.log("Average all Movies: "+prom.toFixed(2));
	
// Get the average of Drama Movies 8.32
	var drama=movies.filter(function(genero){
		//console.log(genero.genre);
		return genero.genre.indexOf("Drama")>=0;
	});

	var contador=0,times=0,prom=0;
	drama.forEach(function(rate){	
		var cambio= parseFloat(rate.rate);
		contador=contador+cambio;

		times++;
		prom=contador/times;
	});
	console.log("Average movie's DRAMA: "+prom.toFixed(2));

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
	var steven=movies.filter(function(name){
		return name.director==="Steven Spielberg";
	});
	console.log("How many movies are directed by Steven Spilberg: "+steven.length);
// Order by title and print the first 20 titles


// Best yearly rate average
	var rating=0,y=0,r=0;
	var best=movies.forEach(function(peli){
		
		y=peli.year;
		r=peli.rate;

		console.log(y);
		console.log(r);
	});
	