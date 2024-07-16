import React from "react";
import style from "./style.module.css";
import { useMediaQuery } from "react-responsive";
import DeividComponents from "../DeividComponents";
import AnaComponents from "../AnaComponents";
import LarissaComponent from "../LarissaComponents";
import AnnounAndReminders from "../AnnounAndReminders";
import RecentlyActivity from "../RecentlyActivity";

const ResponsibleContainer = () => {
  // mx-5 sm:mx-[7%] lg:mx-[4.2%]
  return (
    <>
      <h1 className="font-medium text-[#161E54] text-xl my-[10px] ">
        Dashboard
      </h1>
      <div className={style.dash_board}>
        <div id="firstSection" className={style.firstSection}>
          <DeividComponents />
        </div>
        <div id="secondSection" className={style.secondSection}>
          <AnaComponents />
        </div>
        <div id="thirdSection" className={style.thirdSection}>
          <AnnounAndReminders />
        </div>
      <div className={style.fourthAndFifth}>
        <div id="fourthSection" className={style.fourthSection}>
          <RecentlyActivity />
        </div>
        <div id="fifthSection" className={style.fifthSection}>
          <LarissaComponent />
        </div>
      </div>
      </div>
    </>
  );
};

export default ResponsibleContainer;
