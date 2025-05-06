import logo from "./logo.svg";
// import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";

import menus from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indecator";
import TabTest from "./components/custom-tabs/tabs-test";
import ModelTest from "./components/custom-model-popup/model-test.jsx";


function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian /> */}

      {/* Random Color */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStarts={3} /> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load More Data */}
      {/* <LoadMoreData /> */}

      {/* Menu List */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator */}
      {/* <QrCodeGenerator/> */}

      {/* Light Dark Mode */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs */}
      {/* <TabTest/> */}

      {/* Custom Model */}
      <ModelTest/>
      
    </div>
  );
}

export default App;
