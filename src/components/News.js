import React, { Component } from "react";
import NewsItem from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProp = {
    country: "in",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesite: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("object")
    // document.title = {this.props.category};
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(58);
    // console.log(data);
    let parsdata = await data.json();
    this.props.setProgress(72);
    // console.log(parsdata);
    this.setState({
      articles: parsdata.articles,
      totalResult: parsdata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  // handleNextClick = async () => {
  //   console.log("next");
  //   console.log("object");
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResult / this.props.pagesize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=d7ada9dbf6ab463f93008f45b91cdc5c&page=${
  //       this.state.page + 1
  //     }&pagesize=${this.props.pagesize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsdata = await data.json();
  //     this.setState({ articles: parsdata.articles, loading: false });
  //     this.setState({ page: this.state.page + 1 });
  //   }
  // };
  // handlepreClick = async () => {
  //   console.log("nexpret");
  //   console.log("object");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=d7ada9dbf6ab463f93008f45b91cdc5c&page=${
  //     this.state.page - 1
  //   }&pagesize=${this.props.pagesize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   console.log(data);
  //   let parsdata = await data.json();
  //   console.log(parsdata);
  //   this.setState({ articles: parsdata.articles, loading: false });
  //   this.setState({ page: this.state.page - 1 });
  // };

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apikey}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsdata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsdata.articles),
      loading: false,
    });
    this.setState({ page: this.state.page + 1 });
  };
  render() {
    return (
      <>
        <h2 className="text-center mt-3">
          Top {this.props.category} Headlines
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      dateTime={element.publishedAt}
                      source={element.source.name}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
