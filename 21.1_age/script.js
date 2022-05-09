// Create a webpage that has an input field for the user’s age and a button.
// If the user enters a number above 18, make the text “you can drink appear”.
// If the user enters a number below 18, make the text “you’re too young” 
// appear.
document.querySelector("button").addEventListener("click", () => {
    console.log("hi");
    let label = "";
    if (parseInt(document.querySelector("#age").value) >= 18) {
      label = "you can drink";
    }
    else label = "you're too young";
    document.querySelector("#drink-label").innerHTML = label;
  });