import React, { useState } from 'react';
import axios from 'axios';
export default function NoteComponent() {
  
  const [showdiv,setshow] = useState(null);
  const [showNote,SetNote]=useState([]);
  const [showInput,setInput]=useState();
  
    const NoteFormStyle={
        display:"flex",
        width:"50%",
        margin:"auto",
        marginTop:'50px',
        justifyContent:"center",
    
    };
  
    const InputStyle={
        marginRight:"10px"
    }
    function Click(e) {
        e.preventDefault();
        setshow({ showResults: true });
        fetchData(showInput.typed);
      }
    
      var DivNoteStyle={
        display: showdiv ? "flex" :"none",
        width:"50%",
        margin:"auto",
        marginTop:'50px',
        justifyContent:"center",
        flexDirection:"column",
        textAlign:'center'
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
            <form style={NoteFormStyle}>
                <label></label>
                <input 
                style={InputStyle}
                type="text"
                name="Title"
                placeholder="Search note"
                onChange={checkinput}
            
                />
                <input
                type="submit"
                name="button"
                onClick={Click}
                />
            </form>
            <div style={DivNoteStyle}>
                <h1>{showNote.Title}</h1>
                <p>{showNote.Notes}</p>

            </div>
        </div>
    )
}
