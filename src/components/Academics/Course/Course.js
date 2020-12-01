import './Course.css';

import React from 'react';
import Card from 'react-bootstrap/Card'

export default class Course extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const {
            course_name,
            course_title,
            ext_info,
            website,} = this.props;
        return (
            <Card className="mx-2 my-2" id={course_name} style={{height: '90%'}}>
                <Card.Body className='card-body course-body' style={{height: '100%'}}>
                    <Card.Title style={{ marginBottom: '0px' }}>
                        {course_name}
                    </Card.Title>
                    <Card.Text style={{ marginTop: '0px', marginBottom: '14px', padding: '0px',lineHeight: '110%'}}>{course_title}</Card.Text>
                    <Card.Text>{ext_info}</Card.Text>
                </Card.Body>
                <Card.Body style={{marginTop: '5px',marginBottom: '18px'}}>
                    <a href={website} target='_blank' rel='noreferrer' style={{fontSize: '18px'}}>
                        Course Website
                    </a>
                </Card.Body>
            </Card>
        )
    }
}