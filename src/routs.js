import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";

function MainRouts(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/movie/:id" element={<Movies/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
        </Routes>
    )
}
export default MainRouts