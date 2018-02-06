import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from 'dd-button';


class App extends React.Component {
    render() {        
        return (
            <Button /> 
        ); 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));