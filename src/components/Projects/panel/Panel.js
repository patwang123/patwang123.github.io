import React from 'react';
import Card from 'react-bootstrap/Card'
import './Panel.css';


export default class Panel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    test_it() {
        const {test_it} = this.props;
        if(test_it === null) return;

        return (
            <a href={test_it} target='_blank' rel='noreferrer'>
                Try it out
            </a>
        )
    }
    render() {
        const {
            title,
            ext_info,
            languages,
            img,
            github,
            /*test_it*/} = this.props;
        return (
            <Card className="mx-4 my-4" id={title}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{ext_info}</Card.Text>
                    <Card.Text>
                        <a href={github} target='_blank' rel='noreferrer' style={{marginRight: '15px'}}>
                            Github
                        </a>
                        {this.test_it()}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{languages}</small>
                </Card.Footer>
            </Card>
        )
    }
}