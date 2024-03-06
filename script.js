
const btnicon = document.getElementById("btn-icon");
const inputEL = document.querySelector("input")
const requerimentosLista = document.querySelectorAll(".list li")

const requerimentos = [
    {regex:/.{8}/, index:0},
    {regex:/.[A-Z]/, index:1},
    {regex:/.[a-z]/, index:2},
    {regex:/.[^0-9a-zA-Z]/, index:3},
    {regex:/.[0-9]/, index:4} 
]

inputEL.addEventListener("keyup",(e) =>{
    
    requerimentos.forEach((item,) =>{
        const trueFalse = item.regex.test(e.target.value);
        const requerimentosItem = requerimentosLista[item.index];

        if(trueFalse){
            requerimentosItem.style.cssText = `text-decoration:line-through`
            requerimentosItem.firstElementChild.className = "fa fa-check icon"
        }else{
            requerimentosItem.style.cssText = `text-decoration:line-none`
            requerimentosItem.firstElementChild.className = "fa fa-circle icon"
        }
    })
})

btnicon.addEventListener("click",()=>{
    inputEL.type = inputEL.type == "password" ? "text" : "Passowrd";
    btnicon.classList = `fa fa-eye${inputEL.type == "password"? "" : "-slash"} icon`;
})