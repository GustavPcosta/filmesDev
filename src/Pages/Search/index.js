import './styles.css'
import {useState,useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import MoviesCard from '../../Components/MoviesCard';
import apiTwo from '../../Services/apiTwo';
import api from '../../Services/api';

      
  
export default function Search(){
  const [searchParams] = useSearchParams()
  const [movies,seTmovies] = useState([]);
  const query = searchParams.get('q');

    async function filmesSearch(){
        try {
          
        
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
      filmesSearch()
    },[query])

  return(
    <div>
      
    </div>
  )
}