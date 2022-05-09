const users = [
    {
      id: 167464,
      firstName: "Jimmy",
      lastName: "Arnold",
      email: "jimmya@gmail.com",
    },
    {
      id: 578447,
      firstName: "Martha",
      lastName: "Goldman",
      email: "gold@hotmail.com",
    },
    {
      id: 864578,
      firstName: "Tim",
      lastName: "Burton",
      email: "timmy.hotmail.com",
    },
  ];
  
// Remove the bullet points of the ordered list with javaScript.

  const ol = document.createElement("ol");
  ol.style.listStyleType = "none";
  document.body.prepend(ol);
  

// Loop over the array with the forEach method and dynamically 
// create an ordered list of the first and last names from the objects
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.firstName} ${user.lastName}`;

// Create a custom data attribute called “data-id” and attach the id 
// value to each li.
    li.setAttribute("data-id", `${user.id}`);
  
    ol.append(li);
  });