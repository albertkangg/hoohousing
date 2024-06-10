
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className="text-[32px] font-bold">Check out these COOL properties!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.webp'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='CAUTHEN'
              path='/houses'
            />
            <CardItem
              src='images/image2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='BONNY CASTLE'
              path='/houses'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image3.avif'
              label='KELLOG'
              path='/houses'
            />
            <CardItem
              src='images/image4.jpg'
              label='HANCOCK'
              path='/houses'
            />
            <CardItem
              src='images/image5.jpg'
              label='GOOCH'
              path='/houses'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
