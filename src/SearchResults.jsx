import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class SearchResults extends Component {
    bookList = () => {
        if(this.props.results < 1) {
            return(null)
        } else {
            return this.props.results.map(book => {
                return(
                    <Card key={book.id} >
                        <Card.Content>
                            <Link to={`/book/${book.id}`} >
                                <Image 
                                    src={(book.images[0].path) + "." + (book.images[0].extension)}
                                    className="bookImage"
                                />
                            </Link>
                            <Link to={`/book/${book.id}`}>
                                <Card.Header className="cardHeader" >{book.title}</Card.Header>
                            </Link>
                        </Card.Content>
                    </Card>
                )
            })
        }
    }
    
    render() {
        return(
            <Card.Group centered className="searchResults" >
                {this.bookList(this.props.results)}
            </Card.Group>
        )
    }
}

export default SearchResults;