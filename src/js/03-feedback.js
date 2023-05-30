import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form')
const keyStorage = "feedback-form-state"
const formData = JSON.parse(localStorage.getItem(keyStorage)) || {};
  formEl.addEventListener('input', throttle(onFormData, 500))
    formEl.addEventListener('submit', onSubmitForm);
function onFormData(e) {
     formData[e.target.name] = e.target.value;
   localStorage.setItem(keyStorage, JSON.stringify(formData));
}
function onSubmitForm(e) {
       console.log(JSON.parse(localStorage.getItem(keyStorage)));
   e.preventDefault();
   e.currentTarget.reset();
   localStorage.removeItem(keyStorage);
}
(function dataFromLocalStorage() {
  
  const data = JSON.parse(localStorage.getItem(keyStorage));
  const { email, message } = formEl.elements;
  if (data) {
    
    email.value = data.email || '';
    message.value = data.message || '';
  }
})();