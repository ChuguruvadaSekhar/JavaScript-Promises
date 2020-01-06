function getData(Url){
    return new Promise((resolve, reject)=>{
        axios.get(Url).then(response => {
            resolve(response);

        }).catch(error => {
            reject(error);
        });
        
    })
}
let promise1 = getData("https://jsonplaceholder.typicode.com/todos");
let promise2 = getData("https://jsonplaceholder.typicode.com/users");
let promise3 = getData("https://jsonplaceholder.typicode.com/posts");
Promise.all([promise1,promise2,promise3]).then(result =>{
    console.log(result);
});