import './styles.css'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../Services/api';
import
{BsGraphUp,Bswallet2,BsHourglassSplit,BsFillFileEarmarkTextFill} from 'react-icons/bs';
import MoviesCard from '../../Components/MoviesCard';
function Movies() {
  const {id} = useParams();
  const[movie,setMovies] = useState(null)

    async function filmesDeatils(){
      try {
       fetch(`https://api.themoviedb.org/3/movie/ ${ id } ?api_key=4e44d9029b1270a757cddc766a1bcb63&language=pt-BR`)
       .then(res=>res.json())
       .then(data=>setMovies(data))
      } catch (error) {
        console.log(error.response)
      }
    }
    function formatValue(number){
      return number.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
      })
    }
    useEffect(()=>{
  
      filmesDeatils()
    },[])
    return (
      <div className='movie-pages'>{movie && (
        <>
        <MoviesCard movie={movie} showLink={false}/>
        <p className='tagline'>{movie.tagline}</p>
        <div className='info'>
          <h3>
             Orçamento:
          </h3>
          <p>{formatValue(movie.budget)}</p>
        </div>
        <div className='info'>
          <h3>
           <BsGraphUp/> Faturamento:
          </h3>
          <p>{formatValue(movie.revenue)}</p>
        </div>
        <div className='info'>
          <h3>
           <BsHourglassSplit/>  Duração:
          </h3>
          <p>{movie.runtime}</p>
        </div>
        <div className='info description'>
          <h3>
             <BsFillFileEarmarkTextFill/> Descricão:
          </h3>
          <p>{movie.overview}</p>
        </div>
        </>
      )}
      
      </div>
    );
  }
  
  export default Movies;


 