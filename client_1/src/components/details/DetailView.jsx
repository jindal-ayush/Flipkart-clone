import { useEffect } from 'react';
import{ Box, Typography , styled , Grid} from '@mui/material';
import ProductDetail from './ProductDetail';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProductDetails } from '../../redux/action/productActions';
import ActionItem from './ActionItem';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;
const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))
const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView= ()=>{
    
  const dispatch = useDispatch();
  const {id} = useParams();

  const {loding , product} = useSelector(state =>state.getProductDetails)

         useEffect (()=>{
            if(product && id !== product.id)
            dispatch(getProductDetails(id));
         },[dispatch, id, product , loding])
         console.log(product);

    return(    
    <Component>
        {
              product && Object.keys(product).length &&
             <Container container>
                 <Grid  item lg={4} md={4} sm={8} xs={12}>
                      <ActionItem product={product}/>
                 </Grid>
                 <RightContainer item lg={8} md={8} sm={8} xs={12}>

                         <ProductDetail product={product}/>
                 </RightContainer>          
                </Container>
        }
    </Component>
    )
}
export default DetailView;