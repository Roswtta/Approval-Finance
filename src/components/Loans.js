import React from 'react';
import './Loans.css'
import { Button } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Modal from './Modal';

const Loans = () => {

    let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
        isModalOpen = true;
        document.body.classList += " modal--open";
}

    return (
        <div className='loans'>
            <div className='loanss'>
            <div className='loan__box'>
                <div className='loan__box--icon'>
                    <HouseIcon />
                </div>
                <div className='loan__box--desc'>
                    <div className='loan__box--desc-title'>
                    Residential Home Loans
                    </div>
                    <div className='loan__box--desc-body'>
                    If you are buying your first home, refinancing or investing, Approval Finance is here to help you with expert advice throughout the whole process.
                    </div>
                </div>
            </div>
            <div className='loan__box loan__box2'>
                <div className='loan__box--icon'>
                    <WarehouseIcon />
                </div>
                <div className='loan__box--desc'>
                    <div className='loan__box--desc-title'>
                    Commercial Mortgage Loans
                    </div>
                    <div className='loan__box--desc-body'>
                    Whether you are looking to purchase a commercial property as an investor or you are buying a commercial property for your business premises, Approval Finance is here to assist you through the whole process.
                    </div>
                </div>
            </div>
            </div>
            <div className='loan__box--buttons'>
                <Button className='loan__box--button' onClick={toggleModal}>
                    Read More
                </Button>
                <Button className='loan__box--button b' onClick={toggleModal}>
                    Read More
                </Button>
            </div>
            <Modal />
        </div>
    );
}

export default Loans;
