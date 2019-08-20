import React,{useState} from 'react';

export default function ListItemNoteComponent(props) {

    const [showdiv,setshow] = useState(null);
    const [shownoti,setnoti] = useState(null);
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
    const areusureStyle={
        display: shownoti ? "flex" :"none"
    }
    function AreYouSure(event){
        event.preventDefault();
        setnoti({ showResults: true });
      
       }
function update()
{
    try {
     

        const url='http://localhost/becode-database-api/PHP/update.php';
            return fetch(url + '?title=' + props.note, {
              method: 'update'
            }).then(response =>
              response.json().then(json => {
                return json;
              })
            );
        } 
          catch (error) {
            
        }
}

    return (
        <div>
           <p>{props.note} </p>
            <form action='http://localhost/becode-database-api/PHP/update.php' method="POST">
           <input type="submit" value="Delete Da Shizzle" onClick={Delete}/>
           <input type="submit" value="Edit Da Shizzle" onClick={Edit}/>
           <div style={inputStyle}>
           <input type='text' name='newtitle'/>
           <input type='submit' onClick={AreYouSure}/>
           <div style={areusureStyle}>
               <h1>Yo you sure bra</h1>
               <input type='submit' onClick={update} />
           </div>
           </div>
           </form>

        </div>
    )
}
