import React, { useState } from "react";

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "./SidebarStyles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';

import { SidebarItems } from "..";
import { DataSideBarItems } from "..";
import { DeviceSideBarItems } from "..";
import { ToolsSideBarItems } from "..";

const MOBILE_VIEW = window.innerWidth < 468;

export default function Sidebar({ children }) {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            <SidebarLogo href="#">
              <SidebarBrand
                displaySidebar={displaySidebar}
                className="wipass_text"
              >
                wipass
              </SidebarBrand>
            </SidebarLogo>
            {displaySidebar ? <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <ArrowBackIcon />
            </SidebarToggler> : <ArrowForwardIcon onClick={handleSidebarDisplay} />}
          </SidebarLogoWrapper>
          {displaySidebar ? "Data" : <Divider />}
          <DataSideBarItems displaySidebar={displaySidebar} />
          {displaySidebar ? " Device Management" : <Divider />}
          <DeviceSideBarItems displaySidebar={displaySidebar} />
          {displaySidebar ? "Tools" : <Divider />}
          <ToolsSideBarItems displaySidebar={displaySidebar} />
          <Divider />
          {displaySidebar ? "Tools" : ""}
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}
