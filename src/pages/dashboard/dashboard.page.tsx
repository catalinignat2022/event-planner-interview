import React, { useState, useEffect } from "react";
import styles from "./dashboard.page.module.scss";
import { useServices } from "../../hooks/use-services.hook";
import { observer } from "mobx-react";
import "../../css/_custom.scss";
import UserEventsComponent from "../../components/user-events/user-events.component";
import EventComponent from "../../components/event/event.component";
import { Carousel } from 'antd';
import { IEvent } from "../../services/event/event-planner-response.interface";

const DashboardPage: React.FC = observer((props) => {
  const services = useServices();
  const [allEvents, setAllEvents] = useState<IEvent[]>();

  useEffect(() => {
    services.eventPlanner.getAllEvents().then((response: IEvent[]) => {
      setAllEvents(response);
    });
  }, []);

  const onClickSubscribe = (eventId: string) => {
    services.eventPlanner.subscribeToEvent(eventId);
    services.eventPlanner.getAllEvents().then((response: IEvent[]) => {
      setAllEvents(response);
    });
  }

  const renderAllEvents = () => {
    if(!allEvents) {
      return null;
    }

    return (
      <div>
        <span style={{ color: "#000" }}>
          Discover Upcoming Events:
        </span><br />
        <span style={{ color: "#000" }}>
          Sort by: Coding Social
        </span>

        <div>
          <div className={styles.bg}></div>
          <div className={styles.event}>
            { allEvents.map((element: IEvent) => (
              <EventComponent key={ element.id } params={ element } onSubscribeEventHandler={ onClickSubscribe } />
            )) }
          </div>
        </div>
      </div>
    )
  }

  const renderSubscribedEvents = () => {
    if(!allEvents) {
      return null;
    }

    const renderEventComponent = (element: IEvent) => {
      
      if(!element.subscribe) {
        return null;
      }

      return (
        <div key={ element.id }>
        <UserEventsComponent  params={ element }/>
      </div>
      )
    }

    return (
      <Carousel autoplay>
          { allEvents.map((element: IEvent) => (
            renderEventComponent(element)
          )) }
      </Carousel>
    )
  }

  return (
    <div>
      { renderSubscribedEvents() }
      { renderAllEvents() }

    </div>
  );
});

export default DashboardPage;