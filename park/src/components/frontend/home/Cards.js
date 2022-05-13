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
              text='Here owner will book slot free of cost'
              label='Owner booking '
              path='/Ownerbooking'
            />
             <CardItem
              src='../../images/Guest.jpg'
              text='Enetr Details before booking of slot'
              label='Guest'
              path='/Bk'
            />
           
          </ul>
          <ul className='cards__items'>
            
             <CardItem
              src='../../images/book.gif'
              text='Book Here Now!'
              label='Booking'
              path='/Booking'
            />

            <CardItem
              src='../../images/about.gif'
              // text=
              label='About Us'
              path='/about'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
