import React from "react";

import { Button, Img, Line, Text } from "components";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[130px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-900 flex flex-col items-end justify-start p-[55px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col justify-start mb-[71px] mr-[100px] w-[70%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[90px] w-[91%] md:w-full">
                <Text
                  className="text-[17px] text-white-A700"
                  size="txtInterExtraBold17"
                >
                  Home
                </Text>
                <Text
                  className="md:ml-[0] ml-[50px] text-[17px] text-white-A700"
                  size="txtInterMedium17"
                >
                  Church
                </Text>
                <Text
                  className="md:ml-[0] ml-[52px] text-[17px] text-white-A700"
                  size="txtInterMedium17"
                >
                  Community
                </Text>
                <Text
                  className="md:ml-[0] ml-[52px] text-[17px] text-white-A700"
                  size="txtInterMedium17"
                >
                  Connect
                </Text>
                <Text
                  className="md:ml-[0] ml-[52px] text-[17px] text-white-A700"
                  size="txtInterMedium17"
                >
                  Serve
                </Text>
                <Button className="bg-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[184px] md:ml-[0] ml-[117px] py-5 rounded-[30px] text-[17px] text-black-900 text-center">
                  Join With Us
                </Button>
              </div>
              <Text
                className="md:ml-[0] ml-[213px] mt-[125px] text-white-A700 text-xl uppercase"
                size="txtInterExtraBold20"
              >
                Welcome to our church
              </Text>
              <Text
                className="mt-4 md:text-5xl text-[70px] text-center text-white-A700 uppercase w-[77%] sm:w-full"
                size="txtInterExtraBold70"
              >
                Become a part of our community
              </Text>
              <Text
                className="leading-[24.00px] md:ml-[0] ml-[108px] mt-[25px] text-center text-white-A700 text-xl w-[54%] sm:w-full"
                size="txtInterMedium20"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </Text>
              <Button className="bg-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[173px] md:ml-[0] ml-[266px] mr-[479px] mt-[50px] py-5 rounded-[30px] text-[17px] text-black-900 text-center">
                Learn More
              </Button>
            </div>
          </div>
          <Text
            className="mt-[122px] text-center text-gray-900_01 text-xl"
            size="txtInterMedium20Gray90001"
          >
            ABOUT US
          </Text>
          <Text
            className="mt-[19px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900_01 text-center"
            size="txtInterSemiBold50"
          >
            Lorem ipsum dolor sit amet consect
          </Text>
          <Img
            className="h-[348px] sm:h-auto max-w-[969px] mt-9 mx-auto object-cover w-full"
            src="images/img_rectangle1.png"
            alt="rectangleOne"
          />
          <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-center max-w-[969px] mt-[43px] mx-auto md:px-5 w-full">
            <Text
              className="sm:flex-1 leading-[22.00px] text-[15px] text-gray-700 w-[49%] sm:w-full"
              size="txtInterMedium15"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit ametit, sed do. Lorem ipsum dolor sit amet,
              consectetur t, sed t amet, consectetur adipiscing elit, sed
              do.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do. Lorem ipsum dolor sit amet,
            </Text>
            <Text
              className="sm:flex-1 leading-[22.00px] text-[15px] text-gray-700 w-[49%] sm:w-full"
              size="txtInterMedium15"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit ametit, sed do. Lorem ipsum dolor sit amet,
              consectetur t, sed t amet, consectetur adipiscing elit, sed
              do.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do. Lorem ipsum dolor sit amet,
            </Text>
          </div>
          <Button className="bg-white-A700 border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[173px] mt-[61px] py-5 rounded-[30px] text-[17px] text-black-900 text-center">
            Learn More
          </Button>
          <div className="bg-gray-900 flex flex-col items-center justify-end mt-[70px] p-[59px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[9px] items-start justify-start max-w-[1188px] mt-[17px] mx-auto w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-[70%] md:w-full">
                <Text
                  className="text-center text-lg text-white-A700"
                  size="txtInterMedium18"
                >
                  REFLECTION
                </Text>
                <Button className="bg-blue_gray-700 cursor-pointer font-semibold leading-[normal] min-w-[180px] py-[15px] rounded-[25px] text-[17px] text-center text-white-A700">
                  JULY 25, 2023
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Text
                  className="sm:flex-1 leading-[77.00px] md:text-5xl text-6xl text-white-A700 w-[29%] sm:w-full"
                  size="txtInterSemiBold60"
                >
                  God’s Word Today
                </Text>
                <Text
                  className="bg-white-A700 flex h-[70px] items-center justify-center mb-[73px] md:ml-[0] ml-[141px] md:mt-0 mt-[11px] sm:px-5 rounded-[50%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center w-[70px]"
                  size="txtConsolasBold50"
                >
                  “
                </Text>
                <div className="flex flex-col font-inter gap-[33px] items-start justify-start md:ml-[0] ml-[99px]">
                  <Text
                    className="leading-[30.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtInterMedium22"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do. Lorem ipsum dolor sit ametit, sed do.
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtInterBold20"
                  >
                    JOHN 3:16
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[145px] text-center text-gray-900_01 text-xl"
            size="txtInterMedium20Gray90001"
          >
            LOREM IPSUM
          </Text>
          <Text
            className="mt-3.5 sm:text-[40px] md:text-[46px] text-[50px] text-black-900_01 text-center"
            size="txtInterSemiBold50"
          >
            Our Mission and Vision
          </Text>
          <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start max-w-[1163px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start mb-3 w-[49%] md:w-full">
              <Img
                className="h-[610px] sm:h-auto object-cover w-full"
                src="images/img_rectangle3.png"
                alt="rectangleThree"
              />
              <Text
                className="mt-[54px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900_01"
                size="txtInterMedium25"
              >
                MISSION
              </Text>
              <Text
                className="leading-[58.00px] mt-[18px] sm:text-4xl md:text-[38px] text-[40px] text-gray-700 w-full"
                size="txtInterRegular40"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit ametit.
              </Text>
              <Button className="bg-gray-900 border border-solid border-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[153px] mt-[18px] py-[15px] rounded-[25px] text-[17px] text-center text-white-A700">
                Learn More
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900_01"
                size="txtInterMedium25"
              >
                VISION
              </Text>
              <Text
                className="leading-[58.00px] mt-[18px] sm:text-4xl md:text-[38px] text-[40px] text-gray-700 w-full"
                size="txtInterRegular40"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit ametit.
              </Text>
              <Button className="bg-gray-900 border border-solid border-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[153px] mt-[18px] py-[15px] rounded-[25px] text-[17px] text-center text-white-A700">
                Learn More
              </Button>
              <Img
                className="h-[610px] sm:h-auto mt-9 object-cover w-full"
                src="images/img_rectangle4.png"
                alt="rectangleFour"
              />
            </div>
          </div>
          <Line className="bg-blue_gray-100 h-0.5 mt-[122px] w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1221px] mt-[157px] mx-auto md:px-5 w-full">
            <div className="md:h-[467px] h-[468px] relative w-[47%] md:w-full">
              <div className="absolute bg-blue_gray-100 bottom-[0] h-[368px] right-[0] w-[88%]"></div>
              <div className="absolute bg-gray-900 flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto p-8 sm:px-5 w-[88%]">
                <div className="flex flex-col items-start justify-start mt-6 w-[92%] md:w-full">
                  <Text
                    className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterMedium22"
                  >
                    WEEK 01
                  </Text>
                  <Text
                    className="leading-[64.00px] mt-2.5 sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 w-3/4 sm:w-full"
                    size="txtInterSemiBold45"
                  >
                    Early Year Worship
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[23px] text-[15px] text-white-A700 w-[98%] sm:w-full"
                    size="txtInterMedium15WhiteA700"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do. Lorem ipsum dolor sit ametit, sed do. Lorem. do. Lorem
                    ipsum dolor sit ametit, sed do. Lorem.
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-6 w-full">
                    <div className="flex flex-col gap-[11px] items-start justify-start mt-[3px]">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterBold20"
                      >
                        Rev. John Doe
                      </Text>
                      <Text
                        className="text-[15px] text-white-A700"
                        size="txtInterMedium15WhiteA700"
                      >
                        JULY 25, 2023
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-700 cursor-pointer font-extrabold leading-[normal] min-w-[185px] py-5 rounded-[33px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                      04:00 PM
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[3px] right-[0] top-[10%]"
                src="images/img_line1.svg"
                alt="lineOne"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[44%] md:w-full">
              <Text
                className="text-[17px] text-center text-gray-900_01"
                size="txtInterMedium17Gray90001"
              >
                OUR EVENT
              </Text>
              <Text
                className="leading-[64.00px] mt-[13px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900_01 w-[83%] sm:w-full"
                size="txtInterSemiBold50"
              >
                Join and Connect with us
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-[15px] text-gray-700 w-full"
                size="txtInterMedium15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit ametit, sed do. Lorem..
              </Text>
              <Text
                className="mt-[22px] text-[17px] text-gray-700 tracking-[1.36px]"
                size="txtInterBold17"
              >
                4X - SUNDAY WORSHIP
              </Text>
              <Text
                className="mt-[23px] text-[17px] text-gray-700 tracking-[1.36px]"
                size="txtInterBold17"
              >
                2X - HOLY COMMUNION
              </Text>
              <Button className="bg-gray-900 border border-solid border-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[166px] mt-10 py-5 rounded-[30px] text-[17px] text-center text-white-A700">
                Join Now
              </Button>
            </div>
          </div>
          <Line className="bg-blue_gray-100 h-0.5 mt-[203px] w-full" />
          <Text
            className="mt-[88px] text-center text-gray-900_01 text-xl"
            size="txtInterMedium20Gray90001"
          >
            OUR COMMUNITY
          </Text>
          <Text
            className="leading-[72.00px] mt-[17px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900_01 text-center w-[70%] sm:w-full"
            size="txtInterSemiBold50"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.
          </Text>
          <div className="flex md:flex-col flex-row gap-[22px] items-center justify-start max-w-[1162px] mt-[59px] mx-auto md:px-5 w-full">
            <div className="h-[402px] relative w-1/2 md:w-full">
              <Img
                className="h-[402px] m-auto object-cover w-full"
                src="images/img_rectangle5.png"
                alt="rectangleFive"
              />
              <Button className="absolute bg-gray-800 cursor-pointer font-semibold h-[58px] leading-[normal] py-4 right-[7%] rounded-[29px] text-center text-white-A700 text-xl top-[7%] w-[204px]">
                JUL 25, 2023
              </Button>
            </div>
            <div className="h-[402px] relative w-1/2 md:w-full">
              <Img
                className="h-[402px] m-auto object-cover w-full"
                src="images/img_rectangle6.png"
                alt="rectangleSix_Two"
              />
              <Button className="absolute bg-gray-800 cursor-pointer font-semibold h-[58px] leading-[normal] py-4 right-[7%] rounded-[29px] text-center text-white-A700 text-xl top-[7%] w-[204px]">
                JUL 25, 2023
              </Button>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[881px] mt-[34px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01"
              size="txtInterSemiBold32"
            >
              Youth Worship
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01"
              size="txtInterSemiBold32"
            >
              Children’s Worship
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start max-w-[1123px] mt-2.5 mx-auto md:px-5 w-full">
            <Text
              className="sm:flex-1 leading-[27.00px] text-[15px] text-gray-700 w-[48%] sm:w-full"
              size="txtInterMedium15"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit ametit, sed do. Lorem ipsum dolor sit amet,
              consectetur t, sed t amet, consectetur adipiscing elit, sed.
            </Text>
            <Text
              className="sm:flex-1 leading-[27.00px] text-[15px] text-gray-700 w-[48%] sm:w-full"
              size="txtInterMedium15"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit ametit, sed do. Lorem ipsum dolor sit amet,
              consectetur t, sed t amet, consectetur adipiscing elit, sed.
            </Text>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between mt-4 md:px-5 w-[54%] md:w-full">
            <Button className="bg-white-A700 border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[178px] py-5 rounded-[30px] text-[17px] text-black-900 text-center">
              See More
            </Button>
            <Button className="bg-white-A700 border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[178px] py-5 rounded-[30px] text-[17px] text-black-900 text-center">
              See More
            </Button>
          </div>
          <footer className="flex font-robotocondensed items-center justify-center mt-[88px] md:px-5 w-full">
            <div className="h-[270px] md:h-[311px] mb-[41px] relative w-full">
              <Img
                className="h-[270px] m-auto object-cover w-full"
                src="images/img_backgroundshape.png"
                alt="backgroundshape"
              />
              <div className="absolute bottom-[23%] flex flex-row sm:gap-10 items-start justify-between left-[8%] w-[43%]">
                <div className="flex flex-col gap-[31px] items-start justify-start mt-[3px] w-1/4">
                  <Text
                    className="text-center text-white-A700 text-xs uppercase"
                    size="txtRobotoCondensedRegular12"
                  >
                    © Copyright Finsweet 2022
                  </Text>
                  <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-white-A700 text-xs uppercase"
                      >
                        <Text size="txtRobotoCondensedRegular12">
                          (480) 555-0103
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-3.5 text-white-A700 text-xs uppercase"
                      >
                        <Text size="txtRobotoCondensedRegular12">
                          4517 Washington Ave.{" "}
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-4 text-white-A700 text-xs uppercase"
                      >
                        <Text size="txtRobotoCondensedRegular12">
                          finsweet@example.com
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col font-inter gap-[21px] items-start justify-start w-[21%]">
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterRegular16"
                  >
                    Connect with us
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start w-[72%] md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_facebooknegative.svg"
                      alt="facebooknegativ"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_twitternegative.svg"
                      alt="twitternegative"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
