const obj = {
    name: 'prince',
    age: 11
}

let data = new Proxy(obj,{
    get(target,property){
        if(property in target){
            return target[property];
        }else{
            return 'N/A';
        }
    }
})

console.log(data.naame);
data.name = 'chris'
console.log(data.name);