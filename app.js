let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
const submit = document.querySelector("#submit");
const modal = document.getElementById("modal");  // llamamos el id del modal
const modal_body = document.getElementById("modal-body"); // llamamos la clase del modal
const btnUsuario = document.getElementById("user");//llamamos el id del boton usuario
const loading = document.querySelector(".spinner-border");
const search = document.getElementById("search");

submit.addEventListener("click", () => {
    let informacion = sessionStorage.getItem('id')

    datos = {
        name: inputName.value,
        email: inputEmail.value
    }
    
    let sendFetch = fetch(`https://memin.io/public/api/users/${informacion}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(alert(`El id ${sessionStorage.getItem("id")} se ha actualizado correctamente`));

    if (informacion){
      
    let sendFetch = fetch(`https://memin.io/public/api/users/${informacion}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
  })
    } else {
      
    let sendFetch = fetch(`https://memin.io/public/api/users/${informacion}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
  })
  .then(alert(`${inputName.value}se ha creado correctamente`));
    }

});

//se obtienen los ID`S
let resultado = fetch("https://memin.io/public/api/users")
  //console.log(resultado) //n usamos este console.log para saber que nos devuelce la promesa
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //creamos lo elementos
    data.forEach(function (element) {
       //console.log(element.name)//n Este console.log es para mostrar cada nombre de nuestro usuario en consola.
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

//creamos nuevos td para agregar los links (a)
    let acciones = document.createElement('td');

//agregamos el link (Editar)

    let editar = document.createElement('a');
    editar.setAttribute('href','#');
    editar.classList.add("editar")
    editar.textContent ='Editar'
    acciones.appendChild(editar);
    tr.appendChild(acciones);

    editar.addEventListener("click", () =>{
        const info = (editar.parentElement).parentElement;
        const id = info.children[0];
        sessionStorage.setItem("id", id.innerText);

        const name = info.children[1];
        const email = info.children[2];
        
        inputName.value =name.innerText;
        inputEmail.value = email.innerText;
    })
  

//Agregamos el link (Detalles)

    let detalles = document.createElement('a');
    detalles.setAttribute('href','#');
    detalles.setAttribute ("data-bs-toggle","modal") //boton modal
    detalles.setAttribute ("data-bs-target","#detalles-usuario") //boton modal detalles
    detalles.classList.add("detalles")
    detalles.textContent='Detalles'
    acciones.appendChild(detalles);
    tr.appendChild(acciones)
    //agregamos el resto de los datos 

    detalles.addEventListener("click", function  (){
  
      modal_body.innerHTML = `<h5>ID:${element.id}</h5>
      <p>Nombre de usuario: ${element.name}</p>
      <p>Correo Electronico: ${element.email}</p>
      <p>Email Verficado:${element.email_verified_at}</p>
      <p>Password: ${element.password}</p>`;
      //agregar el resto de configuraciones
      
      
    })
                  
    
    //Agregamos el link (Eliminar)

    let eliminar = document.createElement('a');
    eliminar.setAttribute('href','#');
    eliminar.classList.add("eliminar")
    eliminar.textContent='Eliminar';
    acciones.appendChild(eliminar);
    tr.appendChild(acciones);

      //agrgamos el nuevo listener para eliminar
      eliminar.addEventListener("click",()=>{
          const info = (eliminar.parentElement).parentElement;
          const id = info.children[0];
        let deleteFetch = fetch(`https://memin.io/public/api/users/${id.innerText}`,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
        })
        .then(alert("Se ha eliminado correctamente"));
      })

    tbody = document.getElementById("tbody");
    tbody.appendChild(tr);

    // detalles.setAttribute ("data-bs-toggle","modal") //boton modal crear usuario 
    // detalles.setAttribute ("data-bs-target","#exampleModal") //boton modal crear usuario 
    //Aqui voy a hacer la logica de mi login
    

  }); 
  loading.parentNode.removeChild(loading);
});

search.addEventListener("keyup",() => {
    for (tr of tbody.childNodes){
        const name = tr.children[1].textContent.toLowerCase()
        if (name.includes(search.value)){
            tr.style="display: table-row;"
        }else{
            tr.style="display: none;"
        }
    }
})








// window.addEventListener("keypress", (e) => {
//   console.log(e);
//   console.log(e.ctrlKey);
  
//   if(e.ctrlKey && e.key === "a") {
//       location.reload(true)
//       copnsole
      
//   }
//   if(e.key === "r") {
//       location.reload()

//   }else if(e.key === ("y")){
//       location.href = "https://youtube.com"

//   } else if (e.key === ("f")){
//       location.href = "https://facebook.com"
//   }
// })
// /////////////////////////recargar pagina con 2 teclas //////////////////////////////
// window.addEventListener("keydown", (e) => { 

  
//   if(e.ctrlKey){
//       if(e.key.toLocaleLowerCase() == 'c'){
//           alert("recargar?")
//           window.location.href = 'index.html';
//       }
//   }
// })
