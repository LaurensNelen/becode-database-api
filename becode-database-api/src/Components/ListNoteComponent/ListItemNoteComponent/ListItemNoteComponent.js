import React,{useState} from 'react';
import { Button,Modal } from 'react-bootstrap';
import axios from 'axios'

export default function ListItemNoteComponent(props) {

    const [showdiv,setshow] = useState(null);
    const [showButton,SetButton] = useState(null);
    const [showinput,setInput] = useState(null);
    function Delete()
    {
        try {
            
      
        const url='http://localhost/becode-database-api/PHP/delete.php';
            return fetch(url + '?title=' + props.note, {
              method: 'delete'
            }).then(response =>
              response.json().then(json => {
                return json;
              })
            );
        } 
          catch (error) {
            
        }
    }
 
    function Edit(event)
    {
        event.preventDefault();
        setshow(showResults=>!showResults);
      
    
       
    }

function update()
{


      var data = new URLSearchParams()
      data.append('newtitle', showinput.typed);
      var url='http://localhost/becode-database-api/PHP/update.php?title='+props.note;

      axios.post(url, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      window.location.reload();
      

}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function checkinput(event) {
    setInput({typed: event.target.value});

  }

   const inputStyle={
    display: showdiv ? "flex" :"none",
    flexDirection:"column",
    textAlign:'center',
    margin:'15px auto 15px auto',
    

}
const buttonStyle={
  display: showButton ? "inline" :"none",


}
const listiemstyle = {
  display:"flex",
  justifyContent:"center"
}
function showbuttons(){

  SetButton( showResults => !showResults );
}
    return (
        <div style={listiemstyle}>
        
            <form >
            <p onClick={showbuttons} >{props.note} </p>
            <Button style={buttonStyle} variant="primary"
            type='submit' onClick={Delete}>
     Delete </Button>    <Button style={buttonStyle}variant="primary"
            type='submit' onClick={Edit}>
     Edit </Button>
           <div style={inputStyle}>
             <label>Edit Your title</label>
           <input type='text' name='newtitle' onChange={checkinput}/>
           {/* <input type='submit'onClick={update}></input> */}
           <Button variant="primary" onClick={handleShow}>
       Edit it
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You sure bra!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
          <Button variant="primary"
            type='submit' onClick={update}>
     Save changes </Button>
        </Modal.Footer>
      </Modal>
           </div>
           </form>
       
        </div>
    )
}
