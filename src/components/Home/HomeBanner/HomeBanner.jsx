import "./HomeBanner.css";

function HomeBanner() {
  let wid = window.innerWidth
  let height=window.innerHeight
  console.log(wid, height);
  return (
    <>
      <div className="HomeBanner">
        <div className="HomeBannerText">
          <h1>Best Design Offices</h1>
          <p>
            Meet workplaces of dreams sun splashed sprawling outdoor color
            saturated nooks are some hallmarks most, lovers of design would kill
            work in awesome office spaces.
          </p>
        </div>
      </div>
      <div className="HomeBannerPosition">
        <div className="HomeBannerPositionImg">
          <img
            src={
              "https://images01.nicepage.com/09/44/09445c0c818518d10fbacd13939d98bb.jpeg"
            }
            alt="office"
          />
        </div>
        <div className="tenIdeas">
          <b>10</b>
          <span>Office Ideas</span>
        </div>
        <p>
          Monday Consulting, an IT consultancy company based in Hamburg, Germany
        </p>
      </div>
      <div className="workplaces">
        <h2 className="background">
          The coolest workplaces <br /> offices in the world
        </h2>
        <span>
          Best office design of group layout. Are coolest workplaces offices in
          the world. Architecture studio arquitectes life. Home office best
          design interior luxury offices. Office design ideas make work my home
          organization. Home office setup ideas offices in small furniture
          layout. Office interior design dreams house furniture cool interiors.
          Interior ideas decorating a home office of bamboo rod. Home office
          space ideas design small decorating. Bloc offices new york city office
          snapshots modern design.
        </span>
        <button className="learnMore">read more</button>
      </div>
    </>
  );
}

export default HomeBanner;
