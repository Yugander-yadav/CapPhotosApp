
var container=document.createElement("div")
container.setAttribute("class","image-container")
var body=document.querySelector("body");
body.innerHTML=`<nav class="navbar"><h2 class="title">Cat Photos App</h2>
<div class="search"><input type="text" id="cat" placeholder="enter category" > <button class="search_text" onclick="on()">Search</button></div></nav>`
body.append(container)

var text=document.querySelector("input")
    
// var container=document.querySelector(".image-container")

async function getData(){
    url="https://cataas.com/api/cats"
    const response= await fetch(url);
    const id= await response.json();
    return id;
}


var received=getData();
received.then((data)=>{

    for(hello of data){
        var link=`https://cataas.com/cat/${hello.id}`
         var imgs=document.createElement("img")
            imgs.setAttribute("src",link)
         container.append(imgs)
        console.log(link)   
      
        
        
    }
})

function on(){
    
    async function getData2(){
        url=`https://cataas.com/api/cats?tags=${text.value}`
        try{const response= await fetch(url);
            const id= await response.json();
            return id;}
        catch{
            console.log("error")
        }
    }
    
    
    var received=getData();
    received.then((data)=>{
        body.removeChild(container)
        
        for(hello of data){
            var link=`https://cataas.com/cat/${hello.id}`
             var imgs=document.createElement("img")
                imgs.setAttribute("src",link)
             container.append(imgs)
            console.log(link)   
          
            
            
        }
    })
    

}


