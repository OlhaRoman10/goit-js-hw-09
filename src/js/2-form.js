const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: ""
};

// Завантаження даних з локального сховища
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// Відстеження введення та збереження в localStorage
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробка відправлення форми
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    
})
