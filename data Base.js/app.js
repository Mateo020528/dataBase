//se obtienen los ID`S
let resultado = fetch('https://memin.io/public/api/users')
//console.log(resultado) //n usamos este console.log para saber que nos devuelce la promesa
.then(response=> {
    return response.json()
}).then(data => {
    //creamos lo elementos
    data.forEach(function(element){
       // console.log(element.name)//n Este console.log es para mostrar cada nombre de nuestro usuario en consola.
    })
})
//agregar mas td a tbody
let td = document.createElement('td');
tr.appendChild(td);




