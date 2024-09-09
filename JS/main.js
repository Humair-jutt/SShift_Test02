const button = document.querySelector("button");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

const data = () => {
  console.log(`Username : ${name.value}`);
  console.log(`Username : ${password.value}`);
};

button.addEventListener("click", data);
