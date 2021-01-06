import React from "react";
import "./Home.css";
import { AiOutlineApple } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaTshirt } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoBarbell } from "react-icons/io5";
import { BiCar } from "react-icons/bi";
import { GiBabyFace } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import { BiMinusCircle } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaSellcast } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="left_container">
          <div className="content">
            <p className="link">
              <AiOutlineApple className="left_icon" />
              Supermarket
            </p>
            <p className="link">
              <GiSelfLove className="left_icon" />
              Heath & Beauty
            </p>
            <p className="link">
              <AiOutlineHome className="left_icon" />
              Home & Office
            </p>
            <p className="link">
              <GiSmartphone className="left_icon" />
              Phones & Tablets
            </p>
            <p className="link">
              <HiOutlineDesktopComputer className="left_icon" />
              Computing
            </p>
            <p className="link">
              <MdLiveTv className="left_icon" />
              Electronics
            </p>
            <p className="link">
              <FaTshirt className="left_icon" />
              Fashion
            </p>
            <p className="link">
              <GiBabyFace className="left_icon" />
              Baby Products
            </p>
            <p className="link">
              <IoGameControllerOutline className="left_icon" />
              Gaming
            </p>
            <p className="link">
              <IoBarbell className="left_icon" />
              Sporting Goods
            </p>
            <p className="link">
              <BiCar className="left_icon" />
              Automobile
            </p>
            <p className="link">
              <BiMinusCircle className="left_icon" />
              Other categories
            </p>
          </div>
        </div>
        <div className="middle_container">
          <img
            className="home_ad"
            src="https://ng.jumia.is/cms/Homepage/2021/w01/Slider-copy-2.jpg"
            alt=""
          />
        </div>
        <div className="right_container">
          <div className="left_content">
            <div className="content_one">
              <BsQuestionCircle className="right_icon" />
              <span className="mssge_text">
                <p className="head">HELP CENTER</p>
                <p className="small_text">Customer Care</p>
              </span>
            </div>
            <div className="content_two">
              <GiReturnArrow className="right_icon" />
              <span className="mssge_text">
                <p className="head">EASY RETURN</p>
                <p className="small_text">Quick Refund</p>
              </span>
            </div>
            <div className="content_three">
              <FaSellcast className="right_icon" />
              <span className="mssge_text">
                <p className="head">SELL ON JUMIA</p>
                <p className="small_text">Millions of Visitors</p>
              </span>
            </div>
          </div>
          <div className="right_ad">
            <img
              className="r_ad"
              src="https://ng.jumia.is//cms/Homepage/2020/W40/BSB-Jumia-Plus-.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="home_bottons">
        <div className="button_one">
          <img
            className="button_img"
            src="https://ng.jumia.is/cms/Homepage/2021/w01/cs-ql.png"
            alt=""
          />
          <p className="button_text">Clearance Sale</p>
        </div>
        <div className="button_two">
          <img
            className="button_img"
            src="https://ng.jumia.is/cms/QuickLinks/jumia-food-new.png"
            alt=""
          />
          <p className="button_text">Jumia Food</p>
        </div>
        <div className="button_three">
          <img
            className="button_img"
            src="https://ng.jumia.is/cms/BF20/Icon-red.png"
            alt=""
          />
          <p className="button_text">Official Stores</p>
        </div>
        <div className="button_four">
          <img
            className="button_img"
            src="https://ng.jumia.is/cms/QuickLinks/JumiaGlobal.png"
            alt=""
          />
          <p className="button_text">Jumia Global</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
