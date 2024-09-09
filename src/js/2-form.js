let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';

const saveData = localStorage.getItem(key);
if (saveData) {
  formData = JSON.parse(saveData);
  form.email.value = formData.email;
  form.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(key, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(key);
  form.reset();
});
