const obj = {
    name: 'prince',
    age: 11
}

let data = new Proxy(obj,{
    get(target,property){
        return `Property ${property} is accessed`;
    }
})

console.log(data.naame);
data.name = 'chris'
console.log(data.name);