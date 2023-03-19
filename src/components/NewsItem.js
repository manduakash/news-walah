import React, { Component } from 'react'
import ImgSpinner from '../images/img-spinner.gif'

export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="card" style={{width: "24rem"}}>
          <img src={this.props.urlToImage?this.props.urlToImage:ImgSpinner} className="card-img-top" alt="Not loaded..." style={{height: "160.88px"}}/>
          <div className="card-body">

            <span className="badge rounded-pill bg-danger" style={{left: '85%',zIndex: '1'}}>Source: {this.props.source}</span>
            <h6 className="card-title fw-bold font-monospace">{this.props.title}</h6>
            <hr/>
            <p className="card-text lh-1 font-monospace"> {this.props.description}...</p>
            <p className="card-text text-muted font-monospace" style={{fontSize: '0.8rem'}}> By {this.props.author} <br/> on {this.props.publishedAt}</p>
            <a href={this.props.url} className="btn btn-sm btn-outline-dark rounded-pill">
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}
