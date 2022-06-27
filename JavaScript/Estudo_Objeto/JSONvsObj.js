//JSON - é um formato de dados - notação testual no JS
const obj = {a:1, b:2, c:3, soma(){returna+b+c}}
console.log(JSON.stringify(obj))
//console.log(JSON.parse("{a:1, b:2, c:3}"))
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // modelo valido
console.log(JSON.parse('{"a":1.7, "b": "string", "c": true, "d":{}, "e":[]}'))
