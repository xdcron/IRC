const form = document.querySelector('.form');
const value = document.querySelector('.num-chosen');
const thankYou = document.querySelector('.thank-you');

form.addEventListener('submit', function(e) { 
    const radioBtn = document.querySelector('input[name="number"]:checked');
    const myForm = new FormData(form);

    e.preventDefault();

   if(!radioBtn){
    alert('please choose a number.');
   }else{
    
    fetch("submit-url", {
        method: "POST",
        body: myForm
      })
      .then(response => {
        console.log("Form submitted successfully.");
      })
      .catch(error => {
        console.error("Form submission error:", error);
      });
    value.textContent = `You selected ${radioBtn.value} out of 5`
    form.classList.add('hidden');
    thankYou.classList.remove('hidden');
   }
})
