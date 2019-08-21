import React,{useState} from 'react';
import { Button,Modal } from 'react-bootstrap';
import axios from 'axios'

export default function ListItemNoteComponent(props) {

    const [showdiv,setshow] = useState(null);
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
    const inputStyle={
        display: showdiv ? "flex" :"none"
    }
    function Edit(event)
    {
        event.preventDefault();
        setshow({ showResults: true });
      
    
       
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

      

}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function checkinput(event) {
    setInput({typed: event.target.value});

  }

    return (
        <div>
           <p>{props.note} </p>
            <form>
           <input type="submit" value="Delete Da Shizzle" onClick={Delete}/>
           <input type="submit" value="Edit Da Shizzle" onClick={Edit}/>
           <div style={inputStyle}>
           <input type='text' name='newtitle' onChange={checkinput}/>
           {/* <input type='submit'onClick={update}></input> */}
           <Button variant="primary" onClick={handleShow}>
        Launch demo modal
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
          <form>
          <input variant="primary"
            value="save changes"type='submit' onClick={update}/>
            </form>
        </Modal.Footer>
      </Modal>
           </div>
           </form>
       
        </div>
    )
}
