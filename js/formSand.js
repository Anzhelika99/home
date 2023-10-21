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
      let result = await response.json()
      
      alert(result.message)

      form.reset();

    } else {
      let result = await response.json();

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
