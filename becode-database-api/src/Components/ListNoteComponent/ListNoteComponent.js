import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ListItemNoteComponent from './ListItemNoteComponent/ListItemNoteComponent.js'
export default function ListNoteComponent() {

    const [showNote,SetNote]=useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost/becode-database-api/PHP/ListNote.php',
          );
    
          SetNote(result.data);
console.log(result)
   
        };
        fetchData();
      },[]);

 
      const uuidv1 = require('uuid/v1');
      const listitem =showNote.map((note)=>(<ListItemNoteComponent key={uuidv1()} note={note}/>));
    return (
        <div>
          <h2>List of Notes</h2>
      {listitem}
        </div>
    )
}
