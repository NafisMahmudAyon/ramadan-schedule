import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const EightPopup = () => {

    const [showPopup, setShowPopup] = useState(false);

    function togglePopup() {
    setShowPopup(!showPopup);
    }

    function closePopup() {
    setShowPopup(false);
    }

    return (
    <div className="App">
        <div onClick={togglePopup} class="px-2 py-2 cursor-pointer flex w-full justify-center">
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">8</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='8th Ramadan'
            date={Time[7].date} 
            day={Time[7].day}
            dhakaSehriHour={Time[7].sehriHour} 
            dhakaIftarHour={Time[7].iftarHour} 
            dhakaSehriMinuts={Time[7].sehriMinutes} 
            dhakaIftarMinuts={Time[7].iftarMinutes} 
            barishalSehriMinuts={Time[7].sehriMinutes + 1} 
            barishalIftarMinuts={Time[7].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[7].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[7].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[7].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[7].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[7].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[7].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[7].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[7].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[7].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[7].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[7].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[7].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default EightPopup