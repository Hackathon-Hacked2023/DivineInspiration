import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>The Lore Behind ToneTeller</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Accessible on desktop and mobile, anywhere'
              label='Accesibility'
              path='/'
            />
            <CardItem
              text='Straight forward to learn, easy to use'
              label='Simple'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              text='Text analysis applicable in both professional and casual settings'
              label='Helpful'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;