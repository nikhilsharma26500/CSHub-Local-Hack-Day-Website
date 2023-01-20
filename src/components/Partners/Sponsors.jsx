import React from "react";
import github from '../../Assets/github.png'
import mlh from '../../Assets/mlh.png'
import les from '../../Assets/les.png'
import radix from '../../Assets/radix.png'
import stack from '../../Assets/stack.png'
import twilio from '../../Assets/twilio.png'
import yfs from '../../Assets/yfs.png'
import ovra from '../../Assets/ovra.jfif'

const Sponsors = () => {
  return (
    <div id="sponsorsp">
    <div className="sponsors flex-section">
      <div className="container">
        <div className="sponsors-title"><p>Sponsors & Partners</p></div>
        <div className="row">
          <div className="partners col-sm">
            <div className="head">Partners</div>
            <div className="col">
              <img src={ovra} />
            </div>
            <div className="col">
              <img src={yfs} />
            </div>
          </div>

          <div className="partners col-sm">
            <div className="head">In-Kind</div>
            <div className="col">
              <img src={github} />
            </div>
            <div className="col">
              <img src={twilio} />
            </div>
            <div className="col">
              <img src={stack} />
            </div>
            <div className="col">
              <img src={radix} />
            </div>
          </div>

          <div className="partners col-sm">
            <div className="head">Regular Sponsors</div>
            <div className="col">
              <img src={les} style={{zIndex:"1"}}/>
            </div>
            <div className="col">
              <img src={mlh} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sponsors;
