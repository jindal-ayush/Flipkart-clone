import { useEffect } from 'react';
import Slide from './Slide'
import {Fragment} from 'react';
import NavBar from './NarBar';
import Banner from './Banner'
import { Box, styled } from '@mui/material';
import{getProducts} from '../../redux/action/productActions';
import { useDispatch , useSelector } from 'react-redux';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`  
   padding: 10px;
   background: #F2F2F2
`
const Home = () => {
   const {products} = useSelector(state=>state.getProducts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
return (        
    <>
    <NavBar/>
    <Component>
    <Banner/>
    <MidSlide products={products} title="Deal of the day"   timer={true}/>
    <MidSection/>
    <Slide products={products} title="Discount for you" timer={false}/>
    <Slide products={products} title="Sugestion Items"  timer={false}/>
    <Slide products={products} title="Top Selection" timer={false}/>
    <Slide products={products} title="Recommended Items"timer={false}/>
    <Slide products={products} title="Tranding Offers"timer={false}/>
    <Slide products={products} title="Seasons top picks"timer={false} />
    <Slide products={products} title="Top Deal on Accessories" timer={false}/>
    </Component>    
    </>
)
}
export default Home;