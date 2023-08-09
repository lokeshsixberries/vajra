import React, { useState } from 'react'
import { Card, CardBody, CardText, Col, Nav, Row, TabContent, TabPane } from 'reactstrap'
import navs from '../constant/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard } from '@fortawesome/free-solid-svg-icons'
import Dashboard from "./Dashboard"
import Reports from './Reports'
import Supervisor from './Supervisor'
import Manage from './Manage'
import Shift from './Shift'
import Logout from './Logout'

export default function App() {

    const [currentTab, setCurrentTab] = useState(1);
    return (
        <>
            <Row>
                <Col xl="1">
                    <Card style={{
                        borderRadius: "0px",
                        height: "95vh",
                        border: "1px solid lavender"
                    }}>
                        <CardBody style={{
                            padding: "0px"
                        }}>
                            {
                                (navs || []).map((item, index) => {
                                    return (
                                        <>
                                            <Card
                                                onClick={() => setCurrentTab(item?.id)}
                                                style={{
                                                    borderRadius: "0px",
                                                    height: "100px",
                                                    border: "1px solid lavender",
                                                    display: "flex",
                                                    justifyContent: 'center',
                                                    aligntment: "center",
                                                    cursor: "pointer"

                                                }}>
                                                <CardBody>
                                                    <CardText>
                                                        <FontAwesomeIcon icon={item?.icon} style={{
                                                            position: "relative",
                                                            height: "30px",
                                                            width: "30px",
                                                            left: "30px",
                                                            color: "#000042",
                                                        }} />
                                                    </CardText>
                                                    <CardText style={{
                                                        position: "relative",
                                                        left: "20px",
                                                        color: "#000042"
                                                    }} >
                                                        {item?.name}
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </>
                                    )
                                })
                            }
                        </CardBody>
                    </Card>
                </Col>

                <Col xl="11">
                    <Row>
                        <Col>
                            {
                                currentTab === 1 ? <Dashboard /> : currentTab === 2 ? <Reports /> : currentTab === 3 ? <Supervisor />
                                    : currentTab === 4 ? <Manage /> : currentTab === 5 ? <Shift /> : <Logout />
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
