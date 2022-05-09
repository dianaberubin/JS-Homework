function submitForm(event) {
const profile = {};
event.preventDefault();
const formInputs = event.target.children;
for(let htmlTags of formInputs) {
    if (htmlTags.localName==="input"){
        console.log(htmlTags);
        profile[htmlTags.name] = htmlTags.value;

    }
}
console.log(profile);
}


function confirmForm() {
    var name = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var message =
      name + ", are you " + age + " and your email is " + email + " ?";
    var isConfirmed = confirm(message);
    if (isConfirmed) {
      window.alert("congratulations you successfully sent this form");
    }
  }