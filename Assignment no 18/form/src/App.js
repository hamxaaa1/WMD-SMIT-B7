import React from 'react'
import './App.css';
import { useState } from 'react';
import Input from './components/Input';

function App() {
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [selectedCountryText, setSelectedCountryText] = useState('');
  const [about, setAbout] = useState('');
  const [values, setValues] = useState({
    userid: "",
    password: "",
    name: "",
    address: "",
    zipCode: "",
    email: "",
  })
  
  const obj = {
    userid: values.userid,
    password: values.password,
    name: values.name,
    address: values.address,
    zipCode: values.zipCode,
    email: values.email,
    gender: gender,
    language: language,
    country: selectedCountryText,
    about: about
   }
  
  
  
  const inputs = [
    {
      name: "userid",
      type: "text",
      placeholder: "User Id",
      label: "User Id: ",
      pattern: "^[A-Za-z0-9]{5,12}$",
      required: true,
      errormessage: "*The input must be between 5 and 12 characters long and contain only letters and numbers."
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password: ",
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required: true,
      errormessage: "*The input must be between 8 and 20 characters long and must contain atleast 1 letter and 1 number and 1 special character."
    },
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name: ",
      pattern: "^[A-Za-z ]+$",
      required: true,
      errormessage: "*The input must contain only alphabets."
    },
    {
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address: "
    },
    {
      name: "zipCode",
      type: "text",
      placeholder: "Zip Code",
      label: "Zip Code: ",
      pattern: "^[0-9 ]+$",
      required: true,
      errormessage: "*The input must contain only numbers."
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email: ",
      required: true,
      errormessage: "*Must be a valid email."
    },
  ]
  const genders = ["Male", "Female"];
  const languages = ["English", "Non English"];

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(obj) 
  }
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  const handleCountryChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setSelectedCountryText(selectedOption.text);
  };
  const handleAboutChange = (e) => {
    setAbout(e.target.value)
  }
  
  return (
    <div className='app'>
      <form onSubmit={handleSumbit}> 
      <h1>Register</h1>
        {inputs.map((input, index) => (
            <Input key={index} {...input} value = {values[input.name]} onChange={onChange} />
        ))}
         <label>Gender:</label>
         {genders.map((val, index) => {
          return (
            <>
            <input style={{marginLeft: 33, marginTop: 20}} key={index} type='radio' name={genders} id={val} value={val} onChange={(e) => {setGender(e.target.value)}} required/>
            <lable style={{fontSize: 17}}   htmlFor={val}>{val}</lable>
            </>
          )
        })}
        <br />
         <label>Language:</label>
         {languages.map((val, index) => {
          return (
            <>
            <input style={{marginLeft: 15, marginTop: 20}} key={index} type='radio' name={languages} id={val} value={val} onChange={(e) => {setLanguage(e.target.value)}} required/>
            <lable style={{fontSize: 17}} htmlFor={val}>{val}</lable>
            </>
          )
         })}
         
        <br />
        <label>Country: </label>
        <select onChange={handleCountryChange} required>
          <option value="">(Please Select a Country)</option>
          <option value="1">Pakistan</option>
          <option value="2">China</option>
          <option value="3">UK</option>
        </select>
      <br />
      <label>About: </label>
      <br />
      <textarea  rows="4" cols="50" style={{width: "100%", height: 100, wordWrap: "break-word", borderRadius: '4px', fontSize: 16, marginTop: 10}} type='textarea' value={about} onChange={handleAboutChange}  />
      <br />
      <center>
      <button>Submit</button>
      </center>
      </form>
    </div>
  )
}

export default App