import { Link } from "react-router-dom";
import './IconCards.css'
import { LiaCameraRetroSolid } from "react-icons/lia";
import { FaRegLightbulb } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { RiUser2Line } from "react-icons/ri";
import { PiRocketLight } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
function IconCards() {
  const cartIcons = [
    { svg: <LiaCameraRetroSolid />, title: "Gallery" },
    { svg: <FaRegLightbulb />, title: "Ideas" },
    { svg: <GiTrophyCup />, title: "Awards" },
    { svg: <PiRocketLight />, title: "FEATURES" },
    { svg: <RiUser2Line />, title: "Design" },
    { svg: <MdSupportAgent />, title: "Support" },
  ];
  return (
    <div className="IconCards">
      {cartIcons.map((item, index) => (
        <Link key={index} className="CardIconItem">
          {item.svg}
          <p>{item.title} </p>
        </Link>
      ))}
    </div>
  );
}

export default IconCards;
