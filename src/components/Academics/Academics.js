import './Academics.css';
import { Container, Row, Col} from 'react-bootstrap/';
import Course from './Course/Course.js';
import {COURSE_CONSTS} from './course_consts.js';
export default function Academics () {
    return (
        <div id='academics' className='academics main-section'>
            <h1>Coursework</h1>
            <Container id='course-container' style={{ maxWidth: '100%' }} fluid>
                <Row md={4} id='course-row-container'>
                    {COURSE_CONSTS.map((course, idx) => {
                        const { course_name,
                            ext_info,
                            website,
                            course_title} = course;
                        return (
                            <Col id={`col-course-${idx}`} key={`course-${idx}`}>
                                <Course
                                    course_name={course_name}
                                    course_title={course_title}
                                    ext_info={ext_info}
                                    website={website}
                                >
                                </Course>
                            </Col>
                        )
                    }
                    )
                    }
                </Row>
            </Container>
        </div>
    )
}