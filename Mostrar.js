
const hist = document.querySelector('.lista ul');
class Mostrar{
    
    constructor(anterior, actual){
    
        this.re = [];
        this.anterior = anterior;
        this.actual = actual;
        this.operaciones = new Operaciones();
        this.tipo = undefined;
        this.valorAnterior = '';
        this.valorActual = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }


    }
    
    add(numero){
        if(numero === "." && this.valorActual.includes(".")){
            return
        }else{
            
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimir();
    
        }
    } 



    definicion(tipo){
        if(this.tipo !== 'igual'){
            this.calcular();
        }
            this.tipo = tipo;
            this.valorAnterior = this.valorActual || this.valorAnterior;
            this.valorActual = '';  
            this.imprimir();
        
    }

    imprimir(){
        this.actual.textContent = this.valorActual;
        this.anterior.textContent = `${this.valorAnterior} ${this.signos[this.tipo] || ''}`;

    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimir();
    }


    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual)  || isNaN(valorAnterior)) return
        this.valorActual = this.operaciones[this.tipo](valorAnterior, valorActual);
        
        this.re.push(this.valorActual);
        localStorage.setItem('resultados', JSON.stringify(this.re));
        this.lista();
    }

    limpiar(){
        hist.innerHTML = ''
    }


    lista(){
        this.limpiar();
        let data = JSON.parse(localStorage.getItem('resultados'));
        data.forEach(listado=>{
            const li = document.createElement('li');
            li.innerHTML = `${listado}`;
            hist.appendChild(li);
        });
        
        }
    
    borrarHistorial(){
        this.re = [];
        localStorage.clear();
        this.lista();
    }

}
