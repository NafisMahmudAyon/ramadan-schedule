import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const NinePopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">9</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='9th Ramadan'
            date={Time[8].date} 
            day={Time[8].day}
            dhakaSehriHour={Time[8].sehriHour} 
            dhakaIftarHour={Time[8].iftarHour} 
            dhakaSehriMinuts={Time[8].sehriMinutes} 
            dhakaIftarMinuts={Time[8].iftarMinutes} 
            barishalSehriMinuts={Time[8].sehriMinutes + 1} 
            barishalIftarMinuts={Time[8].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[8].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[8].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[8].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[8].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[8].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[8].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[8].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[8].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[8].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[8].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[8].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[8].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default NinePopup