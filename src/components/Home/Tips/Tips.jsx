import './Tips.css'
function Tips() {
    return (
      <div className="Tips">
        <div className="tips3">
          <h2>
            Tips for designing <br /> a modern office
          </h2>
          <span>
            <b>01</b> Open up the space
          </span>
          <span>
            <b>02</b> Introduce more light
          </span>
          <span>
            <b>03</b> Consider glass partitions
          </span>
        </div>
        <img
          src={
            "https://images01.nicepage.com/6f/ef/6fefae6e5b483d19430b172da4da2bd3.jpeg"
          }
          alt=""
        />
      </div>
    );
}

export default Tips
