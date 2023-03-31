import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

const style = {
  appContainer : `max-w-[728px] mx-auto text-center`,
  sectionContainer : `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  return (
     <div className={style.appContainer}>
       <section className={style.sectionContainer}>
         {/* NavBar */}
         <Navbar />
         {/* Chat Component */}
       </section>
     </div>
  );
}

export default App;
