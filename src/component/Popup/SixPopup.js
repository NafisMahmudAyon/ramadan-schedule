import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const SixPopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">6</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='6th Ramadan'
            date={Time[5].date} 
            day={Time[5].day}
            dhakaSehriHour={Time[5].sehriHour} 
            dhakaIftarHour={Time[5].iftarHour} 
            dhakaSehriMinuts={Time[5].sehriMinutes} 
            dhakaIftarMinuts={Time[5].iftarMinutes} 
            barishalSehriMinuts={Time[5].sehriMinutes + 1} 
            barishalIftarMinuts={Time[5].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[5].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[5].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[5].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[5].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[5].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[5].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[5].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[5].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[5].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[5].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[5].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[5].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default SixPopup