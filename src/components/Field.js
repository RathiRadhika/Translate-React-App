import React from 'react';

import LanguageContext from '../context/LanguageContext';


class Field extends React.Component{

    static contextType=LanguageContext

    render(){

        //before context redux
        // const text = this.context==='english'?'Name':'Naam'

        const text = this.context.language==='english'?'Name':'Naam'
        return(
            <div className='ui field'>
                <label>{text}</label>
                <input/>
            </div>

        );
    }
}

export default Field;