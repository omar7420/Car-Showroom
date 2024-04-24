let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  menu.classList.remove("active");
};

let menu = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  menu.classList.toggle("active");
  search.classList.remove("active");
};
// Hide Menu And Search Box On Scroll
window.onscroll = () => {
  menu.classList.remove("active");
  search.classList.remove("active");
};

// Header
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

const form = document.getElementById("form");
const carManufacture = document.getElementById("carManufacture");
const carModelName = document.getElementById("carModelName");
const yourAddress = document.getElementById("yourAddress");
const yourEmail = document.getElementById("yourEmail");
const contactNumber = document.getElementById("contactNumber");

form.addEventListener("Submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (yourEmail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(yourEmail).toLowerCase());
};

const validateInputs = () => {
  const carManufactureValue = carManufacture.value.trim();
  const carModelNameValue = carModelName.value.trim();
  const yourAddressValue = yourAddress.value.trim();
  const yourEmailValue = yourEmail.value.trim();
  const contactNumberValue = contactNumber.value.trim();

  if (carManufactureValue === "") {
    setError(carManufacture, "Manufacture is required");
  } else {
    setSuccess(carManufacture);
  }

  if (carModelNameValue === "") {
    setError(carModelName, "Car Model is required");
  } else {
    setSuccess(carModelName);
  }

  if (yourAddressValue === "") {
    setError(yourAddress, "Address is required");
  } else {
    setSuccess(yourAddress);
  }

  if (yourEmailValue === "") {
    setError(yourEmail, "Email is required");
  } else if (!isValidEmail(yourEmailValue)) {
    setError(yourEmail, "Provide a valid email");
  } else {
    setSuccess(yourEmail);
  }

  if (contactNumberValue === "") {
    setError(contactNumber, "Email is required");
  } else {
    setSuccess(contactNumber);
  }
};
