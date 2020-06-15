//ESTO SE HACE PARA PODER USAR CALLBACKS YA QUE FETCH TIENE UNA ESTRUCTURA DE PROMESAS 
let XMLHttpRequest= require('xmlhttprequest').XMLHttpRequest;

function fecthdata(url_api, callback){
    //intanciamos una instancia sobre xhtml
    let xhttp= new XMLHttpRequest;
    //traemos la info
    // el get es de traer la info luego el url api es par la api y el true es para que se hgan las cosas de manera asincrona

    xhttp.open('GET',url_api, true);
    /* generamos lo que va a hacer la  conexioón y se dice
    que si el cambio sucede */
    xhttp.onreadystatechange= function(event){
        // se hace una validaciOn para ver si se ejecuta el callback
        /*se tiene 5 estados  se hace a 4 ya que el 4 es el caso en el que ya esta 
        conectado*/
        if(xhttp.readyState === 4){
            //el estatus 200 es que no hubo errores
            if(xhttp.status=== 200){
                //el primer valor es el error y el segundo es el resultado 
                //el segundo es una respuesta en texto pero debemos de parcearlo a un archvio json

                 callback(null,JSON.parse(xhttp.responseText))
            }else{
                const error= new Error('ERRROR'+url_api);
                return callback(error, null)

            }
        }
    }
    // se hace la llamada 
    xhttp.send()

}