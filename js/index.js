const age_checker = document.getElementById("age_checker");
const msg = document.querySelector(".msg");
const msg_long = document.querySelector(".msg_long");

age_checker.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input fields name
  let name = age_checker.querySelector("input[name=name]");
  let age = age_checker.querySelector("input[name=age]");
  let gender = age_checker.querySelectorAll("input[name=gender]");

  //   Check gender
  let gender_check = "";
  gender.forEach((item) => {
    if (item.checked) {
      gender_check = item.value;
    }
  });

  //   form validation

  if (name.value == "" || age.value == "" || gender_check == "") {
    msg.innerHTML = showAlert("All fields are required", "danger");
  } else if (ageChecker(age.value) == false) {
    msg.innerHTML = showAlert("You age is not valid", "warning");
  } else {
    msg_long.innerHTML = marriageAgeChecker(
      name.value,
      age.value,
      gender_check
    );
  }
});
