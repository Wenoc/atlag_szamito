let pit = document.getElementById('pit');
atlagszamitas();

function addItem() {
    var a = document.getElementById(document.getElementById('valasztas').value);
    var candidate = document.getElementById("candidate");
    var span = document.createElement("span");
    span.setAttribute('onclick', 'setAttribute(\'hidden\', \'\')');
    span.setAttribute('id', candidate.value);
    span.appendChild(document.createTextNode(candidate.value + ", "));
    a.appendChild(span);
}

function atlagszamitas(){
    let osztalyzatok = [];
    let tantargyak = ['pit', 'web_programozas', 'matematika', 'szociologia', 'valasztott_matematika', 'szamitogepes_rendszerek', 'adatbazisok', 'programozas', 'torna', 'magyar_nyelv', 'szerb_nyelv', 'angol_nyelv', 'magaviselet']

    for(let j = 0; j < tantargyak.length; j++){
        let tantargy = document.getElementById(tantargyak[j]);
        for (let i = 0; i < tantargy.children.length; i++) {
            if(!tantargy.children[i].hasAttribute('hidden')){
                osztalyzatok.push(parseInt(tantargy.children[i].textContent, 10));
            }
        }
        let osszes = 0;
        for(let i = 0; i < osztalyzatok.length; i++){
            osszes += osztalyzatok[i]
        }
        if(osszes > 0){
            document.getElementById(tantargyak[j] + '_atlag').textContent = (osszes/osztalyzatok.length).toFixed(2);
        }
        else{
            document.getElementById(tantargyak[j] + '_atlag').textContent = '/';
        }
        osztalyzatok = [];
    }
}

pit.addEventListener('click', () => {
    atlagszamitas();
})