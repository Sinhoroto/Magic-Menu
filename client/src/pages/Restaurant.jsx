import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom';


const Restaurant = () => {
  const restaurants = [
    {
      id: 1, 
      title:'menu One',
      body:"This is menu one",
      img: Logo
    },
    {
      id :2 ,
      title :"menu two",
      body :"this is the second menu",
      img: Logo
    },
    {
      id :3 ,
      title :"menu two",
      body :"this is the second menu",
      img: Logo
    },
    {
      id :4 ,
      title :"menu two",
      body :"this is the second menu",
      img: Logo
    },
    {
      id :5 ,
      title :"menu two",
      body :"this is the second menu",
      img: Logo
    }
  ];
  return (
    <div className='restaurant'>
      <div className='restaurants'>
        {restaurants.map(restaurants=>(
          <div className='menu' key={restaurants.id}>
            <div className='img'>
              <img src={restaurants.img} alt="" />
            </div>
            <div className='content'>
              <Link className='link' to={`/Restaurant/${restaurants.id}`}>
                <h1>{restaurants.title}</h1>
                <p>{restaurants.body}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restaurant