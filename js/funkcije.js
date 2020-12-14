function validacija(forma) {
    var ime = document.getElementById('ime').value;
    var prezime = document.getElementById('prezime').value;
    if (forma.punoletan.checked == false || ime == "" || prezime == "") {
        alert('Neispravan unos!');
        return false;
    }
    return true;
}