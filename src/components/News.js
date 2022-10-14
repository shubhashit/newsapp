import React, { Component } from "react";
import NewsItem from "./NewsItems";

export default class News extends Component {
    constructor() {
        super();
    this.state = {
      articles: [],
      loding: false,
      page : 1,
    };
  }

  async componentDidMount(){
    console.log("object")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b90c7837eaf1435486f6e4db8d783cd1&page=1&pagesize=20`;
    let data = await fetch(url);
    console.log(data);
    let parsdata = await data.json();
    console.log(parsdata);
    this.setState({articles : parsdata.articles , totalResult : parsdata.totalResults} );
    
}

handleNextClick = async ()=>{
    console.log("next");
    console.log("object")
    if(this.state.page + 1 >  Math.ceil(this.state.totalResult/20)){}
    else{

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b90c7837eaf1435486f6e4db8d783cd1&page=${this.state.page + 1}&pagesize=20`;
      let data = await fetch(url);
    console.log(data);
    let parsdata = await data.json();
    console.log(parsdata);
    this.setState({articles : parsdata.articles});
    this.setState({page : this.state.page + 1 })
  }
}
handlepreClick = async ()=>{
    console.log("nexpret");
    console.log("object")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b90c7837eaf1435486f6e4db8d783cd1&page=${this.state.page -1}&pagesize=20`;
    let data = await fetch(url);
    console.log(data);
    let parsdata = await data.json();
    console.log(parsdata);
    this.setState({articles : parsdata.articles});
      this.setState({page : this.state.page -1 })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            console.log(element)
            return (
              <div className="col-md-4 my-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 >  Math.ceil(this.state.totalResult/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
