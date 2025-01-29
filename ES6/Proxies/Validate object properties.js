const obj = {
    name: 'prince',
    age: 11
}

let data = new Proxy(obj,{
    set(target,property,value){
        if(property === 'age' && (isNaN(value)||value < 0)){
            throw new Error('Age must be a number greater than 0');
        }
        if(property == 'name' && value.length < 3){
            throw new Error('Name must be atleast 3 characters');
        }

        return target[property] = value;

    }
})


data.age = 4
console.log(data.age);