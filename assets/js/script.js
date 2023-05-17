var carrito = [];

function agregarAlCarrito(id_producto) {
  // Función de Javascript querySelector
  // Obtiene un elemento HTML filtrado por una Clase, ID o Tag HTML.
  let elemento = document.querySelector("#producto"+id_producto);
  let imagen = elemento.querySelector('img').getAttribute("src");
  let nombre = elemento.querySelector(".card-title").textContent;
  let precio = elemento.querySelector(".list-group-item").innerHTML;

  let item = {
    "id": id_producto,
    "nombre":nombre,
    "precio":precio,
    "imagen":imagen,
    "cantidad": 1
  }

  // Aqui agreamos el item producto al carro mediante la funcion push

  // Funcion de Javascript FindIndex
  // Obtiene el indice del elemento a encontrar.
  let buscar_producto = carrito.findIndex(item => item.id == id_producto);

  if(buscar_producto > -1){
    carrito[buscar_producto].cantidad++;
    alert("Producto Actualizado");
  }else{
    // Funcion de Javascript Push
    // Función para agregar un elemento a una Array o Lista.  
    carrito.push(item);
    alert("Producto Agregado al Carrito");
  }

  let contador_carrito = document.querySelector(".contador-carrito")
  contador_carrito.innerHTML = carrito.length

  actualizarCarrito();
}

function actualizarCarrito(){
  let modal = document.querySelector(".modal");
  let contenido_modal = modal.querySelector(".modal-body");
  let elemento = "";
  for(let i = 0; i < carrito.length ; i++){
    elemento +=  `<div id="item-producto${carrito[i].id}" class="card-item-carrito">
        <img src="${carrito[i].imagen}" alt="" /> 
        <h6>${carrito[i].nombre}</h6>
        <p>${carrito[i].precio}</p>
        <div class="d-flex flex-column justify-content-center">
          <span>Cantidad</span>
          <b>${carrito[i].cantidad}</b>
        </div>
        <button class="btn btn-danger pt-0 px-2" onclick="eliminarProducto(${carrito[i].id})">
          <i class="bi bi-trash" style="font-size: 20px;"></i>
        </button>
    </div>`
  }
  contenido_modal.innerHTML = elemento
}

function eliminarProducto(id_producto){
  let buscar_producto = carrito.findIndex(item => item.id == id_producto);
  if(buscar_producto > -1){
    carrito.splice(buscar_producto, 1);
  }
  
  document.querySelector(`#item-producto${id_producto}`).remove();
  let modal = document.querySelector(".modal");
  let contenido_modal = modal.querySelector(".modal-body");

  if(contenido_modal.innerHTML == ""){
    contenido_modal.innerHTML = "<div class='w-100 text-center'><strong>Carrito Vacio</strong></div>"
  }
  
  let contador_carrito = document.querySelector(".contador-carrito")
  contador_carrito.innerHTML = carrito.length
}

function obtenerIndicadores(){
  return fetch("https://mindicador.cl/api").then( resp =>{
    return resp.json();
  }).then( data => {
    console.log("Data", data);
    return data
  }).catch( error => console.log("Error", error))
}

window.addEventListener("load", async ()=>{
  let api = await obtenerIndicadores();
  let indicadores = ["dolar","uf","bitcoin","utm"];
  let html = ""
  indicadores.forEach(element => {
    html += `
      <div class="card-indicador d-flex justify-content-center flex-column align-content-center align-items-center me-3">
        <h6 class="mb-0">${api[element].nombre}</h6>
        <span class="mt-0"><b>$${api[element].valor}</b></span>
      </div>
    `
  });

  let ind_economicos = document.querySelector(".indicadores-economicos");
  ind_economicos.innerHTML = html
})