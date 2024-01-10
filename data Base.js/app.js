//se obtienen los ID`S
let resultado = fetch("https://memin.io/public/api/users")
  //console.log(resultado) //n usamos este console.log para saber que nos devuelce la promesa
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //creamos lo elementos
    data.forEach(function (element) {
      // console.log(element.name)//n Este console.log es para mostrar cada nombre de nuestro usuario en consola.
      //crear un tr y agregarlo al los td
    let tr = document.createElement("tr");
    let td = document.createElement("td");  
    td.innerHTML= element.id;
    tr.appendChild(td);

    let name = document.createElement('td');
    name.innerHTML= element.name;
    tr.appendChild(name);
    
    let email = document.createElement('td');
    email.innerHTML= element.email;
    tr.appendChild(email);


    let acciones = document.createElement('td');

    let editar = document.createElement('a');
    editar.setAttribute('href','#');
    editar.textContent ='Editar'
    acciones.appendChild(editar);
    tr.appendChild(acciones);

    // let detalles = document-createElement('a');
    // detalles.setAttribute('href','#');
    // detalles.textContent='Detalles'
    // acciones.appendChild(detalles);
    // tr.appendChild(acciones);
    


    tbody = document.getElementById("tbody");
    tbody.appendChild(tr);
    }); 
});

