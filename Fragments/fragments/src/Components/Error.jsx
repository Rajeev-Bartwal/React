const Error = (props) => {
  
    return    <>
     {props.items.length === 0 ? <h1  className="heading">Please Enter Food Items</h1> : null}
    </>
}

export default Error;