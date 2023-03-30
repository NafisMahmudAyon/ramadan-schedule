import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const TenPopup = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">10</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='10th Ramadan'
            date={Time[9].date} 
            day={Time[9].day}
            dhakaSehriHour={Time[9].sehriHour} 
            dhakaIftarHour={Time[9].iftarHour} 
            dhakaSehriMinuts={Time[9].sehriMinutes} 
            dhakaIftarMinuts={Time[9].iftarMinutes} 
            barishalSehriMinuts={Time[9].sehriMinutes + 1} 
            barishalIftarMinuts={Time[9].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[9].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[9].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[9].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[9].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[9].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[9].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[9].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[9].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[9].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[9].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[9].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[9].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default TenPopup