import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const SevenPopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">7</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='7th Ramadan'
            date={Time[6].date} 
            day={Time[6].day}
            dhakaSehriHour={Time[6].sehriHour} 
            dhakaIftarHour={Time[6].iftarHour} 
            dhakaSehriMinuts={Time[6].sehriMinutes} 
            dhakaIftarMinuts={Time[6].iftarMinutes} 
            barishalSehriMinuts={Time[6].sehriMinutes + 1} 
            barishalIftarMinuts={Time[6].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[6].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[6].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[6].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[6].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[6].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[6].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[6].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[6].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[6].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[6].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[6].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[6].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default SevenPopup