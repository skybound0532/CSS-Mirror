import React, { useState, useEffect} from "react";

function RTC(props = null) // props.col, props.row, props.width, props.height, props.config
{
    const [col, setCol] = useState(1);
    const [row, setRow] = useState(1);
    const [width, setWidth] = useState(1);
    const [height, setHeight] = useState(1);
  
    useEffect(() => {
        setCol(props.col + 1);
        setRow(props.row + 1);
        setWidth(props.width);
        setHeight(props.height);
    }, [props]);


    const [display, setDisplay] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const tempDate = new Date();
    
            let timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
    
            let tempdisplay = tempDate.toLocaleTimeString('en-US', timeOptions);
    
            if (!props.config.displaySeconds) {
                timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
                tempdisplay = tempDate.toLocaleTimeString('en-US', timeOptions);
            }
    
            setDisplay(tempdisplay);
        }, 100);
    
        return () => clearInterval(interval);
    }, []);
    
    return(
        <div className="Widget"
            style=
            {{
                backgroundColor: props.config.backgroundColor,
                color: props.config.textColor,
                "gridColumnStart": col,
                "gridColumnEnd": col+width,
                "gridRowStart": row,
                "gridRowEnd": row+height
            }}
        >
            <p>{display}</p>
        </div>
    )    
}

export default RTC;