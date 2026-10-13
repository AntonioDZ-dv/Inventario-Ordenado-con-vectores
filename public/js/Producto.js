class Producto {
    constructor(codigo, nombreProducto, cantidad, costo) {
        this.codigo = codigo;
        this.nombreProducto = nombreProducto;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    info() {
        return "Codigo: " + this.codigo + ", Producto: " + this.nombreProducto + ", Cantidad: " + this.cantidad + ", Costo: " + this.costo;
    }
    infoHtml() {
        return `
            <div class="producto-card">
                <p><strong>Código:</strong> ${this.codigo} | <strong>Producto:</strong> ${this.nombreProducto} | <strong>Cantidad:</strong> ${this.cantidad} | <strong>Costo:</strong> $${this.costo}</p>
            </div>
        `;
    }
}