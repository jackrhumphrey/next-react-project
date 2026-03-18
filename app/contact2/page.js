"use client";
import { FormspreeProvider, useForm } from "@formspree/react";

export default function Page() {
  const [state, handleSubmit] = useForm("signupForm");
  // function submitForm(formData) {
  // "use server";
  // const formFields = {
  //   email: formData.get("email"),
  //   message: formData.get("message"),
  // };
  // console.log(formFields);
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <textarea id="message" name="message" />
      <button type="submit" disabled={state.submitting}>
        Sign up
      </button>
    </form>
  );
}
