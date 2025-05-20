/**
 
You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

Example
When sorted by "a", this:

[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
should return:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
The values will always be numbers, and the properties will always exist.
 */

function sortList (sortBy, list) {
    let swap;
    for (let i = 0; i<list.length;i++){
        for(let j=0;j<=i;j++){
            if(list[i][sortBy]>list[j][sortBy]){
                swap = list[i];
                list[i] = list[j];
                list[j] = swap;
            }
        }
    }
    
    return list;
  }
  console.log(sortList('a',[
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
  ]));