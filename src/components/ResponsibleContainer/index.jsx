import React from "react";
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
  // const mobileContainer = "flex flex";

  return (
    <div className="flex flex-col w-auto mx-5 gap-[26px]">
      <h1 className="font-medium text-[#161E54] text-xl my-[5px]">Dashboard</h1>
      <DeividComponents />
      <AnaComponents />
      <AnnounAndReminders />
      <RecentlyActivity />
      <LarissaComponent />
    </div>
  );
};

export default ResponsibleContainer;
