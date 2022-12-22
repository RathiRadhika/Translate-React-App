import React from 'react';
import LanguageContext from '../context/LanguageContext';


class LanguageSelector extends React.Component{

    //After conext redux
    static contextType=LanguageContext;

    render(){
        console.log(this.context);

        return(
            <div>
                <div>
                    Select Language:
                    {/* Before Context Redux */}
                    {/* <i className='flag us' onClick={()=>this.props.onLanguageChange('english')}/>
                    <i className='flag nl' onClick={()=>this.props.onLanguageChange('dutch')}/> */}

                    <i className='flag us' onClick={()=>this.context.onLanguageChange('english')}/>
                    <i className='flag nl' onClick={()=>this.context.onLanguageChange('dutch')}/>
                </div>
            </div>
        );
    }
}

export default LanguageSelector;