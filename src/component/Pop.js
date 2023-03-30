function Popup( props) {
    const id = props.id
    const date = props.date
    const day = props.day
    const dhakaSehriHour = props.dhakaSehriHour
    const dhakaIftarHour = props.dhakaIftarHour
    const dhakaSehriMinuts = props.dhakaSehriMinuts
    const dhakaIftarMinuts = props.dhakaIftarMinuts
    const barishalSehriMinuts = props.barishalSehriMinuts
    const barishalIftarMinuts = props.barishalIftarMinuts
    const chittagongSehriMinuts = props.chittagongSehriMinuts
    const chittagongIftarMinuts = props.chittagongIftarMinuts
    const khulnaSehriMinuts = props.khulnaSehriMinuts
    const khulnaIftarMinuts = props.khulnaIftarMinuts
    const mymensinghSehriMinuts = props.mymensinghSehriMinuts
    const mymensinghIftarMinuts = props.mymensinghIftarMinuts
    const rajshahiSehriMinuts = props.rajshahiSehriMinuts
    const rajshahiIftarMinuts = props.rajshahiIftarMinuts
    const rangpurSehriMinuts = props.rangpurSehriMinuts
    const rangpurIftarMinuts = props.rangpurIftarMinuts
    const sylhetSehriMinuts = props.sylhetSehriMinuts
    const sylhetIftarMinuts = props.sylhetIftarMinuts
    const close = props.onClose





    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div className="inline-block align-bottom bg-stone-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-emerald-300 text-center">
                  Ramadan 1444
                </h3>
                <h2 className="text-md mt-2 leading-6 font-medium text-emerald-300">Date: {date} - {day}</h2>
                    
                
                <div className="mt-2">
                  <p className="text-lg leading-5 text-emerald-500 text-center font-bold">
                    {id}
                  </p>
                  <table className=" w-full border-[2px] text-sm mt-4 border-emerald-700 table rounded-[10px]">
                    <thead className="border-b-[1px] border-stone-700">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left tracking-wider text-emerald-500">Devision</th>
                            <th scope="col" className="px-3 py-3 text-left tracking-wider text-emerald-500">Sehri Time</th>
                            <th scope="col" className="px-3 py-3 text-left tracking-wider text-emerald-500">Iftar Time</th>
                        </tr>
                        
                    </thead>
                    <tbody className=" text-emerald-300">
                        <tr>
                            
                            <td className="px-3 py-3">Dhaka</td>
                            <td className="px-3 py-3">{dhakaSehriHour} : {dhakaSehriMinuts} AM</td>
                            <td className="px-3 py-3">{dhakaIftarHour} : {dhakaIftarMinuts} PM</td>
                        </tr>
                        <tr>
                            
                            <td className="px-3 py-3">Barishal</td>
                            <td className="px-3 py-3">{dhakaSehriHour} : {barishalSehriMinuts} AM</td>
                            <td className="px-3 py-3">{dhakaIftarHour} : {barishalIftarMinuts} PM</td>
                        </tr>
                        <tr>
                            
                            <td className="px-3 py-3">Chittagong</td>
                            <td className="px-3 py-3">{dhakaSehriHour} : {chittagongSehriMinuts} AM</td>
                            <td className="px-3 py-3">{dhakaIftarHour} : {chittagongIftarMinuts} PM</td>
                        </tr>
                        <tr>
                            
                            <td className="px-3 py-3">Khulna</td>
                            <td className="px-3 py-3">{dhakaSehriHour} : {khulnaSehriMinuts} AM</td>
                            <td className="px-3 py-3">{dhakaIftarHour} : {khulnaIftarMinuts} PM</td>
                        </tr>
                        <tr>
                            
                            <td className="px-3 py-3">Mymensingh</td>
                            <td className="px-3 py-3">{dhakaSehriHour} : {mymensinghSehriMinuts} AM</td>
                            <td className="px-3 py-3">{dhakaIftarHour} : {mymensinghIftarMinuts} PM</td>
                        </tr>
                        <tr>
                            
                            <td className="px-3 py-3">Rajshahi</td>
                            <td className="px-3 py-3">{dhakaSehriHour} : {rajshahiSehriMinuts} AM</td>
                            <td className="px-3 py-3">{dhakaIftarHour} : {rajshahiIftarMinuts} PM</td>
                        </tr>
                        <tr>
                            
                            <td className="px-3 py-3">Rangpur</td>
                            <td className="px-3 py-3">{dhakaSehriHour} : {rangpurSehriMinuts} AM</td>
                            <td className="px-3 py-3">{dhakaIftarHour} : {rangpurIftarMinuts} PM</td>
                        </tr>
                        <tr>
                            
                            <td className="px-3 py-3">Sylhet</td>
                            <td className="px-3 py-3">{dhakaSehriHour} : {sylhetSehriMinuts} AM</td>
                            <td className="px-3 py-3">{dhakaIftarHour} : {sylhetIftarMinuts} PM</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-emerald-300 text-base leading-6 font-medium text-stone-900 shadow-sm hover:bg-emerald-500 focus:outline-none focus:border-emerald-500 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={close}>
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Popup;