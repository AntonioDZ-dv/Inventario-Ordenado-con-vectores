class Inventario {
    constructor() {
        this.datos = [];
    }


    agregar(nuevo) {
        if (this.buscar(nuevo.codigo) !== null) {
            console.log("Error: El producto con el código " + nuevo.codigo + " ya existe.");
            return null; 
        }

        
        if (this.datos.length === 0) {
            this.datos.push(nuevo); 
        } else {
            if (nuevo.codigo < this.datos[0].codigo) {
                this.agregarInicio(nuevo);
            } else {  
                
                let pos = 0;
                while (pos < this.datos.length && this.datos[pos].codigo < nuevo.codigo) {
                    pos++;
                }

                
                this.datos.push(nuevo); 

                
                for (let i = this.datos.length - 1; i > pos; i--) {
                    this.datos[i] = this.datos[i - 1];
                }

                
                this.datos[pos] = nuevo;
            }
        }
    }
    
buscar(codigo) {
        let inf = 0;
        let sup = this.datos.length - 1;

        while (inf <= sup) {
            let med = Math.floor((inf + sup) / 2);

            if (this.datos[med].codigo === codigo) {
                return this.datos[med]; 
            } else if (this.datos[med].codigo < codigo) {
                inf = med + 1; 
            } else {
                sup = med - 1;
            }
        }
        return null; 
    }

    eliminar(codigo) {
        for (let i = 0; i < this.datos.length; i++) {
            if (this.datos[i].codigo === codigo) {
                let eliminado = this.datos[i];

                for (let j = i; j < this.datos.length - 1; j++) {
                    this.datos[j] = this.datos[j + 1];
                }

                this.datos.pop();
                return eliminado;
            }
        }
        return null;
    }

    agregarInicio(nuevo) {
        this.datos.push(nuevo);

        for (let i = this.datos.length - 1; i > 0; i--) {
            this.datos[i] = this.datos[i - 1];
        }

        this.datos[0] = nuevo;
    }

    extraerPrimero() {
        if (this.datos.length === 0) return null;

        let primero = this.datos[0];

        for (let i = 0; i < this.datos.length - 1; i++) {
            this.datos[i] = this.datos[i + 1];
        }

        this.datos.pop();
        return primero;
    }
    extraerUltimo() {
        if (this.datos.length === 0) return null;
        return this.datos.pop();
    }

    listar() {
        let resultado = "";
        for (let i = 0; i < this.datos.length; i++) {
            resultado += this.datos[i].infoHtml();
        }
        return resultado;
        
    }
    listarInverso(){
        let resultado = "";
        for (let i = this.datos.length - 1; i >= 0; i--) {
            resultado += this.datos[i].infoHtml();
        }
        return resultado;
    }
}   