import TestimonialImg from "../assets/img/testimonial/img.svg";
import BackSvg from "../assets/img/features/back.svg";
import StarSvg from "../assets/img/features/star.svg";
import UserSvg from "../assets/img/testimonial/user.svg";
import UserSecSvg from "../assets/img/testimonial/user-sec.svg";
export const Testomonial = () => {
    return (
        <section className="testomonial" id="testomonial">
            <div className="page">
                <div className="testominal-heading text-black">
                    <h1 className="text-black font-semibold">TESTIMONIAL</h1>
                </div>
                <div className="testimonial-subheading">
                    <h1 className="text-black">What Our Users<br /> Say About Us?</h1>
                </div>
                <div className="testimonal-bx flex flex-row max-sm:flex-col">
                    <div className="testimonial-img w-1/2 max-sm:w-full">
                        <div className="back-glow">
                            <img src={BackSvg} alt="back" />
                        </div>
                        <div >
                            <img style={{ width: "100%" }} src={TestimonialImg} alt="img" />

                        </div>
                        <img src={StarSvg} alt="star" />

                    </div>
                    <div className="testimonial-content w-2/5 ms-8 max-sm:w-full max-sm:ms-0">
                        <div className="head-bx">
                            <h1 style={{ color: "black", lineHeight: "30px" }}>
                                The Best Financial Accounting App Ever!
                            </h1>

                        </div>
                        <p className="mt-8">
                            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                        </p>
                        <div className="user-icon">
                            <div>
                                <img src={UserSvg} alt="user-svg" />

                            </div>
                            <div style={{ marginTop: "5px", marginLeft: "10px" }}>
                                <img style={{ opacity: "50%" }} src={UserSecSvg} alt="user-svg" />

                            </div>
                        </div>
                        <div className="user-name">
                            <h4 style={{ color: "black", marginTop: "3%" }}>Nick Jonas</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}