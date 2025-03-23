function App() {

  return (
<div>
  <h1>MuistiinpanoApp</h1>
  <div>
    <button>Luo muistiinpano</button>
    <button>listaa muistiinapanot</button>
    <button>lisää kurssi</button>
    <h4>Lisää uusi muistiinpano</h4>
    <textarea name="textinput" id=""></textarea>
    <br />
    <button>tallenna</button>
    <button>takaisin</button>
  </div>
  <br />



  <div>
  <h4>kurssit: (alasvetovalikko)</h4>
    <button>takaisin</button>
  <div style={{ border: "1px solid black"}}>
  
  <p>21.9.2022 Javascript (id 0)</p>
  <span>Thänä kohtaan tulee tallennettu teksti</span>
  </div>
  <div style={{ border: "1px solid black"}}>
  
  <p>21.9.2022 Javascript (id 0)</p>
  <span>Thänä kohtaan tulee tallennettu teksti</span>
  </div>
  <div style={{ border: "1px solid black"}}>
  
  <p>21.9.2022 Javascript (id 0)</p>
  <span>Thänä kohtaan tulee tallennettu teksti</span>
  </div>

  </div>
<br />
  <div>
  <button>lisää kurssi</button>
  <button>takaisin</button>
  <div>
    <textarea name="coursename" id=""></textarea>
  </div>
  </div>

</div>

  )
}

export default App
