import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
export default function SearchNoteComponent() {
  
  const [showdiv,setshow] = useState(null);
  const [showNote,SetNote]=useState([]);
  const [showInput,setInput]=useState();
  

    function Click(e) {
        e.preventDefault();
        setshow({ showResults: true });
        fetchData(showInput.typed);
      }
    
      var DivNoteStyle={
        display: showdiv ? "flex" :"none",
  
    }
 
    async function fetchData(search) {
      const result = await axios(
        `http://localhost:80/becode-database-api/PHP/GetNote.php?title=${search}`,
      );
       SetNote(result.data.Note)

      };

 function checkinput(event) {
    setInput({typed: event.target.value});

  }
    return (
        <div>
          <h2>Search note</h2>
            <form>
                <input 
                type="text"
                name="Title"
                placeholder="Search note"
                onChange={checkinput}
            
                />
                  <Button 
                  variant="primary"
                  type='submit' onClick={Click}>
                    Search Title
                  </Button>
            </form>
            <div style={DivNoteStyle}>
                <h1>{showNote.Title}</h1>
                <p>{showNote.Notes}</p>

            </div>
        </div>
    )
}
