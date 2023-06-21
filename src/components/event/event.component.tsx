import React, { useState } from "react";
import { observer } from "mobx-react";
import { Col, Row } from "antd";
import styles from "./event.component.module.scss";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { Rate } from 'antd';
import { IEvent } from "../../services/event/event-planner-response.interface";

interface EventComponentProps {
  params: IEvent;
  onSubscribeEventHandler: (id: string) => void;
}

const EventsComponent: React.FC<EventComponentProps> = observer((props) => {
  const [value, setValue] = useState(props.params.subscribe);
  
  const content = () => {
    return (
        <Layout>
          <Content>
            <Row>
              <Col span={ 24 }>
                <div className={ styles.eventsContainer }>
                  <Row>
                    <Col span={ 4 }>
                      <span>
                         <img src={ props.params.image } style={ { maxWidth: "45px", paddingRight: "10px", paddingTop: "0px", paddingLeft: "10px" } }></img>
                      </span>
                    </Col>
                    <Col span={18}>
                      <span style={{ color: "#000" }}> { props.params.title } </span>
                    </Col>
                    <Col span={2}>
                      <div onClick={ () => { props.onSubscribeEventHandler(props.params.id) } }>
                        <Rate count={ 1 } onChange={ setValue } value={ value } />
                      </div>
                    </Col>
                  </Row>
                  
                </div>
              </Col>
              
            </Row>
          </Content>
        </Layout>
    )
  }
  return (
    <>
      {content()}
    </>
  );
});

export default EventsComponent;