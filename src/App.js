import React, { useState } from 'react';

import BG1 from './assets/bg-3.png'
import BG2 from './assets/bg-2.png'

import Bagerhat from './component/Bagerhat/Bagerhat'
import Dhaka from './component/Dhaka/Dhaka'

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
      case 'Barisal':
        return <Component3 />;
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
      case 'Chittagong':
        return <Component3 />;
      // case 'Chuadanga':
      //   return <Component3 />;
      // case 'Comilla':
      //   return <Component3 />;
      // case "Cox's Bazar":
      //   return <Component3 />;
      case 'Dhaka':
        return <Dhaka />;
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
        return <Component3 />;
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
        return <Component3 />;
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
        return <Component3 />;
      // case 'Rangamati':
      //   return <Component3 />;
      case 'Rangpur':
        return <Component3 />;
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
        return <Component3 />;
      // case 'Tangail':
      //   return <Component3 />;
      // case 'Thakurgaon':
      //   return <Component3 />;
      default:
        return <Component1 />;
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
        <div className='schedule'>
        <label htmlFor="options">Select an option:</label>
        <select id="options" value={selectedOption} onChange={handleChange}>
          <option value="Bagerhat">Bagerhat</option>
          <option value="Bandarban">Bandarban</option>
          <option value="Barguna">Barguna</option>
          <option value="Barisal">Barisal</option>
          <option value="Bhola">Bhola</option>
          <option value="Bogra">Bogra</option>
          <option value="Brahmanbaria">Brahmanbaria</option>
          <option value="Chandpur">Chandpur</option>
          <option value="Chapainawabganj">Chapainawabganj</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Chuadanga">Chuadanga</option>
          <option value="Comilla">Comilla</option>
          <option value="Cox's Bazar">Cox's Bazar</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Dinajpur">Dinajpur</option>
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
          <option value="Khagrachari">Khagrachari</option>
          <option value="Khulna">Khulna</option>
          <option value="Kishoreganj">Kishoreganj</option>
          <option value="Kurigram">Kurigram</option>
          <option value="Kushtia">Kushtia</option>
          <option value="Lakshmipur">Lakshmipur</option>
          <option value="Lalmonirhat">Lalmonirhat</option>
          <option value="Madaripur">Madaripur</option>
          <option value="Magura">Magura</option>
          <option value="Manikganj">Manikganj</option>
          <option value="Meherpur">Meherpur</option>
          <option value="Moulvibazar">Moulvibazar</option>
          <option value="Munshiganj">Munshiganj</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Naogaon">Naogaon</option>
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
          <option value="Rajbari">Rajbari</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Rangamati">Rangamati</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Satkhira">Satkhira</option>
          <option value="Shariatpur">Shariatpur</option>
          <option value="Sherpur">Sherpur</option>
          <option value="Sirajganj">Sirajganj</option>
          <option value="Sunamganj">Sunamganj</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Tangail">Tangail</option>
          <option value="Thakurgaon">Thakurgaon</option>
        </select>
        {renderComponent()}
      </div>
    </div>
      
    </>
    
  );
};

const Component1 = () => {
  return <h1>Bagerhat</h1>;
};

const Component2 = () => {
  return <h1>Bandarban</h1>;
};

const Component3 = () => {
  return <h1>Component 3</h1>;
};

export default App;
