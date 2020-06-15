const happend= () => {
    /*Lo primero es que esta funcion tiene la capacidad de regresar algo si es que 
    las cosas pasan o si se es verdad en este caso la funcion 
    regresa una promesa tiene dos parametros el resolve y el reject  */
    return new Promise((resolve,reject) =>{
            if(true){
                resolve ('muy chido bro');
            }else{
                reject('murio bro :(')
            }
    })
};


happend()
    .then(response => console.log(response))
    .catch(err=> console.error(err))


const happend2= () =>{
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() => {
                resolve('true')
            },5000)
        }else{
            const error= new Error('shale');
            reject(error);
        }

    });
}

happend2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


    // con esto las ejecutamos de forma encadenada lleva en este caso su argumento son las dos promesas
Promise.all([happend2(),happend()])
    .then(response =>  console.log(response))
    .catch(err => console.error(err))