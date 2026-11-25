(async function() {

    const response = await fetch("js/mjm.json");
    const palabras = await response.json();

    function elegir(lista) {
        return lista[Math.floor(Math.random() * lista.length)];
    }

    const primera = elegir(palabras.m);
    const segunda = elegir(palabras.j);

    const restantes = palabras.m.filter(p => p !== primera);
    const tercera = elegir(restantes);

    document.querySelector("#letra-m-1").textContent = primera;
    document.querySelector("#letra-j").textContent = segunda;
    document.querySelector("#letra-m-2").textContent = tercera;

})();
