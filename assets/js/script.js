var carrito = [];
const miLocalStorage = window.localStorage;


// agregar
function agregarAlCarrito(nombre, precio, imagen) {
  var item = { nombre: nombre, precio: precio, imagen: imagen };
  carrito.push(item);
  actualizarCarrito();
}

// act carrito
function actualizarCarrito() {
  var cartItemsDiv = document.getElementById("cart-items");
  var totalSpan = document.getElementById("total");
  
  // clean
  cartItemsDiv.innerHTML = "";
  
  // total y mostra
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    var item = carrito[i];
    total += item.precio;
    
    var itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    
    var img = document.createElement("img");
    img.src = item.imagen;
    itemDiv.appendChild(img);
    
    var nombreSpan = document.createElement("span");
    nombreSpan.textContent = item.nombre;
    itemDiv.appendChild(nombreSpan);
    
    cartItemsDiv.appendChild(itemDiv);
  }
  
  totalSpan.textContent = total.toFixed(2);
}

// vaciar
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}


function cuentaCarrito(){
  return(carrito.length)
}

//agregarAlCarrito("VITAMINO COLOR L'ORÉALnono", 25000, "assets/img/producto1.jpg");


