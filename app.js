function aleatoire(a) {
    var caractères= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var result = '';
    for (i = 0; i < a; i++) {
        result += caractères[Math.floor(Math.random() * caractères.length)];
    }
    	return result;
	}

	aleatoire(10);


    function tableauchainesaléatoires (lignes, colonnes){
	var tableau = [];
	var ligne = [];

	for( var j=0 ; j<lignes ; j++ ){
		for( var a=0 ; a<colonnes ; a++ ){ 	
    		ligne.push(aleatoire(5));
	}
		tableau.push(ligne);
		ligne = [];

	}
	return tableau;

}

	var caractères= tableauchainesaléatoires(10, 5);
	console.log(caractères);














