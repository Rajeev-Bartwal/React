function Hello(){

  let name = "Rajeev"
  let fullname = () => {
    return "Rajeev bartwal"
  }
    return <p style={{'background-color' : '#9fdbedff' , fontStyle : 'italic'}}>
      Hello this is my page. my name is {fullname()}
    </p>
}

export default Hello;