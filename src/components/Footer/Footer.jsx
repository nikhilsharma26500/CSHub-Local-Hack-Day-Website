import React from 'react';
import {SiDevpost} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlinePaperClip} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md">
                <p className="text-footer">say hello @ <a href="mailto:cshub.localhackday@gmail.com" className="text-footer" >cshub.localhack@gmail.com</a></p>

                </div>
                <div className="col-md-4">
                    <a href="https://cshub-local-hack-day.devpost.com/" className="text-footer"><SiDevpost className="mx-2" target="_blank"/></a>
                    <a href="https://www.instagram.com/cshub_york/" className="text-footer"><BsInstagram className="mx-2" target="_blank"/></a>

                </div>
                <div className="mlh col-md">MLH Code of Conduct
                <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="text-footer"><AiOutlinePaperClip className="mx-2"/></a>
                </div>
            </div>
        </div>
    </footer>
)
}


export default Footer;
