const obj = {
    name: 'prince',
}

let data = new Proxy(obj,{
    set(target,property,value){

        return target[property] = value.toUpperCase();

    }
})


data.name = 'Alice'
console.log(data.name);
