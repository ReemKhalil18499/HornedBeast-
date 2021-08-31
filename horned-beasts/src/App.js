import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./components/SelectedBeast";
import dataJson from "./assets/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Header />
        <Main data={dataJson} />
        <Footer />
        <SelectedBeast show={this.state.show}  />
        
        
      </div>
    );
  }
}

export default App;
