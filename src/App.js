import React from "react";
import EXIF from "exif-js";
import "./App.css";

export default class extends React.Component {
  getImageDetails = ({ target: imgNode }) => {
    EXIF.getData(imgNode, function() {
      const exifData = EXIF.getAllTags(imgNode);
      console.log('exifData: ', exifData);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>EXIF Test</h1>
        <img
          id="img1"
          onClick={this.getImageDetails}
          style={{ height: 240, cursor: "pointer" }}
          src={require('./images/ppttestimage.jpg')}
          alt="this is an alt for the pic"
        />
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}
