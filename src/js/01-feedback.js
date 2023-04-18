import Throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', Throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function onTextareaInput() {
  let email = refs.email.value;
  let message = refs.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function populateTextarea() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (let key in data) {
      refs.form[key].value = data[key];
    }
  }
}

// аналогія з рішенням Репети в Модулі 8 - відео заняття 16, з 17 хвилини до 45

// import Throttle from 'lodash.throttle';
// // додаємо імпорт бібліотеки 'lodash.throttle'

// const STORAGE_KEY = 'feedback-form-state';
// // створюємо константу сховища STORAGE_KEY, ключем до якої є рядок 'feedback-form-state'

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('.feedback-form input'),
//   message: document.querySelector('.feedback-form textarea'),
// };
// // створюємо константу-об'єкт посилань, установлюємо зв'язок між елементами DOM і HTML

// refs.form.addEventListener('submit', onFormSubmit);
// // закріплюємо слухача на форму загалом для події 'submit' + колбек-функцію, яка виконається
// // під час події сабміту

// refs.form.addEventListener('input', Throttle(onTextareaInput, 500));
// // закріплюємо слухача на форму загалом для події 'input' + через імпортовану бібліотеку
// // 'lodash.throttle' користуємось методом Throttle, де прописуємо колбек-функцію
// // для зпрацювання події інпут + інтервал пів секунди (500ms) між запусками колбека під час уведення

// populateTextarea();
// // створюємо порожню функцію, яку викликаємо пізніше

// function onFormSubmit(event) {
//   event.preventDefault();
//   // скидує дефолтні налаштування браузера і не дозволяє сторінці перезавантажуватись
//   console.log(localStorage.getItem(STORAGE_KEY));
//   // виводимо до консолі після сабміту об'єкт даних із локального сховища ("ключ": "значення")
//   localStorage.removeItem(STORAGE_KEY);
//   // очищаємо значення локального сховища після сабміту форми
//   event.currentTarget.reset();
//   // зкидуємо значення до вихідних в усіх полях (чекбокси, інпути тощо) форми методом .reset(), який існує для форм
// }

// function onTextareaInput() {
//   let email = refs.email.value;
//   // сторюємо змінну, яку прирівнюємо до значення поля введення мейла
//   let message = refs.message.value;
//   // сторюємо змінну, яку прирівнюємо до значення поля введення повідомлення
//   localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
//   // записуємо до локального сховища значення email та message. Додається
//   // до ключа сховища 'feedback-form-state' об'єкт ключів із значеннями {"email":"","message":""}.
//   // JSON.stringify() приймає значення і перетворює його у валідний файл JSON.
// }

// function populateTextarea() {
//   if (localStorage.getItem(STORAGE_KEY)) {
//     // якщо в локальному сховищі є будь-яке значення STORAGE_KEY
//     const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     // створюємо константу data, значення якої прирівнюємо до розпарсеного методом JSON.parse() з об'єкту
//     // раніше записаного до сховища методом JSON.stringify()
//     for (let key in data) {
//       // циклои for перебираємо кожен ключ із об'єкту
//       refs.form[key].value = data[key];
//       // де в значення в значення кожного ключа форми записується значення відповідних
//       // ключів, наявних у сховищі, записаних раніше, відповідно користувач отримає
//       // раніше введені дані й не сабмітовані з тих чи інших причин
//     }
//   }
// }

// // аналогія з рішенням Репети в Модулі 8 - відео заняття 16, з 17 хвилини до 45
