function ResultRow(){
  
  let data = {
    id: 0,
    kurssi: "java",
    time: 105464,
    text: "Tähän tulee jotain tekstiä",

  };
    return (
    <div style={{ border: "1px solid black"}}>
      <span>{data.id}</span>
      <br />
      <span>{data.kurssi}</span>
      <br />
      <span>{data.time}</span>
      <br />
      <p>{data.text}</p>
  </div>
    )
}

export default ResultRow;