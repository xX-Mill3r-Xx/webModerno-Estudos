let ComparaThis = function(params){
    console.log(this === params)
}

ComparaThis(globalThis)

const obj = {}
ComparaThis = ComparaThis.bind(obj)
ComparaThis(globalThis)
ComparaThis(obj)

let ComparaThisArow = params => console.log(this === params)

ComparaThisArow(globalThis)
ComparaThisArow(module.exports)

ComparaThisArow = ComparaThisArow.bind(obj)
ComparaThisArow(obj) // a arow function é mais forte que o bind