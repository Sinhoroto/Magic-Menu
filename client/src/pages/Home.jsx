import React, { useEffect, useState } from 'react'
import Logo from "../img/logo.png"
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [restaurants,setRestaurant] = useState([])

//  const location = useLocation()

  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     try{
  //       const res = await axios.get(`http://localhost:8800/api/restaurants/`, restaurants)
  //       setRestaurant(res.data);
  //     }catch(err){
  //       console.log(err)
  //     }
  //   };
  // });
     const posts = [
       {
         id: 1,
         title:'Recanto de minas',
         body:"Restaurant focused on country food",
         img: "https://thumbs.dreamstime.com/b/granola-bowl-yogurt-fresh-almonds-blueberries-raspberries-peach-strawberries-kitchen-table-granola-bowl-290893249.jpg"
       },
       {
         id :2 ,
         title :"Trattoria Passini",
         body :"Italian food restaurant, focused on pasta and sauces",
         img: "https://thumbs.dreamstime.com/b/restaurants-monastiraki-area-athens-greece-september-152321334.jpg"
       },
       {
         id :3 ,
         title :"Pizzaria Monte Alegre",
         body :"24 hour pizzeria",
         img: "https://thumbs.dreamstime.com/b/hot-pizza-slice-wooden-table-35993453.jpg"
       },
       {
         id :4 ,
         title :"Beef Factory",
         body :"Artisan burger restaurant",
         img: "https://thumbs.dreamstime.com/b/beef-hamburger-patties-sizzling-barbecue-juicy-over-hot-flames-74654280.jpg"
       },
       {
         id :5 ,
         title :"Hotdogueria do Paulo",
         body :"hamburgers and hot dogs",
         img: "https://thumbs.dreamstime.com/b/hot-dog-fries-19494875.jpg"
       }
     ];
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(posts=>(
          <div className='post' key={posts.id}>
            <div className='img'>
              <img src={posts.img} alt="" />
            </div>
            <div className='content'>
              <Link className='link' to={`/Restaurant/${posts.id}`}>
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home