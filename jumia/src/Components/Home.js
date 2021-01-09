import React from "react";
import "./Home.css";
import TopProduct from "./TopProduct";
import Categories from "./Categories";
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
              className="right_ad"
              src="https://ng.jumia.is//cms/Homepage/2020/W40/BSB-Jumia-Plus-.gif"
              alt="Ad"
            />
          </div>
        </div>
      </div>
      <div className="btn_container">
        <div className="button">
          <div className="btn_con">
            <img
              className="btn_gif"
              src="https://ng.jumia.is/cms/Homepage/2021/w01/cs-ql.png"
              alt=""
            />
            <span className="btn_text">Clearance Sale</span>
          </div>
          <div className="btn_con">
            <img
              className="btn_gif"
              src="https://ng.jumia.is/cms/QuickLinks/jumia-food-new.png"
              alt=""
            />
            <span className="btn_text">Jumia Food</span>
          </div>
          <div className="btn_con">
            <img
              className="btn_gif"
              src="https://ng.jumia.is/cms/BF20/Icon-red.png"
              alt=""
            />
            <span className="btn_text">Official Stores</span>
          </div>
          <div className="btn_con">
            <img
              className="btn_gif"
              src="https://ng.jumia.is/cms/QuickLinks/JumiaGlobal.png"
              alt=""
            />
            <span className="btn_text">Jumia Global</span>
          </div>
        </div>
      </div>
      <div className="top_selling">
        <div className="topSelling_heading">
          <h3>Top selling items</h3>
        </div>
        <div className="topSelling_container">
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/996876/1.jpg?4315"
            title="F9-30 Wireless Headphones Blue.."
            price="₦ 1,800"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/426463/1.jpg?8622"
            title="Soundbar Bluetooth Speaker T.."
            price="₦ 6,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/035411/1.jpg?7658"
            title="Binatone Dry Iron DI-1255-Wh..."
            price="₦ 6,000"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/042456/1.jpg?2575"
            title="UMIDIGI A7S Infrared Te.."
            price="₦ 37,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/973734/1.jpg?4289"
            title="Color Screen Smart Bracelet D1.."
            price="₦ 2,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/285244/1.jpg?2247"
            title="100% Cotton 12 Pieces Of Men..."
            price="₦ 5,500"
          />
        </div>
      </div>
      <div className="deal_day">
        <div className="dealDay_heading">
          <h3>
            <strong>Deals of the Day</strong> | From ₦1, 000
          </h3>
        </div>
        <div className="topSelling_container">
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/035411/1.jpg?7658"
            title="Binatone Dry Iron DI-1255 - Wh..."
            price="₦ 6,000"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/996666/1.jpg?9057"
            title="Nexus 1.7L Electric kettle - NX..."
            price="₦ 3,000"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/096344/1.jpg?9265"
            title="Wireless Earbuds Headset Bluet..."
            price="₦ 5,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/843011/1.jpg?0974"
            title="Men's Lace-up Canvas - Blue.."
            price="₦ 3,600"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/042456/1.jpg?2575"
            title="UMIDIGI A7S Infrared Te.."
            price="₦ 37,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/042456/1.jpg?2575"
            title="UMIDIGI A7S Infrared Te.."
            price="₦ 37,900"
          />
        </div>
      </div>
      <div className="clearance_sale">
        <div className="clearance_heading">
          <h3>
            <strong>Clearance Sale</strong> | Up to 60% Off Women's Bags
          </h3>
        </div>
        <div className="topSelling_container">
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/238366/1.jpg?3293"
            title="LouisWill Women Lightweight C.."
            price="₦ 7,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/316606/1.jpg?3404"
            title="Ladies Backpag For..."
            price="₦ 3,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/316606/1.jpg?3484"
            title="Women Handbag For Women B..."
            price="₦ 5,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/131563/1.jpg?0775"
            title="Women 3 in 1 Shoulder.."
            price="₦ 7,900"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/421644/1.jpg?0912"
            title="Wax Bag Portable Messe..."
            price="₦ 7,999"
          />
          <TopProduct
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/152174/1.jpg?0340"
            title="Small Bags Messenger Ba..."
            price="₦ 37,900"
          />
        </div>
      </div>
      <div className="categores__product">
        <h3 className="categores_heading">Shop Our Collections</h3>
        <div className="categories__content">
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/ios-phones-hp.png"
            title="iOS Phones"
          />
          <Categories
            image="https://ng.jumia.is/cms/000_DesktopHomepage/01_cat.png"
            title="Android Phones"
          />
          <Categories
            image="https://ng.jumia.is/cms/000_DesktopHomepage/4_cat-(2).png"
            title="Televisions"
          />
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/TV_MANIA/9.jpg"
            title="Laptops"
          />
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/TV_MANIA/341.jpg"
            title="Kitchen Bundles"
          />
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/TV_MANIA/1D.jpg"
            title="Wigs"
          />
        </div>
        <div className="categories__content">
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/NG_Smartwatches.jpg"
            title="Smart Watches"
          />
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/Pics2.jpg"
            title="Toasters"
          />
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/clothing-men.png"
            title="Men's Shirts"
          />
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/Pics.jpg"
            title="Refrigerators"
          />
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/printers-hp.png"
            title="Printers"
          />
          <Categories
            image="https://ng.jumia.is/cms/00_MobileHomepage/icon-5.jpg"
            title="Keyboards"
          />
        </div>
      </div>
      <div className="ad_post">
        <div className="adPost_container">
          <img
            src="https://ng.jumia.is/cms/Homepage/2021/w01/Artboard-1-copy.png"
            alt=""
          />
          <img
            src="https://ng.jumia.is/cms/CHRISTMASSALE20/FLOOR/0E41D6FA-FC94-440B-A293-19833A599429.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
