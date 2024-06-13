import BannerRightImg from "../assets/img/banner/background_top_right.webp";
import BackImg from "../assets/img/banner/background_top_left.webp";
import ArrowSvg from "../assets/img/banner/arrow.svg";
import TapeSvg from "../assets/img/banner/tape.svg";
import { Data } from "./Data";

export const Banner = () => {
    return (
        <section className="banner max-sm:h-auto" id="banner">
            <div className="page">
                <div className="flex flex-row max-sm:flex-col-reverse">
                    <div className="heading w-3/5 pt-32 max-sm:w-full max-sm:pt-0">
                        <div className="header-info">
                            <h1>{Data.hero.subheadline}</h1>
                            <img className="back-img" src={BackImg} alt="backimg" />
                        </div>
                        <p className="pt-8">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div className="banner-btn-grp mt-6">

                            <button className="btn">Get Started <span><img style={{ marginLeft: "10px" }} src={ArrowSvg} alt="arrow" /></span> </button>

                            <div className="watch-video">
                                <svg className="icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                                    <path d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z" fill="black" stroke="black" />
                                </svg>
                                <span className="text">Watch Video</span>
                            </div>
                        </div>


                        <div className="tape-img">
                            <img src={TapeSvg} alt="tape-img" width={'569'} />
                        </div>

                    </div>
                    <div className="banner_right">
                        <div className="img">
                            <img src={BannerRightImg} alt="banner-img1" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}