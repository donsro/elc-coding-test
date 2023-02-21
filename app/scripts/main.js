/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    constructor(props) {
        super(props);
        this.updateSearchResults = this.updateSearchResults.bind(this);
        this.state = { searchResults: [] };
    }

    updateSearchResults(searchResults) {
        this.setState(state => (state.searchResults = searchResults, state));
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <div className="App">
                <Menu handleSearch={this.updateSearchResults} />
                <Home searchResults={this.state.searchResults} />
            </div>
        );
    }

}

// Render this out
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
