
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
              text='NEW DORMS'
              label='CAUTHEN'
              path='/houses'
            />
            <CardItem
              src='images/image2.png'
              text='OLD'
              label='BONNY CASTLE'
              path='/houses'
            />
            <CardItem
              src='images/image3.avif'
              text='NEWER DORMER'
              label='KELLOG'
              path='/houses'
            />
            <CardItem
              src='images/image4.jpg'
              text='OLDER DORMER'
              label='HANCOCK'
              path='/houses'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
