import ImageAbout from "../../Assets/Images/about.svg";
import "./about.css";
export default function About() {
  return (
    <>
      <div className="h-screen">
        <div className="">
          <div className="grid grid-cols-2 text-white">
            <div className="flex justify-center items-center pl-32 pb-28">
              <div className=" max-w-24 about-container">
                <div className="visbybold w-max text-2xl">
                  <div>ABOUT US</div>
                </div>
                <div className="flex gradient-text-about text-6xl mt-6 tracking-[0.04rem] leading-[70px]">
                  <div>
                    <span className="text-white">Our</span> Purposes{" "}
                    <div>
                      <span className="text-white">&</span> <span className="gradient-text-about">Goals</span>
                    </div>
                  </div>
                </div>
                <div className="visbyregular text-white font-semibold text-md w-full mt-6 tracking-[0.09rem] text-justify ">
                  Tsuki Software & Media House is a premium Digital Product Company based in Bandung, Indonesia, solely dedicated to creating the best digital products for you by working closely with you from concepts to completion.
                </div>
                <div className="visbyregular text-white font-semibold text-md w-full mt-6 tracking-[0.09rem] text-justify">
                  Having successfully created several products for many clients, our team is perfectly positioned to create the product that you need to stand out from the crowd.
                </div>
                <div className=" mt-10">
                  <button className="btn-gradient-2 rounded-lg bg-gradient-to-r from-[#00B0CD] to-[#01DBAD] hover:text-white">
                    <div className="visbymedium ">Explore More</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-56 about-container">
              <img src={ImageAbout} className="h-[500px] object-cover " alt="Laptop" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
