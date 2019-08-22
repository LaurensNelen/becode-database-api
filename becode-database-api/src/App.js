import React from 'react';
import TitleComponent from './Components/TitleComponent/TitleComponent.js';
import SearchNoteComponent from './Components/SearchNoteComponent/SearchNoteComponent.js';
import ListNoteComponent from './Components/ListNoteComponent/ListNoteComponent.js';
import InsertComponent from './Components/InsertComponent/InsertComponent.js';
import './app.css'

function App() {
  
    return ( 
    <div>
  
<TitleComponent/>
<InsertComponent/>
<SearchNoteComponent/>
<ListNoteComponent/>

    </div>
    );
}

export default App;