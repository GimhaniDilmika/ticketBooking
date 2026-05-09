import React from 'react'
import { assets } from '../../assets/assets'
import { LayoutDashboardIcon } from 'lucide-react'

const AddShows = () => {
    const user ={
        firstName:'Admin',
        lastName:'User',
        imageUrl:assets.profile,   
     }
     const adminNavlinks=[
        {name:'Dashboard',path:'/admin',icon:LayoutDashboardIcon},
        
     ]
  return (
    <div>AddShows</div>
  )
}

export default AddShows