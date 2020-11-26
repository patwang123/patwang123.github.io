import './Projects.css';
import {Container, Row, Col} from 'react-bootstrap/';
import Panel from './panel/Panel.js';
import PROJECT_CONSTS from './project_consts.js';
export default function Projects() {
    return (
        <div id='projects' className='projects'>
            <h1> Projects </h1>
            <Container style={{'max-width': '80%'}}>
                <Row md={3}>
                    <Col>
                        <Panel></Panel>
                    </Col>
                    <Col>
                        <Panel></Panel>
                    </Col>
                    <Col>
                        <Panel></Panel>
                    </Col>
                    <Col>
                        <Panel></Panel>
                    </Col>
                    <Col>
                        <Panel></Panel>
                    </Col>
                    <Col>
                        <Panel></Panel>
                    </Col>
                    <Col>
                        <Panel></Panel>
                    </Col>
                    <Col>
                        <Panel></Panel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}