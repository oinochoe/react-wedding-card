import React from 'react';
import { Row, Col } from 'reactstrap';
// import FontAwesome from 'react-fontawesome';

export default function Footer() {
    const a = '';
    return (
        <Row>
            <Col className='app-fluid app-footer d-flex justify-content-center align-items-center'>
                <p className='mb-0'>
                    <small className='text-muted'>
                        &copy; Yeongmin
                        <span className='pl-2'>
                            <a href='https://github.com/oinochoe' target='_blank'>
                                Kim Yeong Min
                            </a>
                        </span>
                    </small>
                </p>
            </Col>
        </Row>
    );
}
