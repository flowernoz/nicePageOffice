import OfficeDesign from "./OfficeDesign/OfficeDesign";
import EfficientLayouts from "./EfficientLayouts/EfficientLayouts";
import HomeBanner from "./HomeBanner/HomeBanner";
import IconCards from "./IconCard/IconCards";
import './Home.css'
import OfficeLayoutsImgs from "./OfficeLayoutsImgs/OfficeLayoutsImgs";
import Tips from "./Tips/Tips";
import CreativeOffice from "./CreativeOffice/CreativeOffice";
function Home() {
    return <div className="Home">
      <HomeBanner />
      <IconCards />
      <OfficeDesign />
      <EfficientLayouts />
      <OfficeLayoutsImgs />
      <Tips />
      <CreativeOffice/>
  </div>;
}

export default Home;
