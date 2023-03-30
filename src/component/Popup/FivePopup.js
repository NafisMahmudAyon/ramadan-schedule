import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const FivePopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">5</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='5th Ramadan'
            date={Time[4].date} 
            day={Time[4].day}
            dhakaSehriHour={Time[4].sehriHour} 
            dhakaIftarHour={Time[4].iftarHour} 
            dhakaSehriMinuts={Time[4].sehriMinutes} 
            dhakaIftarMinuts={Time[4].iftarMinutes} 
            barishalSehriMinuts={Time[4].sehriMinutes + 1} 
            barishalIftarMinuts={Time[4].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[4].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[4].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[4].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[4].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[4].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[4].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[4].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[4].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[4].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[4].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[4].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[4].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default FivePopup