import React, { useState } from "react";

import Popup from "../Pop";
import Time from '../Time/Tiime'

const OneHover = () => {

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
            <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">1</p>
        </div>
        
        {showPopup && <Popup 
            onClose={closePopup}

            id='1st Ramadan'
            date={Time[0].date} 
            day={Time[0].day}
            dhakaSehriHour={Time[0].sehriHour} 
            dhakaIftarHour={Time[0].iftarHour} 
            dhakaSehriMinuts={Time[0].sehriMinutes} 
            dhakaIftarMinuts={Time[0].iftarMinutes} 
            barishalSehriMinuts={Time[0].sehriMinutes + 1} 
            barishalIftarMinuts={Time[0].iftarMinutes - 1} 
            chittagongSehriMinuts={Time[0].sehriMinutes - 4} 
            chittagongIftarMinuts={Time[0].iftarMinutes - 7} 
            khulnaSehriMinuts={Time[0].sehriMinutes + 4} 
            khulnaIftarMinuts={Time[0].iftarMinutes + 3} 
            mymensinghSehriMinuts={Time[0].sehriMinutes - 2} 
            mymensinghIftarMinuts={Time[0].iftarMinutes + 0} 
            rajshahiSehriMinuts={Time[0].sehriMinutes + 6} 
            rajshahiIftarMinuts={Time[0].iftarMinutes + 7} 
            rangpurSehriMinuts={Time[0].sehriMinutes + 3} 
            rangpurIftarMinuts={Time[0].iftarMinutes + 5} 
            sylhetSehriMinuts={Time[0].sehriMinutes - 8} 
            sylhetIftarMinuts={Time[0].iftarMinutes - 5}
        
        />}
    </div>
    );
}

export default OneHover