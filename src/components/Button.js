import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';


// class Button extends React.Component{

//     static contextType=LanguageContext;

//     render(){
//         //console.log(this.context);
//         const text= this.context ==='english'?'Submit':'Voorleggen';
//         return(
//             <button className='ui button primary'>
//                 {text}
//             </button>
//         ); 
//     }
// }

//Another way of writing context object
//Button.contextType=LanguageContext;

//Using Provider Consumer Approach

// class Button extends React.Component{

//     renderValue(value){

//         return value==='english'?'Submit':'Voorleggen';

//     }

//     render(){
//         return(
//             <button className='ui button primary'>
//                 <LanguageContext.Consumer>
//                     {value=>this.renderValue(value)}
//                 </LanguageContext.Consumer>
//             </button>
//         ); 
//     }
// }

//Using Video No.71 Approach

class Button extends React.Component{

    //Before context redux
    // renderValue(value){

    //     return value==='english'?'Submit':'Voorleggen';

    // }

    renderValue(langauge){

        return langauge==='english'?'Submit':'Voorleggen';

    }

    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {/* {value=>this.renderValue(value)} */}
                    {({langauge})=>this.renderValue(langauge)}
                </LanguageContext.Consumer>
            </button>
        );  
    }

    render(){
        return(
            <ColorContext.Consumer>
                {color=>this.renderButton(color)}
            </ColorContext.Consumer>
        ); 
    }
}

export default Button;