import React, {useMemo} from 'react';
import {useSelector , useDispatch} from "react-redux";
import { getData } from '../redux/images/action';
import ImageCard from '../components/ImageCard';
import { Loading } from '../components/Loading';
import './image.css';
import { Box } from '@chakra-ui/react';

const Images = () => {
const {images_data, error , loading }= useSelector((store) => store?.image);
const dispatch = useDispatch();
React.useEffect(() => {
    dispatch(getData())
}, [])

const imageCard = useMemo(() => (
    images_data?.map((img) => (
      <ImageCard
      src={img.urls.raw}
      title={img.alt_description}
      />
    ))
  ), [images_data]);

if(error){
    return <h1>...Error</h1>
  }else if(loading){
    return <Loading />
  }else
  return (
    <Box className='image_upload'>
      {
        imageCard
      }
    </Box>
  )
}

export default Images
