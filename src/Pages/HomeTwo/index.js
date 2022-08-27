import { useEffect, useState } from 'react';
import MoviesCard from '../../Components/MoviesCard';
import api from '../../Services/api';
import './styles.css'



function HomeTwo(){
  const [topMovies,setMovies] = useState([])
  async function getFilmes(url){
    const response = await api.get(url);
    setMovies(response.data.results)
    console.log(response.data)
  }
  useEffect(()=>{
    getFilmes()
  },[])
  return(
    <div className='container'>
      <h2 className='title'>Melhores filmes</h2>
      <div className='container-movies'>
      {topMovies.length === 0 && <p>Carregando</p> }
      {topMovies.length > 0 && topMovies.map((movie)=><MoviesCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}
export default HomeTwo


  
    
    
  