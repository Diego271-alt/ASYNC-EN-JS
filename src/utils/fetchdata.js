//ESTO SE HACE PARA PODER USAR CALLBACKS YA QUE FETCH TIENE UNA ESTRUCTURA DE PROMESAS 
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fecthData = (url_api) => {
    return new Promise((resolve,reject) => {
        const xhttp= new XMLHttpRequest();
        //traemos la info
        // el get es de traer la info luego el url api es par la api y el true es para que se hgan las cosas de manera asincrona
    
        xhttp.open('GET',url_api, true);
        /* generamos lo que va a hacer la  conexioón y se dice
        que si el cambio sucede */
        xhttp.onreadystatechange= (()=>{
            // se hace una validaciOn para ver si se ejecuta el callback
            /*se tiene 5 estados  se hace a 4 ya que el 4 es el caso en el que ya esta 
            conectado*/
            if(xhttp.readyState === 4){
                (xhttp.status=== 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error',url_api))
            }
        })
        // se hace la llamada 
        xhttp.send()


    });
    //intanciamos una instancia sobre xhtml


}


module.exports= fecthData;