import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import * as webFontLoader from 'webfontloader';

webFontLoader.load({
    google: {
        families: ['Lato:100,200,300,400,500,700', 'Montserrat:100,200,300,400,500,700', 'Material Icons']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));


