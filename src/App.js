import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import dataJson from "./assets/data.json";
import SelectedBeast from "./components/SelectedBeast";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJson,
      show: false,
      title: "",
      description: "",
      imgSrc: "",
      horns: "",
      filterData:dataJson,
    };
  }
  NewNum = (event) => {
    console.log(event.target.value);
    console.log(this.state.filterData);
    let valueNum=event.target.value;
    let newData=this.state.data;
    let filterNum=newData.filter(item=>{
      if (item.horns === valueNum){
        return item;
      }else if (valueNum === "All") {
        return item;
      }
    });
    this.setState({
      filterData:filterNum
    });
    console.log(this.state.filterData);
  };

  show = (title) => {
    const filterData = dataJson.filter((item) => {
      if (title === item.title) {
        console.log(item);
        return item;
      }
    });
    this.setState({
      show: true,
      data: filterData,
    });
  };

  selectedBeastsFunction = (title, description, imgSrc, horns) => {
    this.setState({
      title: title,
      description: description,
      imgSrc: imgSrc,
      horns: horns,
    });

    console.log(title);
  };

  close = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Form NewNum={this.NewNum} />
        <Main
          data={this.state.filterData}
          show={this.show}
          selectedBeastsFunction={this.selectedBeastsFunction}
        />
        <SelectedBeast
          title={this.state.title}
          close={this.close}
          description={this.state.description}
          data={this.state.data}
          show={this.state.show}
          imgSrc={this.state.imgSrc}
          horns={this.state.horns}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
