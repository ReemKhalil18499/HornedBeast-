import React from "react";
import HornedBeasts from "./HornedBeasts";
import dataJson from "../assets/data.json";

class Main extends React.Component {
  render() {
    return (
      <main>
        {dataJson.map((item) => {
          return (
            <HornedBeasts
              title={item.title}
              desc={item.description}
              image_url={item.image_url}
              horns={item.horns}
              alt={item.keyword}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
