import React, { Component } from 'react';
import QueryForm from './Form.js'
import Embed from './Embed.js'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            embedList: [],
        };
    }

    _addEmbeds(searchTerm) {
        this.setState({ searchTerm: searchTerm });
        fetch('http://localhost:8080/media?q=' + searchTerm + '&services=imgur,giphy')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ embedList: data });
            });
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">Embedit Test GUI</h1>
                    <div className="">
                        <p className="subtitle">
                            Enter your search query below to see related embeds from social media.
                    </p>
                    </div>
                    <QueryForm addEmbeds={this._addEmbeds.bind(this)} />
                    <h2 className="search-query-title">Results for "{this.state.searchTerm}"</h2>
                    <div className="">
                        {this.state.embedList.map(embed =>
                            <Embed {...embed} />
                        )}
                    </div>
                </div>
            </section>
        );
    }

}

export default App;