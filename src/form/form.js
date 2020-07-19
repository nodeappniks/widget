import React from 'react';
const useNameFormState = () => {
    const init = {
      name: '',
      surname: ''
    }
    const [values, setValues] = React.useState(init)
    // ... you can subscribe here
    return [values, setValues]
  }

  
  
  const NameForm = (props) => {
    const [values, setValues] = useNameFormState();
    let info = false;
    const [showInfo, setShowInfo] = React.useState({showInfo: false})
    const [expand, setExpand] = React.useState({expand: true})
    console.log(showInfo);
  
    const handleChange = (event) => {
      setValues({...values, [event.target.name]: event.target.value});
    }

    let back = (event) =>{
        info = false;
        setShowInfo({...showInfo,showInfo: false});
        console.log(showInfo);
        event.preventDefault();
    }

    let expand_card = () =>{

        setExpand({...expand,expand: !expand.expand});
        console.log(expand)
    }
  
    const handleSubmit = (event) => {
      info = true;
      setShowInfo({...showInfo,showInfo: true});
      console.log(showInfo);
      
      
      event.preventDefault();
    }
    
    return (
        <div className="main-form" style={{ height: expand.expand ? "300px" : "47px" }}>
            <div style={{ display: showInfo.showInfo ? "block" : "none" }} >
                <div className="text" >Name: {values.name} {values.surname}</div>
                <button type="button" className="button" onClick={back}>Back</button>
            </div>
            <form onSubmit={handleSubmit} style={{ display: !showInfo.showInfo ? "block" : "none" }} >
                <h4 className="header" onClick={expand_card} ><div className="title"  >Form</div></h4>
                <div style={{ display: expand.expand ? "block" : "none" }}>
                    <input type="text" value={values.name} placeholder="First Name" name="name" onChange={handleChange} /><br />
                    <br />
                    <input type="text" value={values.surname} placeholder="Last Name" name="surname" onChange={handleChange} /><br /><br />
                    <input type="submit" className="button" value="Submit" />
                </div>
                <br />
                <i style={{ display: expand.expand ? "block" : "none" }} >Click on header to maximize and minimize the card</i>
            </form>

        </div>
      
    );
  }

  export default NameForm;
  
  