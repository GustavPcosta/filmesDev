import './styles.css'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../Services/api';
import{BsGraphUp,Bswallet2,BsHourglassSplit,BsFillFileEarmarkTextFill} from 'react-icons/bs';
import MoviesCard from '../../Components/MoviesCard';
function Movies() {
  const {id} = useParams();
  const[movie,setMovies] = useState(null)

    async function filmesDeatils(){
      try {
        const response = await api.get(`${movie}${id}?`);
        setMovies(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response)
      }
    }
    
    useEffect(()=>{
  
      filmesDeatils()
    },[])
    return (
      <div>{movie && (
        <>
        {movie.title}
        </>
      )}
      
      </div>
    );
  }
  
  export default Movies;


 