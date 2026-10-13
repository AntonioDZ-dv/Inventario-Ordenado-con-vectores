let inventario = new Inventario();
let nuevo = new Producto(1, "Lapiz", 100, 10);
inventario.agregar(nuevo);
nuevo = new Producto(2, "Borrador", 200, 20); 
inventario.agregar(nuevo);
nuevo = new Producto(3, "Cuaderno", 300, 30);
inventario.agregar(nuevo);
nuevo = new Producto(4, "Clips", 20, 10); 
inventario.agregarInicio(nuevo);
nuevo = new Producto(5, "Sacapuntas", 500, 50); 
inventario.agregar(nuevo);

console.log(inventario.listar());

inventario.eliminar(3);

console.log(inventario.listar());

let res = inventario.buscar(10);
if (res == null)
    console.log("No existe");
else
    console.log("si existe");

res = inventario.buscar(4);
if (res == null)
    console.log("No existe");
else
    console.log(res.info());

res = inventario.extraerPrimero();
console.log("el primero es");
console.log(res.info());