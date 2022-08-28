import './styles.css'
import {useState,useEffect} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import api from '../../Services/api';
import apiTwo from '../../Services/apiTwo';
import MoviesSearch from '../../Components/MoviesSearch';
import MoviesCard from '../../Components/MoviesCard';

  
  function Search(){
    const [movies,setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q')
    async function getFilmes(){
        try {
          const response = api.get('/search/movie/');
         
          setMovies(response.results.data)
        } catch (error) {
          console.log(error)
        }

    }
    
    useEffect(()=>{
      
      getFilmes()
    },[query])
    return(
      <div className='container'>
      <h2 className='title'>Resultados para:{query}</h2>
      <div className='container-movies'>
      {movies.length === 1 && <p>Carregando...</p> }
      {movies.length > 0 && movies.map((movie)=><MoviesCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
    )
  }
  export default Search