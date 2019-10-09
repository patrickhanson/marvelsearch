import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './comicpage.css'


class ComicBookPage extends Component {
    state = {
        book: {},
        title: "",
        imagesrc: "",
        series: "",
        price: ""
    }
    
    parseUrl = () => {
        const url = window.location.href
        const parsedUrl = url.split("/")
        const bookId = parsedUrl[parsedUrl.length-1]
        return bookId
    }
    
    getComic = (id) => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }
      
        const apikey = "53edf8013ffc768094d59e068d968211"
        const ts = "1"
        const hash = "7e9a6f0439c442930f6bcf44fdd8dd49"
        console.log(id)
        fetch(`http://gateway.marvel.com/v1/public/comics/${id}?apikey=${apikey}&ts=${ts}&hash=${hash}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    allBookData: data.data.results[0],
                    title: data.data.results[0].title,
                    imagesrc: (data.data.results[0].images[0].path) + "." + (data.data.results[0].images[0].extension),
                    series: data.data.results[0].series.name,
                    price: data.data.results[0].prices[0].price
                })
                console.log(this.state.book)
            })
    }
    
    componentDidMount() {
        this.getComic(this.parseUrl())
    }

    render() {
        return(
            <div className='comicPage'>
                <div className="container" >
                    <Image src={this.state.imagesrc} className="comicImage" />
                    <div className="info">
                        <div>
                            <h2>Title</h2>
                            {this.state.title}
                        </div>
                        <div>
                            <h2>Series</h2>
                            {this.state.series}
                        </div>
                        <div>
                            <h2>Price</h2>
                            {this.state.price}
                        </div>
                    </div>
                </div>
                <Link to='/'>
                    <Button>Back to Home Page</Button>
                </Link>
            </div>
        )
    }
}

export default ComicBookPage;