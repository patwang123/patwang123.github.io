import './Projects.css';
import {Container, Row, Col} from 'react-bootstrap/';
import Panel from './panel/Panel.js';
import {PROJECT_CONSTS} from './project_consts.js';

export default function Projects() {
    return (
        <div id='projects' className='projects main-section'>
            <h1 id='project-title' style={{color: 'white'}}> Projects </h1>
            <Container id='project-container' fluid>
                <Row md={3} id='row-container'>
                    {PROJECT_CONSTS.map((panel, idx) => {
                        const {title,
                                ext_info,
                                languages,
                                img,
                                github,
                                test_it} = panel;
                        return (
                            <Col id={`col-${idx}`} key={`panel-${idx}`}> 
                                <Panel
                                title={title}
                                ext_info={ext_info}
                                languages={languages}
                                img={img}
                                github={github}
                                test_it={test_it}
                                >
                                </Panel>
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