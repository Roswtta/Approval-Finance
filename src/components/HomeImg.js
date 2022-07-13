import React from 'react';
import './HomeImg.css'
import { Button } from '@mui/material';

const HomeImg = () => {
    return (
        <div className='home__img'>
                <img src='https://approvalfinance.com.au/wp-content/uploads/2020/07/iss-22122-04569.jpg' className='home__img--img'/>
            <div className='home__imgDesc'>
                    <h1 className='home__imgDescTitle'>
                        Looking To Secure A Home Loan Or Commercial Property Loan?
                    </h1>
                    <br />
                    <h4 className='home__imgDescDesc'>
                        <span className='emphasise'>Approval Finance</span> are here to help
                    </h4>
                    <h2 className='home__imgDescDescDesc'> 
                        It's all in the name
                    </h2>
                </div>
                <Button className='home__img--btn'>
                    Contact Us
                </Button>
            </div>
    );
}

export default HomeImg;
