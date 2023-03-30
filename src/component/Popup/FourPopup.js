import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const FourPopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">4</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='4th Ramadan'
            date={Time[3].date} 
            day={Time[3].day}
            dhakaSehriHour={Time[3].sehriHour} 
            dhakaIftarHour={Time[3].iftarHour} 
            dhakaSehriMinuts={Time[3].sehriMinutes} 
            dhakaIftarMinuts={Time[3].iftarMinutes} 
            barishalSehriMinuts={Time[3].sehriMinutes + 1} 
            barishalIftarMinuts={Time[3].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[3].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[3].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[3].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[3].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[3].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[3].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[3].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[3].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[3].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[3].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[3].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[3].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default FourPopup