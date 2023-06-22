import React, { useState, useEffect } from "react";
import styles from "./dashboard.page.module.scss";
import { useServices } from "../../hooks/use-services.hook";
import { observer } from "mobx-react";
import "../../css/_custom.scss";
import UserEventsComponent from "../../components/user-events/user-events.component";
import EventComponent from "../../components/event/event.component";
import { Carousel } from 'antd';
import { IEvent } from "../../services/event/event-planner-response.interface";
import { runInAction } from "mobx";

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

  const sortElementsByCategory = (category: string) => {
    const cloneAllEventsArray = JSON.parse(JSON.stringify(allEvents));
    // Sortăm array-ul `elements` utilizând metoda `sort()` și o funcție de comparație personalizată
    cloneAllEventsArray.sort((a: IEvent, b: IEvent) => {
      // Verificăm dacă categoria `category` există în array-ul `categories` al fiecărui element
      const aHasCategory = a.categories.includes(category);
      const bHasCategory = b.categories.includes(category);
  
      // Dacă ambele elemente au categoria, le sortăm în funcție de `subscribe`
      if (aHasCategory && bHasCategory) {
        return a.subscribe - b.subscribe;
      }
  
      // Dacă doar primul element are categoria, îl plasăm înaintea celui de-al doilea element
      if (aHasCategory) {
        return -1;
      }
  
      // Dacă doar al doilea element are categoria, îl plasăm înaintea primului element
      if (bHasCategory) {
        return 1;
      }
  
      // Dacă niciunul dintre elemente nu are categoria, le păstrăm în ordinea lor originală
      return 0;
    });
    return cloneAllEventsArray;
  }
  


  const onClickSort = (sortBy: string) => {
    if(!allEvents) {
      return null;
    }
    
    
    runInAction(() => {
      setAllEvents(sortElementsByCategory(sortBy));
    })
  }

  const renderAllEvents = () => {
    if(!allEvents) {
      return null;
    }

    const categories: string[] = [];
    for (const element of allEvents) {
      for (const category of element.categories) {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      }
    }

    return (
      <div style={{ paddingTop: "40px", paddingLeft: "20px" }}>
        <span style={{ color: "#000" }} className="custom-text">
          Discover Upcoming Events:
        </span><br />
        <span style={{ color: "#000"}} className="custom-text">
          Sort by: { categories.map((value, index) => {
            return <a key={ index } onClick={ () => { onClickSort(value) } }> { value } </a>
          }) }
        </span>

        <div>
          <div className={styles.bg}></div>
          <div className={styles.event}>
            { allEvents.map((element: IEvent, index: number) => (
              <div key={ element.id } style={{ paddingLeft: index % 2 ? "40px": "0px" }}>
                <EventComponent params={ element } onSubscribeEventHandler={ onClickSubscribe } />
              </div>
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