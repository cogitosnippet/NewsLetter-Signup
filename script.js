let button = document.getElementById('submit-id');
let alert = document.getElementById('alert-id');
let input = document.getElementById('email-id');

console.log(input);
button.addEventListener('click', (e)=>{
  e.preventDefault();
  email_validation();
})

const success_state = ()=>{
  document.getElementById("container-id").innerHTML = `<div class="success-card">
    <img src="assets/images/icon-success.svg" alt="success-image" class="success-image">
    <h1 class="success-heading">Thanks for subscribing!</h1>
    <p class="success-content">A confirmation email has been sent to <span class="user-email" id="user-id">${input.value}</span> . Please open it and click the button inside to confirm your subscription.</p>
    <button class="success-button">Dismiss message</button>
  </div>`
}

const email_validation = ()=>{
  if(input.value === ""){
    alert.style.display = "block";
    input.classList.add('alert-input');
  }
  else if(input.value.includes("@") && input.value.endsWith(".com")){
    alert.style.display = "none";
    input.classList.remove('alert-input');
    success_state();
  }
  else{
    alert.style.display = "block";
    input.classList.add('alert-input');
  }
}