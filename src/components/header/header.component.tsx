import React from "react";
import { observer } from "mobx-react";
import styles from "./header.component.module.scss";
import { Row, Col } from "antd";
import { Switch } from 'antd';

export const HeaderComponent: React.FC = observer(
  () => {
    const renderChangeThemeRadio = () => {
      return (<div>
      <Switch defaultChecked onChange={onChange} />
    </div>)
    };

    const rightSide = () => {
        return (
          <div className={styles.right}>
            <div className={styles.wallet}>
              { renderChangeThemeRadio() }
            </div>
          </div>
        );
    };

    const onChange = (checked: boolean) => {
      console.log(`switch to ${checked}`);
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
