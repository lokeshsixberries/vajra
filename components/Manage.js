import React from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Row, Button } from 'reactstrap'

export default function Manage() {
    return (
        <div>
            <Row style={{
                padding: "10px",
            }}>
                <Row>
                    <Col>
                        <h3>Manage Site</h3>
                    </Col>
                </Row>
                <Col>
                    <Card
                        className="my-2"
                        color="gray"
                        outline
                        style={{
                            height: "200px"
                        }}
                    >
                        <CardHeader>
                            Basic Info
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div>
                                        Total Site
                                    </div>
                                    <hr />
                                    <div>
                                        0

                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        Total Guard
                                    </div>
                                    <hr />
                                    <div>
                                        0

                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        On Duty Guard
                                    </div>
                                    <hr />
                                    <div>
                                        0
                                    </div>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        className="my-2"
                        color="gray"
                        outline
                        style={{
                            height: "200px"
                        }}
                    >
                        <CardHeader>
                            Performance
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                No Data Found
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        className="my-2"
                        color="gray"
                        outline
                        style={{
                            height: "200px"
                        }}
                    >
                        <CardHeader>
                            Latest Update
                            <Button style={{
                                position: "relative",
                                left: "350px",
                            }}>
                                View All
                            </Button>
                        </CardHeader>
                        <CardBody>
                            No Data Found
                        </CardBody>
                    </Card>
                </Col>

            </Row>

            <Row style={{
                padding: "10px",
            }}>
                <Col>
                    <Card
                        className="my-2"
                        color="gray"
                        outline
                        style={{
                            height: "200px"
                        }}
                    >
                        <CardHeader>
                            Basic Info
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div>
                                        Total Site
                                    </div>
                                    <hr />
                                    <div>
                                        0

                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        Total Guard
                                    </div>
                                    <hr />
                                    <div>
                                        0

                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        On Duty Guard
                                    </div>
                                    <hr />
                                    <div>
                                        0
                                    </div>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        className="my-2"
                        color="gray"
                        outline
                        style={{
                            height: "200px"
                        }}
                    >
                        <CardHeader>
                            Performance
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                0
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row style={{
                padding: "10px",
            }}>
                <Col>
                    <Card
                        className="my-2"
                        color="gray"
                        outline
                        style={{
                            height: "200px"
                        }}
                    >
                        <CardHeader>
                            Basic Info
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div>
                                        Total Site
                                    </div>
                                    <hr />
                                    <div>
                                        0

                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        Total Guard
                                    </div>
                                    <hr />
                                    <div>
                                        0

                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        On Duty Guard
                                    </div>
                                    <hr />
                                    <div>
                                        0
                                    </div>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
