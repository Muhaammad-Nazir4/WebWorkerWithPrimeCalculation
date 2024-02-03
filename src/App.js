import React from "react";
import "antd/dist/antd.css";
import { Button, Layout, Typography, Divider } from "antd";
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

import W_TH from "./WithWebWorker";
import WO_TH from "./WithoutWebWorker";

class App extends React.PureComponent {
  state = {
    UI: "",
  };

  render() {
    return (
      <Layout
        style={{
          display: "flex",
          height: "100vh",
          minHeight: "100vh",
        }}
      >
        <Header>
          <Title style={{ color: "#fff", fontSize:'25px', textAlign:'center',paddingTop:'10px' }}>WebWorker Task</Title>
        </Header>
        <Content style={{ flex: 1, overflow: "scroll",  textAlign:'center' }}>
          <div
            style={{
              position: "sticky",
              background: "#fff",
              padding: 8,
              top: 0,
            }}
          >
            <Button style={{marginTop:"10px"}}
              type='primary'
              onClick={() => {
                this.setState({ UI: "THREADED" });
              }}
            >
              With WebWorker
            </Button>
            &nbsp;&nbsp;
            <Button style={{marginTop:"10px"}}
            type='primary'
              onClick={() => {
                this.setState({ UI: "UN_THREADED" });
              }}
            >
              Without WebWorker
            </Button>
          </div>
          <div style={{ display: "flex", flex: 1, overflow: "scroll" }}>
            {this.state.UI === "UN_THREADED" ? <WO_TH /> : null}
            {this.state.UI === "THREADED" ? <W_TH /> : null}
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;
