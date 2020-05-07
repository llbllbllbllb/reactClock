import React from 'react';
import WarningBanner from './WarningBanner';

export default class WarningPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState({
            showWarning: !this.state.showWarning
        });
    }

    render (){
        return(
            <div>

                <WarningBanner show={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>

        );
    }

}