import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const TwoPopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">2</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='2nd Ramadan'
            date={Time[1].date} 
            day={Time[1].day}
            dhakaSehriHour={Time[1].sehriHour} 
            dhakaIftarHour={Time[1].iftarHour} 
            dhakaSehriMinuts={Time[1].sehriMinutes} 
            dhakaIftarMinuts={Time[1].iftarMinutes} 
            barishalSehriMinuts={Time[1].sehriMinutes + 1} 
            barishalIftarMinuts={Time[1].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[1].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[1].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[1].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[1].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[1].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[1].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[1].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[1].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[1].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[1].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[1].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[1].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default TwoPopup