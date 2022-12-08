var count = 0
var menu = document.querySelector("#toogle-icon")
var list = document.querySelector("#list")
var body = document.querySelector("#body")
var loading = document.querySelector("#loading")
menu.addEventListener('click',()=>{
    count++
    if(count % 2 == 0){
        console.log(count)
        list.style.display = "none"
    }
    else{
        list.style.height = "300px"
        list.style.display = "block"
        
        console.log(count)
    }
    
})
window.onload = ()=>{
    body.style.display = "none"
    setTimeout(()=>{
       
        loading.style.display = "none"
        body.style.display = "block"
    },5000)
}
   
