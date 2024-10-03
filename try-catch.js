function checkAge() {
  const ageField = document.getElementById("age"); //.value
  const ageText = ageField.value;
  const errorTag = document.getElementById("error");

  try {
    const age = parseInt(ageText);

    if (isNaN(age)) {
      // console.log("Age not found", age, ageText);
      throw "Please enter a number";
    } else if (age < 18) {
      throw "Bacch kaccah not allowed";
    } else if (age > 30) {
      throw "Murubbi are not allowed";
    }
    errorTag.innerHTML = "";
  } catch (err) {
    console.log("Error:", err);
    errorTag.innerHTML = "ERROR:" + err;
  } finally {
    console.log("ALL DONE");
  }
  console.log(111111);
}
