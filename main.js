let h1 = document.querySelector("h1")
let h3 = document.querySelector('h3')
let para = document.querySelectorAll('p')
let verifPara = false 
let span = para[para.length-1].querySelectorAll("span")
// console.log(span)
// console.log(para)
h1.addEventListener('click', ()=>{
    h1.className=" text-blue"
    h3.addEventListener("dblclick" , ()=>{
        h1.className = " text-error"
    })

})
console.log(verifPara)
if(verifPara == false ) { 
para[0].className = "text-style"
verifPara = true
console.log(verifPara)
}


// 5
let verifSpan = false
let count = 0;
span.forEach(element =>{
    span[0].addEventListener('click', ()=>{
        span[1].className =""
        span[2].className=""
        span[0].className="bolder-red"

    })
    span[1].addEventListener('click', ()=>{
        span[0].className =""
        span[2].className=""
        span[1].className="bolder-red"
    })
    span[2].addEventListener('click', ()=>{
        span[0].className =""
        span[1].className=""
        span[2].className="bolder-red"
    })
    
})


