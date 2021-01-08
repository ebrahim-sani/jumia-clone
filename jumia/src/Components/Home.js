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
        <div className="mid_content">
          <img className="home_img" src="/home_img.jpg" alt="" />
        </div>
        <div className="right_content">
          <div className="first_component">
            <div className="link">
              <BsQuestionCircle className="right_icon" />
              <span>
                <h3>HELP CENTER</h3>
                <p>Guide to Customer Care</p>
              </span>
            </div>
            <div className="link">
              <GiReturnArrow className="right_icon" />
              <span>
                <h3>EASY RETURN</h3>
                <p>Quick Refund</p>
              </span>
            </div>
            <div className="link">
              <FaSellcast className="right_icon" />
              <span>
                <h3>SELL ON JUMIA</h3>
                <p>Millions of Visitors</p>
              </span>
            </div>
          </div>
          <div className="second_component">
            <img
              src="https://ng.jumia.is//cms/Homepage/2020/W40/BSB-Jumia-Plus-.gif"
              alt="git_ad"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
