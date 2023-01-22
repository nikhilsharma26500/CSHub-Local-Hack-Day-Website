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
            <div className="head">Sponsors</div>
            <div className="col">
            <a href="https://lassonde.yorku.ca/">
              <img src={les} style={{zIndex:"1"}}/>
              </a>
            </div>
            <div className="col">
            <a href="https://github.com">
              <img src={mlh} />
              </a>
            </div>
          </div>
                    <div className="partners col-sm">
            <div className="head">In-Kind</div>
            <div className="col">
            <a href="https://github.com">
              <img src={github} />
              </a>
            </div>
            <div className="col">
            <a href="https://www.twilio.com/">
              <img src={twilio} />
              </a>
            </div>
            <div className="col">
            <a href="https://stackoverflow.com/">
              <img src={stack} />
              </a>
            </div>
            <div className="col">
            <a href="https://www.radixdlt.com/">
              <img src={radix} />
              </a>
            </div>
          </div>
          <div className="partners col-sm">
            <div className="head">Partners</div>
            <div className="col">
            <a href="https://ovra.io/">
              <img src={ovra} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sponsors;
