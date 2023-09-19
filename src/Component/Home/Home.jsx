import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-[5%]'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;