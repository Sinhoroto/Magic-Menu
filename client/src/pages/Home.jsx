import React, { useEffect, useState } from 'react'
import Logo from "../img/logo.png"
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [restaurants,setRestaurant] = useState([])

//  const location = useLocation()

  //  useEffect(()=>{
  //    const fetchData = async ()=>{
  //      try{
  //        const res = await axios.get(`http://localhost:8800/api/restaurants`)
  //        setRestaurant(res.data);
  //      }catch(err){
  //        console.log(err)
  //      }
  //    };
  //  });
    const posts = [
      {
        id: 1, 
        title:'Post One',
        body:"This is post one",
        img: "https://thumbs.dreamstime.com/b/granola-bowl-yogurt-fresh-almonds-blueberries-raspberries-peach-strawberries-kitchen-table-granola-bowl-290893249.jpg"
      },
      {
        id :2 ,
        title :"post two",
        body :"this is the second post",
        img: Logo
      },
      {
        id :3 ,
        title :"post two",
        body :"this is the second post",
        img: Logo
      },
      {
        id :4 ,
        title :"post two",
        body :"this is the second post",
        img: Logo
      },
      {
        id :5 ,
        title :"post two",
        body :"this is the second post",
        img: Logo
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
                <h1>{posts.name}</h1>
                <p>{posts.description}</p>
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