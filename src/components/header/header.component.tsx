import React from "react";
import { observer } from "mobx-react";
import styles from "./header.component.module.scss";
import { Row, Col } from "antd";
import { Switch } from 'antd';
import { useServices } from "../../hooks/use-services.hook";

export const HeaderComponent: React.FC = observer(
  () => {
    const services = useServices();

    //pentru afișarea switch-ului pentru schimbarea temei
    const renderChangeThemeRadio = () => {
      return (<div>
      <Switch  onChange={onChange} />
    </div>)
    };

    // pentru partea dreaptă a header-ului
    const rightSide = () => {
        return (
          <div className={styles.right}>
            <div className={styles.wallet}>
              { renderChangeThemeRadio() }
            </div>
          </div>
        );
    };

    //gestionarea evenimentului onChange al switch-ului
    const onChange = (checked: boolean) => {
      services.eventPlanner.theme = checked ? 'dark' : 'light';
    };
  
    return (
      <Row>
        <Col span={ 2 }>
          <a>Welcome</a>
        </Col>
        
        <Col span={22}>
        <header className={styles.Header} data-testid="Header">
            {rightSide()}
        </header>
        </Col>
    </Row>

    );
  }
);

export default HeaderComponent;
