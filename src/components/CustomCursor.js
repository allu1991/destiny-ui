import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {

    // Define DOM element reference
    const cursor = useRef();

    useEffect(() => {

        // Disable default mouse cursor
        document.body.addEventListener("mouseover", (e) => {
            e.target.style.cursor = "none";
        })

        // Enable custom mouse cursor. Add on mouse move event
        document.addEventListener("mousemove", (e) => {
            // cursor.current.style.left = e.pageX + "px";
            // cursor.current.style.top = e.pageY + "px";

            cursor.current.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
        })

    }, [])

    return (
        <div id="cursor" ref={cursor}>
            <div id="circle"></div>
        </div> 
    )
}

export default CustomCursor