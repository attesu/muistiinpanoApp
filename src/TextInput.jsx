import { useState } from "react";

function TextInput(){
    const [text, setText] = useState("")
const handleClick = () => {
  console.log("painettu!");
};
const handleChange = (e) => {
 setText(e.target.value);
}
    return (
      <div>
  <h4>Lisää uusi muistiinpano</h4>
  <p>kurssin nimi (alasvetovalikko)</p>
    <textarea 
         onChange={(e) => handleChange(e)} 
         value={text} 
         name="textinput" id="">
    </textarea>
    <br />
    <button
     onClick={handleClick}>
      tallenna</button>
    <button>takaisin</button>
  </div>
      
    )
  }

  export default TextInput;