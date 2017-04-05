function aleatoire(a) {
    var caractères= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var result = '';
    for (i = 0; i < a; i++) {
        result += caractères[Math.floor(Math.random() * caractères.length)];
    }
    alert(result);
}
aleatoire(10);