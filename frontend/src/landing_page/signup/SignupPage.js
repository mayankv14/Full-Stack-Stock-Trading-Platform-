import React from 'react';
import SignupHero from './SignupHero';
import LeftSection from '../signup/LeftSection';
import RightSection from './RightSection';
import OpenAccount from '../OpenAccount';

function Signup() {
    return ( 
        <>
        <SignupHero />
        <div className='container'>
            <div className='row'>
                <LeftSection />
                <RightSection />
            </div>
        </div>
       
        <OpenAccount />
        </>
     );
}

export default Signup;