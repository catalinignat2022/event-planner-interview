import { observer } from "mobx-react";
import HeaderComponent from "./components/header/header.component";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import DashboardPage from "./pages/dashboard/dashboard.page";

const App = observer(() => {

  const renderContent = () => {
    return (
      <Layout className="app">
      <Header>
        <HeaderComponent
        />
      </Header>
      <Layout>
        <Content>
          <DashboardPage/>
        </Content>
      </Layout>
    </Layout>
    )
  }

  const getApp = () => {
    return (
      <>
        { renderContent() }
    </>
    );
  };

  return getApp();
});

export default App;
