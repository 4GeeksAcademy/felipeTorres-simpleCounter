import React, {useState,useEffect}from "react";
import SecondCounter from "./secondCounter";


const Counter = () => {
    const [second, setSecond] = useState(0);
        useEffect(() => {
            const interval = setInterval (() => {
            setSecond(prevSecond => prevSecond + 1);
            }, 1000);
            return () => clearInterval(interval);
        }, []);
        return(
            <div className="text center">
                <div>
                    <SecondCounter seconds={second} />
                </div>
                <div className="tittle">
                        ---touch me---
                </div>
            </div>
        );
    };

    export default Counter