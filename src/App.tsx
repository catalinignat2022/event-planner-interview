import { observer } from "mobx-react";
import HeaderComponent from "./components/header/header.component";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import DashboardPage from "./pages/dashboard/dashboard.page";
import { ConfigProvider, Button, Card } from "antd";
import { useServices } from "./hooks/use-services.hook";


const App = observer(() => {
  const services = useServices();
  const renderContent = () => {
    return (
      <ConfigProvider>
        <div className={`app ${services.eventPlanner.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
          <Header>
            <HeaderComponent />
          </Header>
          <Layout>
            <Content>
              <DashboardPage />
            </Content>
          </Layout>
        </div>
      </ConfigProvider>
    );
  };

  const getApp = () => {
    return (
      <>
        {renderContent()}
      </>
    );
  };

  return getApp();
});

export default App;
