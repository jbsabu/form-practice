import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateLocal,setDateLocal] = useState(new Date());

  const [comment,setComment] = useState();

  const [color, setColor] = useState();

  const handleUpdate = (e) => {
    const newValue = e.target.value;
    // console.log(newValue)
    // setFirstName(newValue)
  };

  return (
    <form>
      <label id = 'rain'>
        First Name:
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleUpdate}
        />
      </label>
      <br />
      <label htmlFor="">
        Last Name
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={handleUpdate}
        />
      </label>
      <br />
      <label htmlFor="">Color
      <input type = "color" value ={color}
      onChange = {handleUpdate} />
      </label>
      <br />
      <label htmlFor="">Date: 
      <input type="datetime-local" value = {dateLocal} onChange={handleUpdate} />
      </label>
      <br />
      <label htmlFor=""> Message:
    < textarea name="" id="" cols="25" rows="2" onChange={handleUpdate}>{comment}</textarea>
      </label>
      <br />
      <label htmlFor="">Select One:
          <input type="radio" />
      </label>
    </form>
  );
}
