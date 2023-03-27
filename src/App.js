import React, { useState } from 'react';

import BG1 from './assets/bg-3.png'
import BG2 from './assets/bg-2.png'

// import Bagerhat from './component/Bagerhat/Bagerhat'
import Dhaka from './component/Dhaka/Dhaka'
import Barisal from './component/Barisal/Barisal'
import Chittagong from './component/Chittagong/Chittagong'
import Khulna from './component/Khulna/Khulna'
import Mymensingh from './component/Mymensingh/Mymensingh'
import Rajshahi from './component/Rajshahi/Rajshahi'
import Rangpur from './component/Rangpur/Rangpur'
import Sylhet from './component/Sylhet/Sylhet'

const App = () => {
  const [selectedOption, setSelectedOption] = useState('Bagerhat');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      // case 'Bagerhat':
      //   return <Bagerhat />;
      // case 'Bandarban':
      //   return <Component2 />;
      // case 'Barguna':
      //   return <Component3 />;
      // case 'Barisal':
      //   return <Barisal />;
      // case 'Bhola':
      //   return <Component3 />;
      // case 'Bogra':
      //   return <Component3 />;
      // case 'Brahmanbaria':
      //   return <Component3 />;
      // case 'Chandpur':
      //   return <Component3 />;
      // case 'Chapainawabganj':
      //   return <Component3 />;
      // case 'Chittagong':
      //   return <Chittagong />;
      // case 'Chuadanga':
      //   return <Component3 />;
      // case 'Comilla':
      //   return <Component3 />;
      // case "Cox's Bazar":
      //   return <Component3 />;
      case 'Dhaka':
        return <Dhaka />;
      case 'Chittagong':
        return <Chittagong />;
      case 'Barisal':
        return <Barisal />;
      // case 'Dinajpur':
      //   return <Component3 />;
      // case 'Faridpur':
      //   return <Component3 />;
      // case 'Feni':
      //   return <Component3 />;
      // case 'Gaibandha':
      //   return <Component3 />;
      // case 'Gazipur':
      //   return <Component3 />;
      // case 'Gopalganj':
      //   return <Component3 />;
      // case 'Habiganj':
      //   return <Component3 />;
      // case 'Jamalpur':
      //   return <Component3 />;
      // case 'Jessore':
      //   return <Component3 />;
      // case 'Jhalakati':
      //   return <Component3 />;
      // case 'Jhenaidah':
      //   return <Component3 />;
      // case 'Joypurhat':
      //   return <Component3 />;
      // case 'Khagrachari':
      //   return <Component3 />;
      case 'Khulna':
        return <Khulna />;
      // case 'Kishoreganj':
      //   return <Component3 />;
      // case 'Kurigram':
      //   return <Component3 />;
      // case 'Kushtia':
      //   return <Component3 />;
      // case 'Lakshmipur':
      //   return <Component3 />;
      // case 'Lalmonirhat':
      //   return <Component3 />;
      // case 'Madaripur':
      //   return <Component3 />;
      // case 'Manikganj':
      //   return <Component3 />;
      // case 'Meherpur':
      //   return <Component3 />;
      // case 'Moulvibazar':
      //   return <Component3 />;
      // case 'Munshiganj':
      //   return <Component3 />;
      case 'Mymensingh':
        return <Mymensingh />;
      // case 'Naogaon':
      //   return <Component3 />;
      // case 'Narail':
      //   return <Component3 />;
      // case 'Narayanganj':
      //   return <Component3 />;
      // case 'Narsingdi':
      //   return <Component3 />;
      // case 'Natore':
      //   return <Component3 />;
      // case 'Nawabganj':
      //   return <Component3 />;
      // case 'Netrakona':
      //   return <Component3 />;
      // case 'Nilphamari':
      //   return <Component3 />;
      // case 'Noakhali':
      //   return <Component3 />;
      // case 'Pabna':
      //   return <Component3 />;
      // case 'Panchagarh':
      //   return <Component3 />;
      // case 'Patuakhali':
      //   return <Component3 />;
      // case 'Pirojpur':
      //   return <Component3 />;
      // case 'Rajbari':
      //   return <Component3 />;
      case 'Rajshahi':
        return <Rajshahi />;
      // case 'Rangamati':
      //   return <Component3 />;
      case 'Rangpur':
        return <Rangpur />;
      // case 'Satkhira':
      //   return <Component3 />;
      // case 'Shariatpur':
      //   return <Component3 />;
      // case 'Sherpur':
      //   return <Component3 />;
      // case 'Sirajganj':
      //   return <Component3 />;
      // case 'Sunamganj':
      //   return <Component3 />;
      case 'Sylhet':
        return <Sylhet />;
      // case 'Tangail':
      //   return <Component3 />;
      // case 'Thakurgaon':
      //   return <Component3 />;
      default:
        return <Dhaka />;
    }
  };

  return (
    <><div className='main'>
      <div className='bg1'>
        <img src={BG1} alt='a' />
      </div>
      <div className='bg2'>
        <img src={BG2} alt='a' />
      </div>
      <div className='heading font-bold text-5xl sm:text-3xl md:text-3xl text-center sm:pt-2 md:pt-10 lg:pt-10 top-0 left-[50%] text-emerald-300'>
        
        <h1 class=" inline-block head items-center text-5xl  font-extrabold">Ramadan Calender</h1><span class="inline-block text bg-emerald-300 text-stone-900 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">2023</span>

        </div>
      <div className='content grid'>
        <div className='schedule w-full px-5 mt-48 mb-10'>
        
          <select id="options" value={selectedOption} onChange={handleChange} class="block w-full px-4 py-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
            <option selected value="Dhaka">Dhaka</option>
            <option value="Barisal">Barisal</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Sylhet">Sylhet</option>
            
          </select>
          {/* <label htmlFor="options">Select an option:</label>
          <select id="options" value={selectedOption} onChange={handleChange}> */}
            {/* <option value="Bagerhat">Bagerhat</option>
            <option value="Bandarban">Bandarban</option>
            <option value="Barguna">Barguna</option> */}
            {/* <option value="Barisal">Barisal</option> */}
            {/* <option value="Bhola">Bhola</option>
            <option value="Bogra">Bogra</option>
            <option value="Brahmanbaria">Brahmanbaria</option>
            <option value="Chandpur">Chandpur</option>
            <option value="Chapainawabganj">Chapainawabganj</option> */}
            {/* <option value="Chittagong">Chittagong</option> */}
            {/* <option value="Chuadanga">Chuadanga</option>
            <option value="Comilla">Comilla</option>
            <option value="Cox's Bazar">Cox's Bazar</option> */}
            {/* <option selected value="Dhaka">Dhaka</option> */}
            {/* <option value="Dinajpur">Dinajpur</option>
            <option value="Faridpur">Faridpur</option>
            <option value="Feni">Feni</option>
            <option value="Gaibandha">Gaibandha</option>
            <option value="Gazipur">Gazipur</option>
            <option value="Gopalganj">Gopalganj</option>
            <option value="Habiganj">Habiganj</option>
            <option value="Jamalpur">Jamalpur</option>
            <option value="Jessore">Jessore</option>
            <option value="Jhalakati">Jhalakati</option>
            <option value="Jhenaidah">Jhenaidah</option>
            <option value="Joypurhat">Joypurhat</option>
            <option value="Khagrachari">Khagrachari</option> */}
            {/* <option value="Khulna">Khulna</option> */}
            {/* <option value="Kishoreganj">Kishoreganj</option>
            <option value="Kurigram">Kurigram</option>
            <option value="Kushtia">Kushtia</option>
            <option value="Lakshmipur">Lakshmipur</option>
            <option value="Lalmonirhat">Lalmonirhat</option>
            <option value="Madaripur">Madaripur</option>
            <option value="Magura">Magura</option>
            <option value="Manikganj">Manikganj</option>
            <option value="Meherpur">Meherpur</option>
            <option value="Moulvibazar">Moulvibazar</option>
            <option value="Munshiganj">Munshiganj</option> */}
            {/* <option value="Mymensingh">Mymensingh</option> */}
            {/* <option value="Naogaon">Naogaon</option>
            <option value="Narail">Narail</option>
            <option value="Narayanganj">Narayanganj</option>
            <option value="Narsingdi">Narsingdi</option>
            <option value="Natore">Natore</option>
            <option value="Nawabganj">Nawabganj</option>
            <option value="Netrakona">Netrakona</option>
            <option value="Nilphamari">Nilphamari</option>
            <option value="Noakhali">Noakhali</option>
            <option value="Pabna">Pabna</option>
            <option value="Panchagarh">Panchagarh</option>
            <option value="Patuakhali">Patuakhali</option>
            <option value="Pirojpur">Pirojpur</option>
            <option value="Rajbari">Rajbari</option> */}
            {/* <option value="Rajshahi">Rajshahi</option> */}
            {/* <option value="Rangamati">Rangamati</option> */}
            {/* <option value="Rangpur">Rangpur</option> */}
            {/* <option value="Satkhira">Satkhira</option>
            <option value="Shariatpur">Shariatpur</option>
            <option value="Sherpur">Sherpur</option>
            <option value="Sirajganj">Sirajganj</option>
            <option value="Sunamganj">Sunamganj</option> */}
            {/* <option value="Sylhet">Sylhet</option> */}
            {/* <option value="Tangail">Tangail</option>
            <option value="Thakurgaon">Thakurgaon</option> */}
          {/* </select> */}
          {renderComponent()}
        </div>
        <div className='w-[100%] grid items-center min-h-screen  z-30'>
            <div>
          <div className=' pr-[30px] pl-[30px]  left'>
            <h2 className='text-5xl text-emerald-300 pb-2'>রোজার নিয়ত</h2>
            <p className='text-3xl text-white pb-5'>نَوَيْتُ اَنْ اُصُوْمَ غَدًا مِّنْ شَهْرِ رَمْضَانَ الْمُبَارَكِ فَرْضَا لَكَ يَا اللهُ فَتَقَبَّل مِنِّى اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْم </p>
            <p className='text-lg text-emerald-300 pb-2'><span className='text-emerald-300 special'>উচ্চারণ: </span> নাওয়াইতু আন আছুম্মা গাদাম মিন শাহরি রমাজানাল মুবারাকি ফারদাল্লাকা, ইয়া আল্লাহু ফাতাকাব্বাল মিন্নি ইন্নিকা আনতাস সামিউল আলিম।</p>
            <p className='text-lg text-emerald-300'><span className='text-emerald-300 special'>বাংলা অনুবাদ: </span> হে আল্লাহ! আমি আগামীকাল পবিত্র রমজানের তোমার পক্ষ থেকে নির্ধারিত ফরজ রোজা রাখার ইচ্ছা পোষণ (নিয়্যত) করলাম। অতএব তুমি আমার পক্ষ থেকে (আমার রোযা তথা পানাহার থেকে বিরত থাকাকে) কবুল কর, নিশ্চয়ই তুমি সর্বশ্রোতা ও সর্বজ্ঞানী।</p>
          </div>
          <div className=' pr-[30px] pl-[30px]  right'>
            <h2 className='text-5xl text-emerald-300 pb-2'>ইফতারের দোয়া</h2>
            <p className='text-3xl text-white pb-5'> اَللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ وَ اَفْطَرْتُ بِرَحْمَتِكَ يَا اَرْحَمَ الرَّاحِيْمِيْن </p>
            <p className='text-lg text-emerald-300 pb-2'><span className='text-emerald-300 special'>উচ্চারণ: </span> আল্লাহুম্মা লাকা ছুমতু ওয়া আলা রিযক্বিকা ওয়া আফতারতু বিরাহমাতিকা ইয়া আরহামার রাহিমিন।</p>
            <p className='text-lg text-emerald-300'><span className='text-emerald-300 special'>বাংলা অনুবাদ: </span> হে আল্লাহ! আমি তোমারই সন্তুষ্টির জন্য রোজা রেখেছি এবং তোমারই দেয়া রিযিক্বের মাধ্যমে ইফতার করছি।</p>
          </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
    
  );
};

// const Component1 = () => {
//   return <h1>Bagerhat</h1>;
// };

// const Component2 = () => {
//   return <h1>Bandarban</h1>;
// };

// const Component3 = () => {
//   return <h1>Component 3</h1>;
// };

export default App;
