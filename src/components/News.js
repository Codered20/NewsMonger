import React from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


class News extends React.Component {

    static defaultProps = {
        country: 'in',
        pageSize: 24,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    defUrl = 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/05/breaking-news-1621477618-1621902360.jpg'
    constructor(props) {
        super(props);
        console.log("I am a constructor from news component")
        this.state = {
            articles: [],
            page: 1,
            pages: 0,
            Keyword: "India",
            Loading: false,
            respons: true,
            errormsg: "",
            totalResults: 0
        };
    }

    async componentDidMount() {
        this.updateItem();
        console.log(this.props.q);
    }

    updateItem = async () => {
        let url = this.props.q ? `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=3231d3c21a32481b846e23c8dff2faa5&page=${this.state.page}&pageSize=${this.props.pageSize}
        `: `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=3231d3c21a32481b846e23c8dff2faa5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ Loading: true });
        this.props.setProgress(10)
        let data = await fetch(url);
        this.props.setProgress(20)
        let parsedData = await data.json();
        this.props.setProgress(30)
        console.log(url, this.props.q)
        console.log(data.ok)
        console.log(parsedData.message)
        console.log(parsedData)
        this.props.setProgress(50)
        console.log(this.state.Loading, " Mount");
        this.setState({
            respons: data.ok,
            errormsg: parsedData.message,
            articles: parsedData.articles,
            pages: Math.ceil(parsedData.totalResults / 24),
            Loading: false,
            totalResults: parsedData.totalResults
        });
        this.props.setProgress(70)
        console.log(this.state.totalResults);
        console.log(this.state.articles)
        console.log(this.state.errormsg)
        this.props.setProgress(100)
    }

    handlePrev = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateItem();
    }

    handleNext = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateItem();
    }

    fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        this.setState({ page: this.state.page + 1 })
        let url = this.props.q ? `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=3231d3c21a32481b846e23c8dff2faa5&page=${this.state.page}&pageSize=${this.props.pageSize}
        `: `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=3231d3c21a32481b846e23c8dff2faa5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ Loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            respons: data.ok,
            errormsg: parsedData.message,
            articles: this.state.articles.concat(parsedData.articles),
            pages: Math.ceil(parsedData.totalResults / 24),
            Loading: false,
            totalResults: this.state.totalResults + parsedData.totalResults
        });
        console.log(this.state.totalResults);
        console.log(this.state.articles)
    };

    render() {
        return <div className='container my-3'>
            <h2>NewsMonger - Top Headlines</h2>
            {/* {this.state.Loading && <Spinner />} */}

            {this.state.respons ? <div className="row my-4">
                {this.state.articles.map((element) => {
                    return element.title!=="[Removed]"? <div className="col-md-3" key={element.url}>
                        <NewsItem title={element.title ? element.title : "..."} description={element.description ? element.description : "..."} date={element.publishedAt} imageUrl={element.urlToImage ? element.urlToImage : this.defUrl} Url={element.url} author={element.author} source={element.source.name} />
                    </div>:null;
                })}
            </div> :
                <div className="row my-4">
                    <p>{this.state.errormsg}</p>
                </div>
            }
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.pages !== this.state.page}
                {...console.log(this.state.page !== 4, this.state.articles.length, this.state.pages, this.state.page, this.state.totalResults)}
                loader={<Spinner />}
            ></InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                <div> Page {this.state.page} of {this.state.pages}</div>
                <button disabled={this.state.page >= this.state.pages || isNaN(this.state.pages)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div> */}
        </div>;
    }
}


export default News;