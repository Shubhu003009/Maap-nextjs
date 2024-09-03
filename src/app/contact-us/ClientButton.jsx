"use client";

import Button from "@/components/ui/Button";

const validateForm = (event) => {
  event.preventDefault();

  const firstName = document.getElementById("grid-first-name");
  const lastName = document.getElementById("grid-last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const firstNameError = document.getElementById("first-name-error");
  const lastNameError = document.getElementById("last-name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  let isValid = true;

  // Validate first name
  if (!firstName.checkValidity()) {
    firstNameError.textContent = firstName.validity.valueMissing
      ? "First name is required."
      : "First name should only contain letters and be up to 50 characters long.";
    firstNameError.classList.remove("hidden");
    isValid = false;
  } else {
    firstNameError.classList.add("hidden");
  }

  // Validate last name
  if (!lastName.checkValidity()) {
    lastNameError.textContent = lastName.validity.valueMissing
      ? "Last name is required."
      : "Last name should only contain letters and be up to 50 characters long.";
    lastNameError.classList.remove("hidden");
    isValid = false;
  } else {
    lastNameError.classList.add("hidden");
  }

  // Validate email
  if (!email.checkValidity()) {
    emailError.textContent = email.validity.valueMissing
      ? "Email is required."
      : "Please enter a valid email address.";
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Validate message
  if (!message.checkValidity()) {
    messageError.textContent = message.validity.valueMissing
      ? "Message is required."
      : "Please enter a message between 10 and 500 characters.";
    messageError.classList.remove("hidden");
    isValid = false;
  } else {
    messageError.classList.add("hidden");
  }

  if (isValid) {
    // Proceed with form submission
    alert("Form submitted successfully!");

    // Clear the form
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";

    // Clear the errors
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  }
};

export default function ClientButton({ children }) {
  return (
    <button
      className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="submit"
      onClick={validateForm}
    >
      {children}
    </button>
  );
}
