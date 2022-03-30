import currency from "./currency.jpg";
import restuarant from "./restuarant.jpg";
import plane from "./plane.jpg";
import confet from "./confet.jpg";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="sec3-parent-div content-div">
        <h3 className="sec3-heading">Latest Articles</h3>
        <div className="sec3-row">
          <div className="sec3-col">
            <img className="sec3-img sec3-img1" src={currency} alt="img" />
            <span className="sec3-span">By Claire Robinson</span>
            <h4 className="sec3-sub-heading">
              Receive money in any currency with no fees
            </h4>
            <p className="para sec3-para">
              The world is getting more smaller and we are becoming more mobile.
              So why you should be force to only receive money in single...
            </p>
          </div>
          <div className="sec3-col">
            <img className="sec3-img" src={restuarant} alt="img" />
            <span className="sec3-span">By Wilson Hutton</span>
            <h4 className="sec3-sub-heading">
              Treat yourself without worrying about money
            </h4>
            <p className="para sec3-para">
              The world is getting more smaller and we are becoming more mobile.
              So why you should be force to only receive money in single...
            </p>
          </div>
          <div className="sec3-col">
            <img className="sec3-img" src={plane} alt="img" />
            <span className="sec3-span">By By Wilson Hutton</span>
            <h4 className="sec3-sub-heading">
              Take your Easybank card wherever you go
            </h4>
            <p className="para sec3-para">
              The world is getting more smaller and we are becoming more mobile.
              So why you should be force to only receive money in single...
            </p>
          </div>
          <div className="sec3-col">
            <img className="sec3-img" src={confet} alt="img" />
            <span className="sec3-span">By Claire Robinson</span>
            <h4 className="sec3-sub-heading">
              Our invite-only Beta accounts are now live!
            </h4>
            <p className="para sec3-para">
              The world is getting more smaller and we are becoming more mobile.
              So why you should be force to only receive money in single...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
