import "./Landing.css";
import MediaHouse from "../../Assets/Images/media-house.svg";
import SoftwareHouse from "../../Assets/Images/software-house.svg";
import Pot from "../../Assets/Images/pot.svg";
import Laptop from "../../Assets/Images/laptop.svg";
import Navbar from "../Navbar/Navbar";

export default function Landing() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="gradient-text absolute flex z-20 justify-center ml-72 mr-72 text-6xl text-center font-bold leading-tight">Creating Digital Products Based On Your Needs</div>
        <div className="mt-56">
          <div className="visby flex absolute justify-center ml-60 mr-60 text-center mt-5 text-white text-lg z-30 tracking-[0.01rem]">
            Your digital product is uniquely designed to meet your specific needs. Our team of talented designers, developers and engineers provide the highest quality digital product possible and we will works with you at every step to
            ensure that your goals are met by the final product.
          </div>
          <div className="grid grid-cols-2">
            <div className="border h-[700px] w-full rounded-full gradient-circle blur-[200px] absolute z-10"></div>
            <div className="ml-56 mt-40">
              <div className="rounded-lg">
                <div className="flex absolute justify-center z-30 h-[490px] w-[500px] blur-none hover:scale-105 duration-300">
                  <div className="">
                    <img src={Laptop} className="absolute z-30 object-cover h-36 w-[210px] ml-[155px]" alt="Laptop" />
                  </div>
                  <div className="ml-5">
                    <img src={SoftwareHouse} className="absolute z-30 object-cover h-60  mt-11 ml-14" alt="Orang" />
                  </div>
                  <div className="">
                    <img src={Pot} className="absolute z-30 object-cover h-24 mt-36 ml-[265px]" alt="Pot" />
                  </div>
                  <div className="flex items-center">
                    <div className="gradient-card flex-col  rounded-3xl h-72 w-[400px] p-1">
                      <div className=" rounded-t-3xl h-32 bg-black"></div>
                      <div className="absolute z-30 text-center  w-[390px]">
                        <div className="gradient-card h-36">
                          <div className="flex items-center justify-center ">
                            <div className="mt-5 text-white text-3xl">Software House</div>
                          </div>
                          <div className="flex items-center justify-center mt-3 pr-2 pl-2">
                            <div className="visby text-white text-md">Develop, deliver and support custom-made software applications and services</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-24 mt-40">
              <div className="rounded-lg">
                <div className="flex absolute z-30 justify-center h-[490px] w-[500px] blur-none hover:scale-105 duration-300">
                  <img src={MediaHouse} className="absolute z-20 object-cover w-[310px]" alt="My Image" />
                  <div className="flex items-center ">
                    <div className="gradient-card flex-col rounded-3xl h-72 w-[400px] p-1">
                      <div className=" rounded-t-3xl h-32 bg-black"></div>
                      <div className="absolute z-30 text-center w-[390px]">
                        <div className="gradient-card h-36">
                          <div className="flex items-center justify-center">
                            <div className="mt-5 text-white text-3xl">Media House</div>
                          </div>
                          <div className="flex items-center justify-center mt-3 pr-2 pl-2">
                            <div className="visby text-white text-md tracking-wide">Produces, manages and distributes content, invests in media-related businesses.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
