import React, { useState } from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
  handleNewsletterChange,
  newsletter,
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />

      <p>
        <label htmlFor="newsletter">Subscribe to our Newsletter?</label>{" "}
        <input
          type="checkbox"
          id="newsletter"
          onChange={handleNewsletterChange}
          checked={newsletter}
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
