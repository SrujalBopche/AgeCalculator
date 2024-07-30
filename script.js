const calculate = (user_dob)=>{
    const current_date = new Date()
    const dob = new Date(user_dob)
    let age = current_date.getFullYear() - dob.getFullYear()
    const monthDif = current_date.getMonth()-dob.getMonth()

    if (monthDif < 0 || (monthDif === 0 && current_date.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}

const submit = document.querySelector("#btn")
const result = document.querySelector(".result")
submit.addEventListener('click' , (e)=>{
    const user_dob = document.querySelector("#_dob").value
    if(user_dob){
        const age = calculate(user_dob)
    result.style.display = 'block'
    result.textContent = `Your Current Age is ${age} Years `;
        
    }else{
        document.querySelector(".result").textContent = `Please Enter Valid Date  `;   
    }
})

