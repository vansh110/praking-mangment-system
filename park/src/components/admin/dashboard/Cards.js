import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../../images/owner.webp'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Owner'
              path='/admin/view-owner'
            />
             <CardItem
              src='../../images/Guest.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Guest'
              path='/admin/view-guest'
            />
           
          </ul>
          <ul className='cards__items'>
            
             <CardItem
              src='../../images/vehicle.gif'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Vehicles'
              path='/admin/view-vehicle'
            />

            <CardItem
              src='../../images/slot.gif'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Slots'
              path='/admin/view-slot'
            />

            {/* <CardItem
              src='../../images/about.gif'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='About'
              path='/admin/about'
            /> */}
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
