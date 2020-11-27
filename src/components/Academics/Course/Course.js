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
            <Card className="mx-2 my-4" id={course_name}>
                <Card.Body className='card-body course-body' style={{ paddingBottom: '24px' }}>
                    <Card.Title style={{ marginBottom: '0px' }}>
                        {course_name}
                    </Card.Title>
                    <Card.Text style={{ marginTop: '0px', marginBottom: '14px', padding: '0px',lineHeight: '110%'}}>{course_title}</Card.Text>
                    <Card.Text>{ext_info}</Card.Text>
                    <Card.Text>
                        <a href={website} target='_blank' rel='noreferrer'>
                            Course Page
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}