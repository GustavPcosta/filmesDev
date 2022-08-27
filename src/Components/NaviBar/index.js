
import { Link, useNavigate } from 'react-router-dom'
import {BiCameraMovie,BiSearchAlt2} from 'react-icons/bi';
import './styles.css'
import { useState } from 'react';

function NaviBar(){
const [search,setSearch] = useState('');
const navigate = useNavigate()
async function handleSearch(e){
    e.preventDefault()
   
    
   if(!search){
    return;
   }
   navigate(`search?q=${search}`)
   setSearch('')
   
}
    return(
       <nav className='naviBar'>
        <h2>
            <Link to='/'><BiCameraMovie/>Movies</Link>
        </h2>
        <form onSubmit={handleSearch}>
           <input type='text'placeholder='busque um filme' 
           onChange={(e)=> setSearch(e.target.value)} 
           value={search}>
            </input> 
           <button type='submit'>
            <BiSearchAlt2/>
           </button>
        </form>
       </nav>
    )
}

export default NaviBar