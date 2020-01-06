function getData(Url){
    return new Promise((resolve, reject)=>{
        axios.get(Url).then(response => {
            resolve(response)
        }).catch(error =>{
            reject(err)
        });
    })
}
getData("https://jsonplaceholder.typicode.com/todo").then(response =>{
    console.log(response)
}).catch(err =>{
        console.log(err)
})