const doSome = () =>{

    return new Promise((resolve, reject)=> {
        (true)
            ? setTimeout(() => resolve('Muy buen async'), 3000)
            : reject(new Error('Test error')) 
    })
}

const doSomeA = async () =>{
    const algo =await doSome()
    console.log(algo);


}


console.log('Before');
doSomeA();

console.log('after')


const otraF = async () => {
    try{
        const some = await doSome();
        console.log(some);

    }
    catch(error){
        console.log(error);
    }
}