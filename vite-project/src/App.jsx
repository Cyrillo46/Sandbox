import "./App.css";

function App() {
  return (
    <>
      <fieldset>
        <legend>Contact Details</legend>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="phone_number">Phone Number:</label>
        <input type="tel" id="phone_number" name="phone_number" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </fieldset>

      <fieldset>
        <legend>Delivery Details</legend>

        <label htmlFor="street_address">Street Address:</label>
        <input type="text" id="street_address" name="street_address" />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" />

        <label htmlFor="zip_code">Zip Code:</label>
        <input type="text" id="zip_code" name="zip_code" />
      </fieldset>
    </>
  );
}

export default App;
