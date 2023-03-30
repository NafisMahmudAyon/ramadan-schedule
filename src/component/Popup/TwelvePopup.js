import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const TwelvePopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">12</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='12th Ramadan'
            date={Time[11].date} 
            day={Time[11].day}
            dhakaSehriHour={Time[11].sehriHour} 
            dhakaIftarHour={Time[11].iftarHour} 
            dhakaSehriMinuts={Time[11].sehriMinutes} 
            dhakaIftarMinuts={Time[11].iftarMinutes} 
            barishalSehriMinuts={Time[11].sehriMinutes + 1} 
            barishalIftarMinuts={Time[11].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[11].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[11].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[11].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[11].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[11].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[11].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[11].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[11].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[11].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[11].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[11].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[11].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default TwelvePopup