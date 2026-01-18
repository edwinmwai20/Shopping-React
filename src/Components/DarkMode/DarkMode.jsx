import React from 'react'

function DarkMode({dark, setDark}) {

    function DarkModeToggle(){
        setDark(prev => !prev)

        document.body.style.background= dark ? "white":"#121212"
        document.body.style.color = dark ? "#121212" : "white";


    }
    return (
        <>
        <div> 

        <button className='btn' onClick={DarkModeToggle} >Color Mode{dark ? "Light Mode" : "Dark Mode"}</button>
        
        </div>
        </>
    )
}

export default DarkMode