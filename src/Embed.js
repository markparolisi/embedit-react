import React, { Component } from "react";

class Embed extends Component {
  render() {
    return (
      <figure className="media--item" key={this.props.source}>
        <img
          className="media--item--thumbnail"
          key={this.props.source}
          src={this.props.thumbnailURL}
          alt={this.props.name}
        />
        <figcaption className="media--item--credit">
          <a href={this.props.credit}>
            {this.props.service}
          </a>
        </figcaption>
      </figure>
    );
  }
}

export default Embed;
