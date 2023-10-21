const form = document.getElementById("form");

const formValidate = (form) => {
  let error = 0;

  let formReq = document.querySelectorAll("._req");

  formReq.forEach((input) => {
    removeErr(input)

    if (input.classList.contains("_email")) {
      if (emailTest(input)) {
        addErr(input);
        error++;
      }
    } else if (phoneTest(input)) {
      addErr(input);
      error++;
    }
    if (input.value === "") {
      addErr(input);
      error++;
    }
  });

  return error
};

const formSand = async (e) => {
  e.preventDefault();

  let error = formValidate(form);

  let formData = new FormData(form)

  if (error === 0) {
    
    let response = await fetch('sand.php', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      let result = await response.json
      
      alert(result.message)

      form.reset();

    } else {
      let result = await response.json;

      alert(result.message);
    }

  } else {
    alert("Заполните правильно поля!");
  }
};

form.addEventListener("submit", formSand);

const emailTest = (input) => {
  return !/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(input.value.trim());
};

const phoneTest = (input) => {
  return !/^((\+7|7|8)+([0-9]){10})$/.test(input.value.trim());
};

const addErr = (input) => {
  //input.parentElement.classList.add("_error");
  input.classList.add("_error");
};

const removeErr = (input) => {
  //input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
};

//const form = document.forms["form"];
//const formArr = Array.from(form);
//const validFormArr = [];
//const button = form.elements["button"];

//formArr.forEach((el) => {
//  if (el.hasAttribute("data-reg")) {
//    el.setAttribute("is-valid", "0");
//    validFormArr.push(el);
//  }
//});

//form.addEventListener("input", inputHandler);
//form.addEventListener("submit", formCheck); // обработка кнопки "Отправить"

//function inputHandler({ target }) {
//  if (target.hasAttribute("data-reg")) {
//    inputCheck(target);
//  }
//}

//function inputCheck(el) {
//  const inputValue = el.value;
//  const inputReg = el.getAttribute("data-reg");
//  const reg = new RegExp(inputReg);
//  if (reg.test(inputValue)) {
//    el.setAttribute("is-valid", "1");
//    el.style.border = "2px solid rgb(0, 196, 0)";
//  } else {
//    el.setAttribute("is-valid", "0");
//    el.style.border = "2px solid rgb(255, 0, 0)";
//  }
//}

//// Здесь проверяем, можно ли отправить форму
//function formCheck(e) {
//  e.preventDefault(); // блокируем input
//  const allValid = []; // создаем массив валидных значений
//  validFormArr.forEach((el) => {
//    allValid.push(el.getAttribute("is-valid")); // проверяем каждое поле
//  });
//  const isAllValid = allValid.reduce((acc, current) => {
//    // проверяем, чтобы все было правильно
//    return acc && current;
//  });
//  if (!Boolean(Number(isAllValid))) {
//    alert("Заполните поля правильно!"); // если не правильно - сообщение пользователю
//    return;
//  }
//  formSubmit(); // если правильно - отправляем данные
//}

//  async function formSubmit() {
//    const data = serializeForm(form); // получаем данные формы
//    const response = await sendData(data); // отправляем данные на почту
//    if (response.ok) {
//      let result = await response.json(); // если ответ OK отвечает пользователю
//      alert(result.message); // .. что данные отправлены
//      formReset(); // сбрасываем поля формы
//    } else {
//      alert("Код ошибки: " + response.status); // если not OK - показываем код ошибки
//    }
//  }

//  function serializeForm(formNode) {
//    // формируем данные формы
//    return new FormData(form);
//  }

//  async function sendData(data) {
//    return await fetch("send.php", {
//      // отправляем в скрипт send_mail.php
//      method: "POST", // методом POST
//      body: data,
//    });
//  }

//  function formReset() {
//    // сброс полей формы
//    form.reset();
//    validFormArr.forEach((el) => {
//      el.setAttribute("is-valid", 0);
//      el.style.border = "none";
//    });
//  }
