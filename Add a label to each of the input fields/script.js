/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

//selecting form

let form = document.querySelector('#registrationForm');

form.addEventListener('submit', validate);

function validate(event) {
   
    event.preventDefault();
    
    formInputs = form.querySelectorAll('input');
    

    //checking if all inputs contains data
    if([...formInputs].every(val=>val.value.trim() !== '')){
        form.submit();
    }


    formInputs.forEach(element=>{
        let Existing = element.nextElementSibling;
        if((Existing == null || !Existing.classList.contains('text-danger'))&&element.value == ""){
        
            
                let errorMessage = document.createElement('span');
                errorMessage.classList.add('text-danger');
                
                let required = document.createTextNode('Required');
                errorMessage.appendChild(required);
                
                element.insertAdjacentElement('afterend',errorMessage);

        }else if((Existing !== null && Existing.classList.contains('text-danger'))&&element.value !== ""){
            Existing.remove();
        }      
        
    }); 
    
    
}
