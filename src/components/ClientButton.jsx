// "use client";


// const validateForm = (event) => {
//   event.preventDefault();

//   const firstName = document.getElementById("grid-first-name");
//   const lastName = document.getElementById("grid-last-name");
//   const email = document.getElementById("grid-email");
//   const message = document.getElementById("grid-message");

//   const firstNameError = document.getElementById("first-name-error");
//   const lastNameError = document.getElementById("last-name-error");
//   const emailError = document.getElementById("email-error");
//   const messageError = document.getElementById("message-error");

//   let isValid = true;

//   // Validate first name
//   if (!firstName.checkValidity()) {
//     firstNameError.textContent = firstName.validity.valueMissing
//       ? "First name is required."
//       : "First name should only contain letters and be up to 50 characters long.";
//     firstNameError.classList.remove("hidden");
//     isValid = false;
//   } else {
//     firstNameError.classList.add("hidden");
//   }

//   // Validate last name
//   if (!lastName.checkValidity()) {
//     lastNameError.textContent = lastName.validity.valueMissing
//       ? "Last name is required."
//       : "Last name should only contain letters and be up to 50 characters long.";
//     lastNameError.classList.remove("hidden");
//     isValid = false;
//   } else {
//     lastNameError.classList.add("hidden");
//   }

//   // Validate email
//   if (!email.checkValidity()) {
//     emailError.textContent = email.validity.valueMissing
//       ? "Email is required."
//       : "Please enter a valid email address.";
//     emailError.classList.remove("hidden");
//     isValid = false;
//   } else {
//     emailError.classList.add("hidden");
//   }

//   // Validate message
//   if (!message.checkValidity()) {
//     messageError.textContent = message.validity.valueMissing
//       ? "Message is required."
//       : "Please enter a message between 10 and 500 characters.";
//     messageError.classList.remove("hidden");
//     isValid = false;
//   } else {
//     messageError.classList.add("hidden");
//   }

//   if (isValid) {
//     // Proceed with form submission
//     alert("Form submitted successfully!");

//     // Clear the form
//     firstName.value = "";
//     lastName.value = "";
//     email.value = "";
//     message.value = "";
//   }
// };

// const ClientButton = ({ children }) => {
//   return (
//     <button
//       className="focus-visible:outline-offset-4 rounded-lg bg-[linear-gradient(to_right,_#828dff,_#7cddff)]  py-3 px-4 md:py-4 md:px-7 text-sm font-bold uppercase text-white shadow-sm shadow-sky-600/20 transition-all hover:shadow-md hover:shadow-sky-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//       type="submit"
//       onClick={validateForm}
//     >
//       {children}
//     </button>
//   );
// };

// export default ClientButton;
