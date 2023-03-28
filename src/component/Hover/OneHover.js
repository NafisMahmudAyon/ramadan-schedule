import React, { useState } from "react";
import "./style.css";

const OneHover = (props) => {
    const data = props.data
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="container">
        <div
            className="hover-element"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-white font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">1</p>
                                </div>
        </div>
        {isHovering && <div className="hover-component">{data}</div>}
        </div>
    );
}

export default OneHover