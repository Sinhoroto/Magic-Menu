import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom';


const Restaurant = () => {
  const restaurants = [
    {
      id: 1, 
      title:'Chicken parmesan',
      body:"R$ 37,90",
      img: "https://thumbs.dreamstime.com/b/chicken-parmigiana-served-top-spaghetti-marinara-sauce-chicken-parmigiana-served-top-spaghetti-marinara-140212728.jpg"
    },
    {
      id :2 ,
      title :"Burguer",
      body :"R$ 27,90",
      img: "https://thumbs.dreamstime.com/b/close-up-view-plate-royal-banks-burguer-dobble-royal-banks-burguer-191924655.jpg"
    },
    {
      id :3 ,
      title :"Gellato",
      body :"R$ 32,90",
      img: "https://thumbs.dreamstime.com/b/trendy-color-changing-ice-cream-blue-flowers-powder-butterfly-pea-flower-blossom-gelato-ice-cream-waffle-cones-butterfly-173332894.jpg"
    },
    {
      id :4 ,
      title :"Petit Gâteau",
      body :"R$ 37,90",
      img: "https://thumbs.dreamstime.com/b/petit-gateau-9810781.jpg"
    },
    {
      id :5 ,
      title :"Soda can",
      body :"R$ 9,90",
      img: "https://thumbs.dreamstime.com/b/coca-cola-fanta-sprite-cans-22068969.jpg"
    },
    {
      id :6 ,
      title :"Juice",
      body :"R$ 9,90",
      img: "https://thumbs.dreamstime.com/b/orange-juice-17172736.jpg"
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
                <button>Add to kart</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restaurant