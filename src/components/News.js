import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {


  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 16,
      totalResults: 0,
      country: 'us'
    }

  }

  async componentDidMount(){
    this.setState({loading: true})
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=ffea9f6fdebe4d48abfe0530a42d6853&page=${this.state.page}&pageSize=${this.state.pageSize}}`;

    let data = await fetch(url);
    this.props.setProgress(25);
    let jsonData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false})
      this.props.setProgress(100);
  }


  render() {

    const fetchData = async()=>{
      this.setState({page: this.state.page + 1})

        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=ffea9f6fdebe4d48abfe0530a42d6853&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({
          articles: this.state.articles.concat(jsonData.articles),
          totalResults: jsonData.totalResults
        })

    }
    return (
      <div style={{marginTop: '80px'}}>

        <h3 className='text-center font-monospace my-5'><strong>News-Walah:</strong> Top Headlines</h3>

        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={fetchData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
         >
          <div className="container">
            <div className='row my-3' style={{minHeight: "100vh"}}>
              {this.state.articles.map((element)=>{
                return <div className="col-md-3 my-3 d-flex justify-content-center h-auto" key={element.url} >
                <NewsItem source={element.source.name} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author?element.author:'Unknown'} publishedAt={new Date(element.publishedAt).toGMTString()}/>
              </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </div>
    )
  }
}


