/* eslint-disable react/prop-types */
import React from "react";
import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  HideGridColumnMenuItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridColumnMenuFilterItem onClick={hideMenu} column={currentColumn} />
      {/* <HideGridColumnMenuItem onClick={hideMenu} column={currentColumn}/>      */}
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
