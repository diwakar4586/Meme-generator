import {React } from 'react';

import Random from './components/Random';
import Tag from './components/Tag';

function App() {

  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>


      <h1 className='bg-white  w-11/12 px-10 py-2 text-center  mt-[40px]  text-3xl rounded-lg mx-auto font-bold '>RANDOM GIFS
      </h1>
      
      <div className='w-full items-center flex flex-col mt-[30px] '>
        <Random />
        <Tag />
      </div>

    </div>




  );
}

export default App;
