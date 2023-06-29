const h1 = document.querySelector('h1');
//selecciono desde mi archivo en Html el o los apartados con la etiqueta h1
const p = document.querySelector('p');
// selecciono los apartados con la etiqueta p
const parrafito = document.querySelector('.parrafito');
// .parrafito se refiere a la clase parrafito, escoge los apartados asignados a esa clase
const pid = document.querySelector('#pid')
//·pid se refiere al ID: pid, me trae los apartados con ese ID
const input =document.querySelector("input");

console.log(h1);
console.log({
    h1,
    p,
parrafito,
pid,
input,
});

