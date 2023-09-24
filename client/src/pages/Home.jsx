import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom';


const Home = () => {
  const posts = [
    {
      id: 1, 
      title:'Post One',
      body:"This is post one",
      img: Logo
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