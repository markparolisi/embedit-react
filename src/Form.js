import React from 'react';

class QueryForm extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    let searchTerm = this._searchTerm.value;
    this.props.addEmbeds(searchTerm);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="field has-addons">
              <div className="control">
                <input type="text" placeholder="Search Term" ref={(input) => { this._searchTerm = input; }} className="input" />
              </div>
              <div className="control">
                <input type="submit" value="Search" className="button is-primary" />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default QueryForm;
