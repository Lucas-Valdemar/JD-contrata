import React from "react";
import style from "./style.module.css";
import { useMediaQuery } from "react-responsive";
import DeividComponents from "../DeividComponents";
import AnaComponents from "../AnaComponents";
import LarissaComponent from "../LarissaComponents";
import AnnounAndReminders from "../AnnounAndReminders";
import RecentlyActivity from "../RecentlyActivity";

const ResponsibleContainer = () => {
  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 1024px)",
  // });
  // const isTablet = useMediaQuery({ query: "(min-width: 425px)" });

  // const desktopContainer = "flex";
  // const tabletContainer = "flex";
  const mobileContainer = "flex flex-col w-auto mx-5 gap-[26px]";

  return (
    <>
      <h1 className="font-medium text-[#161E54] text-xl my-[5px] mx-5 sm:mx-[7%] lg:mx-[4.2%]">
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
