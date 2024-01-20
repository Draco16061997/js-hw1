let form = document.querySelector("form")
// let qs = document.querySelector
function qs(a){
    return document.querySelector(a)
}

let in1 = document.querySelector(".in1")

let in2 = document.querySelector(".in2")

let plus = document.querySelector(".plus")
let minus = qs(".minus")
let mnogit = qs(".mnogit")
let delit = qs (".delit")


form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(in1.value);
    // console.log(in2.value);

})


plus.addEventListener("click", pluss )


function pluss(){
    console.log("plus")
    console.log(+in1.value + parseInt(in2.value));
    
}

minus.addEventListener("click", minuss )
function minuss(){console.log(+in1.value - parseInt(in2.value))}

delit.addEventListener("click", del )
function del(){console.log(+in1.value / parseInt(in2.value))}

mnogit.addEventListener("click", mn )
function mn(){console.log(+in1.value * parseInt(in2.value))}