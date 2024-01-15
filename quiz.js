const form = document.querySelector("form")
const mark = document.getElementById("myProgressBar")

const correctAnswers = ['A','A','A','A','A']

form.addEventListener ('submit' , (e)=>{
    e.preventDefault()
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]
    let score = 0 
    correctAnswers.forEach((ans,i)=>{
        if(ans === userAnswers[i]) 
        score+=20
    })

    scrollTo(0,0)
    mark.innerHTML = ` <div class="progress-bar" style="width:${score}%" >${score}%</div>`


})



