import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';
import {LanguageStore} from '../context/LanguageContext';

class App extends React.Component{

    //deleted after redux context
    // state ={langauge:'english'};

    // onLanguageChange =(langauge)=>{
    //     this.setState({langauge});
    // }

    //Without USing Redux context
    // render(){
    //     return(
    //         <div className='ui container'>
    //             <div>
    //                 Select Language:
    //                 <i className='flag us' onClick={()=>this.onLanguageChange('english')}/>
    //                 <i className='flag nl' onClick={()=>this.onLanguageChange('dutch')}/>
    //             </div>
    //             {/* {this.state.langauge} */}
    //             <ColorContext.Provider value='red'>
    //                 <LanguageContext.Provider value={this.state.langauge}>
    //                     <UserCreate/>
    //                 </LanguageContext.Provider>
    //             </ColorContext.Provider>
    //         </div>
    //     );
    // }

    render(){
        return(
            <div className='ui container'>
                <LanguageStore>
                    <LanguageSelector />
                    
                    <ColorContext.Provider value='red'>
                            <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
};

export default App;