




// this is the javascript code to make the caculator working======>>
let inputx = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
 button.addEventListener('click', (e)=>{
    if(e.target.innerHTML=='='){
        inputx=eval(inputx);
        document.querySelector('input').value = inputx;
    }
   else if(e.target.innerHTML=='C'){
        inputx = "";
        document.querySelector('input').value = inputx;
    }
   else{
        inputx += inputx = e.target.innerHTML;
        document.querySelector('input').value = inputx;
         }
 
        })
    })
  
    
    

        

    





