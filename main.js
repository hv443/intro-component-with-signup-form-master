const inputs = document.querySelectorAll('.input')
const submit = document.getElementById('claimBtn')
const form = document.querySelector('form')


var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;


submit.addEventListener('click',e=>{
    e.preventDefault()
  
    inputValue()

})

inputs.forEach(e=>{
    e.addEventListener('click',()=>{
     
            inputs.forEach(e=>{
                e.classList.remove('active')
               })
                 e.classList.add('active')

         })
        })

       
function clearForm(){
    inputs.forEach(e=>{
        e.value = ""
    })
}

        
function inputValue(){

               

            if(inputs[0].value.length<=0){
            
                inputs[0].classList.add('input-error')
                inputs[0].parentNode.classList.add('error-text')
            }
            else{
                inputs[0].classList.remove('input-error')
                inputs[0].parentNode.classList.remove('error-text')

            }
           
             
            if(inputs[1].value.length<=0){
            
                inputs[1].classList.add('input-error')
                inputs[1].parentNode.classList.add('error-text')
            }
            else{
                inputs[1].classList.remove('input-error')
                inputs[1].parentNode.classList.remove('error-text')

            }


            if(!inputs[2].value.match(mailformat)){
                inputs[2].classList.add('input-error')
                inputs[2].parentNode.classList.add('error-text')
                inputs[2].style.color=" hsl(0, 100%, 74%) "
            }
            else{
              
                inputs[2].classList.remove('input-error')
                inputs[2].parentNode.classList.remove('error-text')
                inputs[2].style.color='black'
            }


            if(inputs[2].value ===''){
                inputs[2].style.color='hsl(249, 10%, 26%)'
            }

            
            if(inputs[3].value.length<8){
             
                inputs[3].classList.add('input-error')
                inputs[3].parentNode.classList.add('error-text')

            }

            else{
                    inputs[3].classList.remove('input-error')
                    inputs[3].parentNode.classList.remove('error-text')
    
                
            }

            inputs.forEach(e=>{
                e.classList.remove('active')
            })  
            

 }








           

    