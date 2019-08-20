import React from 'react'

export default function TitleComponent() {
    const TitleStyle={
        color: "white",
        backgroundColor:"blue",
        display:"flex",
        justifyContent:"center",
        margin:"auto",
        marginTop:"50px",
        alignItems:"center",
        width:"250px",
        height:"60px"
    };
    return (
        <div>
            <h1 style={TitleStyle}>NotePad 2000</h1>
        </div>
    )
}
