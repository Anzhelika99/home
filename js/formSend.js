const form = document.getElementById("form"); 
const formPopup = document.getElementById("form-popup");

const formValidate = (form) => {
  let error = 0; //Количество незаполненных полей

  let formReq = document.querySelectorAll("._req"); //собираю все необходимые поля

  formReq.forEach((input) => {
    removeErr(input);// сначала убираю стили 

    if (input.classList.contains("_email")) { //проверяю почту регулярным выражением
      if (emailTest(input)) {
        addErr(input);
        error++;
      }
    } else if (phoneTest(input)) {
      //проверяю телефон регулярным выражением
      addErr(input);
      error++;
    }
    if (input.value === "") { //проверяю, не пустое ли поле
      addErr(input);
      error++;
    }
  });

  return error;
};

const formSend = async (e) => {
  e.preventDefault();

  let error = formValidate(form);

  if (error === 0) {
    //отправляю данные в php
    let response = await fetch("send.php", {
      method: "POST",
      body: new FormData(form),
    });

    if (response.ok) {
      let result = await response.json();
      formPopup.classList.add("open");

      //alert(result.message);

      form.reset();
    } else {
      alert('Данные не были отправлены');
    }
  }
};

form.addEventListener("submit", formSend);

const emailTest = (input) => {
  return !/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(input.value.trim());
};

const phoneTest = (input) => {
  return !/^((\+7|7|8)+([0-9]){10})$/.test(input.value.trim());
};

const addErr = (input) => {
  input.classList.add("_error");
};

const removeErr = (input) => {
  input.classList.remove("_error");
};
