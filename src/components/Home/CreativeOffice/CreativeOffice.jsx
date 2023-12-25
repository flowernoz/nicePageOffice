import './CreativeOffice.css'
function CreativeOffice() {
    return (
      <div className="CreativeOffice">
        <div className="creativeImgs">
          <img
            src={
              " https://images01.nicepage.com/8b/03/8b0319c73241a4291ace760d3b862adc.jpeg"
            }
            alt=""
          />
          <img
            src={
              "https://images01.nicepage.com/9d/28/9d28d03f13a28d9e8cfe93783fd35b68.jpeg "
            }
            alt=""
          />
          <img
            src={
              " https://images01.nicepage.com/c4/be/c4be8c05d1f681e73205ee061346d9ea.jpeg"
            }
            alt=""
          />
          <img
            src={
              "https://images01.nicepage.com/83/59/8359cf635abff1aab3718871f52f599d.jpeg "
            }
            alt=""
          />
        </div>
        <div className="creativeText">
          <h2>Creative Office <br /> Layout Ideas</h2>
          <span>
            <span>
              New ideas for your office layout do not have to be time consuming
              or expensive! Whether you’re moving to a new space or trying to
              improve an existing one, you can refresh your office by following
              a few simple tips and tricks.
            </span>
            <span>
              Sure, it’s nice to perfectly recreate all those pictures you found
              on Pinterest, but if you don’t have the resources, don’t sweat!{" "}
            </span>
            <span>
              Are you ready to be inspired? Here are the coolest office layout
              ideas you can implement without breaking the bank or killing your
              schedule.
            </span>
          </span>
          <button className="learnMore">learn more</button>
        </div>
      </div>
    );
}

export default CreativeOffice
