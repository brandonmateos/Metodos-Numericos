export default class Binario{
    constructor(value){
        this.value = value;
    }

    codificacion(){
        //let bin = this.value.toString(2);
        //return bin;

        //Separamos numero entero del decimal 
        let entero = Math.trunc(this.value);
        let decimal = this.value - entero;
        
        let codigo = new Array();

        //Si numero es cero regresar 0
        if(this.value == 0){
            codigo.unshift("0");
        }

        //calculamos el equivalente en binario del numero entero 
        //y guardamos en una matris
        while (entero > 0) {
            if ((entero/2)-(Math.trunc(entero/2)) == 0){
                codigo.unshift("0");
                
            }else{
                codigo.unshift("1");
                
            }     
            entero = Math.trunc(entero / 2);  
        }

        //si decimal es igual a 0 regresamos matriz
        if(decimal === 0){
           //eliminamos " , " de la matriz y convertimos a texto
           return codigo.join("").toString(); 
        }else{
            codigo.push(".");
            //calculamos el equivalente en binario del numero decimal 
            //y guardamos en una matriz
            let sustiDecimal = decimal ;
            for (let i = decimal.toString().length -3; i >= 0; i--){
                if (sustiDecimal*2 >= 1){
                    codigo.push("1");
                    sustiDecimal - 1;
                } else {
                    codigo.push("0");
                    sustiDecimal = sustiDecimal *2;
                }
            }
        }
        //eliminamos " , " de la matriz y convertimos a texto
       return codigo.join("").toString();

    }

    decodificacion(){
        //Separamos el entero del punto decimal
        let entero = Math.trunc(this.value);
        let num = this.value;
        let decimal = dividir((multiplicar(num)-multiplicar(entero)));

        //obtenermos en valor del numero entero en binario a base 10
        let enteroBinario = parseInt(this.value, 2);


        let decimalBinario = 0;
        let res = 0;
        // si decimal es 0 regresamos binario entero en base 10
        // si es mayor a 0 sacamos su valor en binario
        if (decimal === 0){
            return enteroBinario;
        }else{
            for (let i = decimal.toString().length-2; i >= 0; i--){
                //guardames en res el valor que se enceuntra en la posicion i 
                res = decimal.toString()[i+1];
                if (res == 1){
                    decimalBinario = (Math.pow(2, -i) * 1) + decimalBinario;
                }
    
            }
            return  (decimalBinario)+(enteroBinario);

        }


        function multiplicar(num){
            return num * 1000000;
        }

        function dividir(num){
            return num / 1000000;
        }
        
        

        
    }
}