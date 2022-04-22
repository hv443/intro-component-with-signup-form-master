const inputs = document.querySelectorAll('.input')
const submit = document.getElementById('claimBtn')


var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;


inputs.forEach(e=>{
    e.addEventListener('click',()=>{
     
            inputs.forEach(e=>{
                e.classList.remove('active')
               })
                 e.classList.add('active')

         })
        })
       

        inputs.forEach(e=>{
            e.addEventListener('blur',()=>{

            })
        })

        
        submit.addEventListener('click',()=>{

               

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


            if(inputs[2].value.match(mailformat)){
            
            }
            else{
                inputs[2].classList.add('input-error')
                inputs[2].parentNode.classList.add('error-text')

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
           

        })





           

    