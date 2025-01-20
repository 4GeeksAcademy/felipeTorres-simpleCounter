import React  from "react";
import PropTypes from "prop-types";
import  { Clock } from 'lucide-react' // cambiar este iconopor awesome de relojes

function SecondCounter (props) {
    const digits = props.seconds.toString().padStart(6,"0").split("");
    return (
        <div className="Contadorsegundos2">
            <Clock className="reloj"/>
            {digits.map((digit,index) => ( 
                <div key={index} className="digit">
                    {digit}
                </div>
            ))}
        </div>
        
    
    );
};

SecondCounter.propTypes={seconds:PropTypes.number.isRequired};


export default SecondCounter;

