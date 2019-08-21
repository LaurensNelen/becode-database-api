import React,{useState} from 'react'

export default function InsertComponent() {
    const [showinput,setInput] = useState(null);
    function checkinput(event) {
        setInput({yeet: event.target.value});
      }
    
    return (
        <div>
            <form>
                <input onChange={checkinput}/>
                <input type='submit'></input>
            </form>
        </div>
    )
}
