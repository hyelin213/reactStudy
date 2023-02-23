import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail.jsx';


export default function MovieApp() {

    return (
        <Router>
            {/* Switch가 Routes로 변경 됨 */}
            <Routes>
                {/* path => return할 주소값 */}
                <Route path='/movie/:id' element={<Detail/>} />
                {/* movie/(:) => path variable */}
                <Route path='/' element={<Home/>} />
            </Routes>
        </Router>
    );
    
}
