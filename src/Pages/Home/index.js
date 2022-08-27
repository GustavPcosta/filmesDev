import './styles.css'
import NaviBar from '../../Components/NaviBar';
import HomeTwo from '../HomeTwo';
function Home() {
  return (
    <div className="container-home">
      <NaviBar/>
      <section>
      <HomeTwo/>
      </section>
    </div>
  );
}

export default Home;
