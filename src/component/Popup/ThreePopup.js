import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const ThreePopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">3</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='3rd Ramadan'
            date={Time[2].date} 
            day={Time[2].day}
            dhakaSehriHour={Time[2].sehriHour} 
            dhakaIftarHour={Time[2].iftarHour} 
            dhakaSehriMinuts={Time[2].sehriMinutes} 
            dhakaIftarMinuts={Time[2].iftarMinutes} 
            barishalSehriMinuts={Time[2].sehriMinutes + 1} 
            barishalIftarMinuts={Time[2].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[2].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[2].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[2].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[2].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[2].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[2].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[2].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[2].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[2].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[2].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[2].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[2].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default ThreePopup