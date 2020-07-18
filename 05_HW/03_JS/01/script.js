let input = document.getElementById("nameInput");

input.oninput = () => {
  let x = input.value;
  let arr = Array.from(x);
  for (let i = 0; i < arr.length; ++i) {
    if (parseInt(arr[i]) >= 0 || parseFloat(arr[i]) <= 0)
      delete arr[i];
  }
  input.value = arr.join('');
}