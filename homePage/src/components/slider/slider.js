import React,{useState,useEffect} from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";

const INITAL_INDEX = 0;
export default function Slider(){
    const [index, setIndex] = useState(INITAL_INDEX);
    useEffect(()=>{
       const interval = setInterval(()=>{
            index === images.length-1 ? setIndex(INITAL_INDEX):setIndex(index+1)
       },2500);
        return ()=> clearInterval(interval) 
    },[index])
    const images =[
        {
            src: 'https://azbit.com/img/solutions.png'
            
        },
        {
            src: 'https://azbit.com/img/cards.png'
        },
        {
            src: 'https://azbit.com/img/bg-video_pr.jpg'
        },
        {
            src: 'https://azbit.com/img/bg-reasons.png'
        },
        
        
    ] 
    return(
            <>
            <Gallery enableControls={false} index={index} onRequestChange={i => {setIndex(i);}}>
                    {images.map(img => (
                    <GalleryImage objectFit="contain" key={img.src} src={img.src} />
                    ))}
                </Gallery>
            </>
    );
}