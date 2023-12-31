import React from "react";
import { observer } from "mobx-react";
import { Col, Row } from "antd";
import styles from "./user-events.component.module.scss";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { IEvent } from "../../services/event/event-planner-response.interface";
import moment from 'moment';

interface UserEventsComponentProps {
  params: IEvent;
}

const UserEventsComponent: React.FC<UserEventsComponentProps> = observer((props) => {

  const getEventDate = (date: Date) => {
    const startDate = moment(date);
    const formattedStartDate = startDate.format('MMMM, Do | HH:mm');
    return formattedStartDate;
  }

  const content = () => {
    return (
      <Layout>
        <Layout>
          <Header style={ { color: "#000", fontSize: "1em" } }>
            <span className="custom-text">Your next event:</span>
          </Header>
          <Content>
            <Row>
              <Col span={ 22 }>
                <div className={styles.userEventsContainer}>
                  <Row>
                    <Col span={ 10 }>
                      <span>
                         <img src={ props.params.image } style={ { maxWidth: "100px", paddingRight: "10px", paddingTop: "10px", paddingLeft: "10px" } }></img>
                      </span>
                    </Col>

                    <Col span={ 8 }>
                        <span style={ { color: "#000", fontWeight: "bold" } }>
                            { props.params.title }
                          </span>
                          <br/>
                          <span style={ { color: "#000" } }>
                          { props.params.description }
                          </span>
                          <br/>
                          <span style={ { color: "#000" } }>
                            John Doe
                          </span>
                    </Col>

                    <Col span={ 24 } style={ { color: "#000", float: "right", textAlign: "right" } }>
                      <span style={{ backgroundColor: "gray", padding: "5px", borderRadius: "5px", color: "#fff" }}>{ getEventDate(props.params.startDate) }</span>
                    </Col>
                    
                  </Row>
                  
                </div>
              </Col>
              
            </Row>
          </Content>
        </Layout>

      </Layout>
    )
  }

  return (
    <>
      {content()}
    </>
  );
});

export default UserEventsComponent;