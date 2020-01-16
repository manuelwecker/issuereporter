import React from "react";
import styled from "@emotion/styled";
import SVGIcon from "../SVGIcon";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporateDesignSecondary};
`;

function Demonstration(props) {
  return (
    <SVGIcon {...props}>
      <Path d="M56.43,6.49a1.14,1.14,0,0,0-1.1-.07L31.64,17.72a13.74,13.74,0,0,1-3.08,1L8.11,21.9a1.17,1.17,0,0,0-.33.11A1.4,1.4,0,0,0,7,23a1.64,1.64,0,0,0,0,.23v15a1,1,0,0,0,0,.29,1.37,1.37,0,0,0,1,1h0l6.11,1L8.51,53.18a2.28,2.28,0,0,0,.17,2.19,2.3,2.3,0,0,0,1.93,1.05h7.53a3.59,3.59,0,0,0,3.1-2.06L26.47,43a2.16,2.16,0,0,0,.17-.6l2,.31a14.3,14.3,0,0,1,3.08,1l23.6,11.25a1.17,1.17,0,0,0,.49.11,1.11,1.11,0,0,0,.61-.18,1.14,1.14,0,0,0,.54-1V7.46A1.14,1.14,0,0,0,56.43,6.49ZM9.32,24l6-.95V38.28l-6-1Zm9.82,29.39a1.31,1.31,0,0,1-1,.68H10.62l6-13.3L24.38,42Zm35.53-1.37-22-10.47A16.22,16.22,0,0,0,29,40.44l-4.21-.66-.06,0-7.07-1.12V22.72L28.92,21a16.22,16.22,0,0,0,3.7-1.15L54.67,9.28Z" />
    </SVGIcon>
  );
}

export default Demonstration;
