import React,{useState} from 'react';
import MultiSlider, { Progress,Dot } from 'react-multi-bar-slider';
import './valueSlider.css'
export default function ValueSlider(){
    
    const [progress, setProgres] = useState(37);
    let handleSlide = newProgress => setProgres(newProgress);
    
    return(
        <>
                  <div className="value_slider__state_container">
                      <div>0</div>
                      <div>100</div>
                  </div>
                  <MultiSlider onSlide={handleSlide} height={6} roundedCorners>
                    <Progress color="red" progress={progress} height={6}>
                        <Dot color={"white"} width={8} height={7}>
                            <div className="value_slider__current_value">{progress}</div>
                        </Dot>
                    </Progress>
                    <Progress color="#788096" height={6} progress={101}/>
                  </MultiSlider>
        </>
    );
}