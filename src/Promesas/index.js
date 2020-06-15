const happend= () => {
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