const inputs = document.querySelectorAll('.input')
const submit = document.getElementById('claimBtn')


var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;



    inputs.forEach(e=>{

        e.addEventListener('click',()=>{
            if(e.this){
            e.classList.add('active')
            }
            else{
            e.classList.remove('active')
            }
        })
      

            submit.addEventListener('click',()=>{

                if(inputs[0].value.length>0){
                    // console.log('ok')
                }
                else{
                    inputs[0].classList.add('input-error')
                    inputs[0].parentNode.classList.add('error-text')
                }

                if(inputs[1].value.length>0){
                    // console.log('ok')
                }
                else{
                    inputs[1].classList.add('input-error')
                    inputs[1].parentNode.classList.add('error-text')
                }


                if(inputs[2].value.match(mailformat)){
                    // console.log('ok')
                }
                else{
                    inputs[2].classList.add('input-error')
                    inputs[2].parentNode.classList.add('error-text')
                }



                if(inputs[3].value.length>=8){
                    // console.log('ok')
                }
                else{
                    inputs[3].classList.add('input-error')
                    inputs[3].parentNode.classList.add('error-text')
                }

                
            })
        })

