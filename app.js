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
    		ligne.push(aleatoire(10));
		}
		tableau.push(ligne);
		ligne = [];

		}
	return tableau;

	}

	var caractères = tableauchainesaléatoires(10, 10);
	console.log(caractères);


	for (i = 0; i < caractères.length; i++) {
		$("#table").append('<tr></tr>');

	for (j = 0; j < caractères[i].length; j++){
		$("#table").append('<td>'+caractères[i][j]+'</td>');
	}

}
















