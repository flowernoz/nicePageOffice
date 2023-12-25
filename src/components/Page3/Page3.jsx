import './Page3.css'
function Page3() {
  return (
    <div className="Page3">
      <div className="Page3Imgs">
        <img
          src={
            " https://images03.nicepage.com/c461c07a441a5d220e8feb1a/8a56b415dd2d50ae9d0594f9/57e8d1464855ac14f6da8c7dda79367d1d38d6ed5b586c4870287dd4914bc35db9_1280.jpg"
          }
          alt=""
        />
        <img
          src={
            "https://images03.nicepage.com/c461c07a441a5d220e8feb1a/6cc7b356c1e25ad68d28e165/57e0d6424a55a514f6da8c7dda79367d1d38d6ed5b586c4870287dd4914bc350ba_1280.jpg "
          }
          alt=""
        />
        <img
          src={
            "https://images03.nicepage.com/c461c07a441a5d220e8feb1a/62b5fd1f937050ef8bd0a63d/51e9d44b4856b108f5d08460962934761237d6ed5a4c704c72297bd2914bcd5a_1280.jpg "
          }
          alt=""
        />
        <img
          src={
            " https://images03.nicepage.com/c461c07a441a5d220e8feb1a/fc948cc3823b54bfaec987b6/57e8d3444c54af14f6da8c7dda79367d1d38d6ed5b586c4870287dd4914bc350ba_1280.jpg"
          }
          alt=""
        />
      </div>
      <div className="page3text">
        <p>LAYOUT IDEAS</p>
        <h2>Creative Office</h2>
        <span>
          <span>

          New ideas for your office layout do not have to be time consuming or
          expensive! Whether you’re moving to a new space or trying to improve
          an existing one, you can refresh your office by following a few simple
          tips and tricks.
          </span>
          <span>
            Sure, it’s nice to perfectly recreate all those pictures you found
            on Pinterest, but if you don’t have the resources, don’t sweat!
          </span>
        </span>
        <button className="learnMore">learn more</button>
      </div>
    </div>
  );
}

export default Page3;
