import React,{useState} from 'react'
import axios from 'axios'
import { Button,Modal } from 'react-bootstrap';
export default function InsertComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showinputTitle,setinputTitle] = useState("");
    const [showinputNote,setinputNote] = useState("");
    function checkinputTitle(event) {
        setinputTitle({Title: event.target.value});
      }
      function checkinputNote(event) {
        setinputNote({Note: event.target.value});
      }
   
    function Insert()
    {
        SendInsert(showinputTitle.Title,showinputNote.Note)

}
function SendInsert(inputTitle,inputNote){
    var data = new URLSearchParams()
    data.append('title', inputTitle);
  data.append('note', inputNote);
  var url='http://localhost/becode-database-api/PHP/insert.php';

  axios.post(url, data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);    
})
window.location.reload();
}

    return (
        <div>
                   <Button variant="primary" onClick={handleShow}>
        Insert Your shizzle
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Insert?</Modal.Title>
        </Modal.Header>
        <Modal.Body>fill it in now kut!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <form>
                <input type='text' onChange={checkinputTitle}/>
                <input type='text' onChange={checkinputNote}/>
              
            </form>
            <Button variant="primary" type='submit' onClick={Insert}>
            Insert da shizzle
          </Button>
            
        </Modal.Footer>
      </Modal>
       
        </div>
    )
}
