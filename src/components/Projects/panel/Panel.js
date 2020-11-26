import React from 'react';
import Card from 'react-bootstrap/Card'
import './Panel.css';
import pathfinding from './img/pathfinding.jpg';
export default class Panel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Card className="mx-4 my-4">
                <Card.Img variant="top" src={pathfinding}/>
                <Card.Body>
                    <Card.Title>Project title</Card.Title>
                    <Card.Text>
                        Insert description here
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Insert Languages here</small>
                </Card.Footer>
            </Card>
        )
    }
}