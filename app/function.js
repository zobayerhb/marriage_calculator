// Alert check

const showAlert = (msg, type = "danger") => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn btn-close"></button></p>`;
  };

  // AGE NUMBER CHECKER
  const ageChecker = (num) => {
    let pattern = /^[0-9]{1,3}$/;
  
    return pattern.test(num);
  };

  
  //  AGE CHECKER FUNCTION
const marriageAgeChecker = (name, age, gender) => {
    if (gender == "Male") {
      let marriage_check = 21;
      if (age >= marriage_check) {
        return showAlert(
          ` Hi ${name} vaiya your age is okay for marriage `,
          "success"
        );
      } else {
        return showAlert(
          ` Hi ${name} vaiya your age is not okay for marriage, you have to wait ${
            marriage_check - age
          } years`
        );
      }
    } else {
      let marriage_check = 18;
      if (age >= marriage_check) {
        return showAlert(
          ` Hi ${name} apu your age is okay for marriage `,
          "success"
        );
      } else {
        return showAlert(
          ` Hi ${name} apu your age is not okay for marriage, You have to wait ${
            marriage_check - age
          } years`
        );
      }
    }
  };
  