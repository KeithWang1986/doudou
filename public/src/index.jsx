import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from 'dd-button';
import { LocaleProvider, LocaleValue, LocaleLabel } from 'dd-locale';


class App extends React.Component {
    render() {
        return (
            <div>
                <Button />
                <LocaleProvider>
                    <LocaleLabel value="Button.confirm" /> 
                </LocaleProvider>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));