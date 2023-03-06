const form = document.getElementById('form-js');
const submitBtn = document.getElementById('submit-button');

const nameInput = document.getElementById('PName');
const nameError = document.getElementById('name-error');
const nameSuccess = document.getElementById('name-success');

const categoryInput = document.getElementById('PCategory');
const categoryError = document.getElementById('category-error');
const categorySuccess = document.getElementById('category-success');

const imageInput = document.getElementById('PImage');
const imageError = document.getElementById('image-error');
const imageSuccess = document.getElementById('image-success');

const radioInput = document.getElementsByName('flexRadioDefault');
const radioError = document.getElementById('radio-error');
const radioSuccess = document.getElementById('radio-success');

const descInput = document.getElementById('formDesc');
const descError = document.getElementById('desc-error');
const descSuccess = document.getElementById('desc-success');

const priceInput = document.getElementById('PPrice');
const priceError = document.getElementById('price-error');
const priceSuccess = document.getElementById('price-success');

nameInput.addEventListener('input', validateName);
categoryInput.addEventListener('input', validateCategory);
imageInput.addEventListener('input', validateImage);
descInput.addEventListener('input', validateDesc);
priceInput.addEventListener('input', validatePrice);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateName() &&
    validateCategory() &&
    validateImage() &&
    validateDesc() &&
    validatePrice()) {
    submitForm();
  }
});

function validateName() {
  const name = nameInput.value.trim();
  const required = 25;
  const left = required - name.length;

  if (name === '') {
    nameError.textContent = 'Please enter a valid Product name.';
    nameSuccess.style.display = 'none';
    return false;
  } else if (name.length > 10) {
    nameError.textContent = 'Product Name must not exceed 25 characters. ' + left + ' character left can be use';
    nameSuccess.style.display = 'none';
    return false;
  } else if (/[@#{}<>?=]/.test(name)) {
    nameError.textContent = 'Name must not contain symbols.';
    nameSuccess.style.display = 'none';
    return false;
  }
}

function validateCategory() {
  const category = categoryInput.value.trim();

  if (category === '') {
    categoryError.textContent = 'Please enter a valid Product Category.';
    categorySuccess.style.display = 'none';
    return false;
  } else {
    categorySuccess.textContent = 'Product category is verify.';
    categoryError.style.display = 'none';
    return true;
  }
}

function validateImage() {
  const image = imageInput.value.trim();

  if (image === '') {
    imageError.textContent = 'Please enter a valid Product Image URL.';
    imageSuccess.style.display = 'none';
    return false;
  } else {
    imageSuccess.textContent = 'Product image is uploaded.';
    imageError.style.display = 'none';
    return true;
  }
}

function validateDesc() {
  const desc = descInput.value.trim();

  if (desc === '') {
    descError.textContent = 'Please enter a valid Product Description.';
    descSuccess.style.display = 'none';
    return false;
  } else {
    descSuccess.textContent = 'Product Description is filled';
    descError.style.display = 'none';
    return true;
  }
}

function validatePrice() {
  const price = priceInput.value.trim();

  if (price === '') {
    priceError.textContent = 'Please enter a valid Product Price.';
    priceSuccess.style.display = 'none';
    return false;
  } else if (isNaN(price) || price <= 0) {
    priceError.textContent = 'Price must be a positive number.';
    priceSuccess.style.display = 'none';
    return false;
  } else {
    priceSuccess.textContent = 'Product price is valid.';
    priceError.style.display = 'none';
    return true;
  }
}

function submitForm() {
  const selectedRadio = Array.from(radioInput).find((radio) => radio.checked);

  const data = {
    name: nameInput.value.trim(),
    category: categoryInput.value.trim(),
    image: imageInput.value.trim(),
    rating: selectedRadio.value,
    desc: descInput.value.trim(),
    price: Number(priceInput.value.trim()),
  };

  console.log('Submitting the following data:');
  console.log(data);

  const Message = `
    Product Name: ${data.name}
    Product Category: ${data.category}
    Product Image: ${data.image}
    Product Rating: ${data.rating}
    Product Description: ${data.desc}
    Product Price: ${data.price}
  `;
  alert(Message);

  form.reset();
}
