import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const ElevenPopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">11</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='11th Ramadan'
            date={Time[10].date} 
            day={Time[10].day}
            dhakaSehriHour={Time[10].sehriHour} 
            dhakaIftarHour={Time[10].iftarHour} 
            dhakaSehriMinuts={Time[10].sehriMinutes} 
            dhakaIftarMinuts={Time[10].iftarMinutes} 
            barishalSehriMinuts={Time[10].sehriMinutes + 1} 
            barishalIftarMinuts={Time[10].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[10].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[10].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[10].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[10].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[10].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[10].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[10].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[10].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[10].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[10].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[10].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[10].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default ElevenPopup