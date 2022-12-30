let buttons = document.querySelectorAll("button")
console.log(buttons)
let ans = document.querySelector("#ans")
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        let input = this.innerText
        updateDisplay(input)
    })
}

function updateDisplay(input){
   let currentdisplay = ans.innerText
  if(currentdisplay== ""){
    if(input!="C" && input!="DEL" && input!="="){
        ans.innerText=" ";
        //ans.innerText+=input;
    }
  }
  else{
    if(input=="C"){
        ans.innerText="0"
    }
    else if(input=="DEL"){
        if(currentdisplay.length!=0){
            ans.innerText=currentdisplay.substring(0,currentdisplay.length-1)
        }
        /* else if(currentdisplay.length==0){
            ans.innerText = "0"
        } */
    }
  }

  if(input!="C" && input!="DEL" && input!="="){
    ans.innerText+=input
  } 
  if(input=="="){ 
    let output = ans.innerText
    ans.innerText = eval(output)
  }
  
}

