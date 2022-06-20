let pit = document.getElementById('pit');
atlagszamitas();

function addItem() {
    var a = document.getElementById("pit");
    var candidate = document.getElementById("candidate");
    var span = document.createElement("span");
    span.setAttribute('onclick', 'setAttribute(\'hidden\', \'\')');
    span.setAttribute('id', candidate.value);
    span.appendChild(document.createTextNode(candidate.value + ", "));
    a.appendChild(span);
}

function atlagszamitas(){
    let osztalyzatok = [];
    for (let i = 0; i < pit.children.length; i++) {
        if(!pit.children[i].hasAttribute('hidden')){
            console.log(pit.children[i].textContent);
            osztalyzatok.push(parseInt(pit.children[i].textContent, 10));
        }
    }
    let osszes = 0;
    for(let i = 0; i < osztalyzatok.length; i++){
        osszes += osztalyzatok[i]
    }
    document.getElementById('pit_atlag').textContent = (osszes/osztalyzatok.length).toFixed(2);
}

pit.addEventListener('click', () => {
    atlagszamitas();
})