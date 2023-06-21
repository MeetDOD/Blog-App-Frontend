import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Home from './Home'
import { getAllPosts } from '../Services/api'
import {Typography} from '@mui/material'

const Pr = () => {

  const [posts,setPosts] = useState();

  useEffect(() => {
    getAllPosts()
    .then((data) => setPosts(data?.posts))
    .catch((er) => console.log(er));
  },[]);

  return (
    <div >
      <div className='mb-3'>
      <Typography textAlign={'center'} variant='h3' fontFamily={'quicksand'} padding={1}>
      🔍All Blogs🔎
    </Typography>
    </div>
      {' '}
      {posts && posts.map((item,index) => (
        <Home 
        date={new Date(`${item.date}`).toLocaleDateString()} 
        description={item.description}
        image={item.image}
        id={item._id}
        location={item.location}
        title={item.title}
        user={item.user?._id}
        name={item.user?.name}
        />
      ))}
    </div>
  )
}

export default Pr