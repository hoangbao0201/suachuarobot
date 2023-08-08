import { styled } from "styled-components";
import { iconProfile, iconSend, iconUserEdit } from "../../../public/icons";
import { useState } from "react";



const OverAnimationStyles = styled.div`
    width: 60px;
    height: 60px;
    top: -10px;
    position: absolute;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    border: 2px solid transparent;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    background-color: rgba(46, 204, 113, 0.3);
    opacity: .75;
    right: -10px;
    animation-iteration-count: infinite;
    animation-name: pulse;
    animation-duration: 1s;
    animation-fill-mode: both;
    text-align: left;

    @keyframes pulse {
        0% {
            transform: scale3d(1, 1, 1);
        }
        50% {
            transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
            transform: scale3d(1, 1, 1);
        }
    }
`

const BorAnimationStyles = styled.div`
    width: 50px;
    height: 50px;
    top: -5px;
    right: -5px;
    position: absolute;
    animation-iteration-count: infinite;
    background-color: transparent;
    -moz-border-radius: 100%;
    border-radius: 100%;
    border: 2px solid rgba(30, 30, 30, 0.4);
    opacity: .1;
    border-color: #2ecc71;
    opacity: .5;
    animation-name: zoomIn;
    animation-duration: 1s;
    animation-fill-mode: both;
    text-align: left;

    @keyframes zoomIn {
        0% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
        50% {
            opacity: 1;
        }
    }
`

const ContactSupport = () => {

    const [isShow, setIsShow] = useState(false);

    return (
        <div className="fixed right-8 bottom-8 z-[999]">
            
            <div className="relative">
                <div className="cursor-pointer" onClick={() => setIsShow(value => !value)}>
                    <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-center align-middle">
                        <i className="[&>svg]:w-4 [&>svg]:h-4 fill-white block">{iconProfile}</i>
                    </div>
                    <BorAnimationStyles />
                    <OverAnimationStyles />
                </div>

                <ul className={`absolute top-0 transition-all gap-5 ${isShow ? 'grid -translate-y-48' : 'hidden -translate-y-6'}`}>
                    <li className="cursor-pointer relative">
                        <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-center align-middle">
                            <i className="[&>svg]:w-4 [&>svg]:h-4 fill-white block">{iconProfile}</i>
                        </div>
                        <BorAnimationStyles />
                        <OverAnimationStyles />
                    </li>
                    <li className="cursor-pointer relative">
                        <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-center align-middle">
                            <i className="[&>svg]:w-4 [&>svg]:h-4 fill-white block">{iconSend}</i>
                        </div>
                    </li>
                    <li className="cursor-pointer relative">
                        <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-center align-middle">
                            <i className="[&>svg]:w-4 [&>svg]:h-4 fill-white block">{iconProfile}</i>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default ContactSupport;