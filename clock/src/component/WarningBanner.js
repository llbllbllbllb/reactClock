import React from 'react';

export default class WarningBanner extends React.Component{
    render (){
        if(this.props.show === false){
            return null;
        }
        else{
            return(
                <h1>Warning!</h1>
            );
        }
        
    }
}