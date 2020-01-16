import React from "react";
import styled from "@emotion/styled";
import SVGIcon from "../SVGIcon";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporateDesignSecondary};
}

`;

function Fire(props) {
  return (
    <SVGIcon {...props}>
      <Path d="M48.05,33.38c-.14-.12-.23-.17-.29-.17s-.08.22-.06.35c.17,1.1-.19,2.65-1.42,2.94a2.46,2.46,0,0,1-.6.07,3.94,3.94,0,0,1-3.27-2.25,11.38,11.38,0,0,1-.86-4.68,44.19,44.19,0,0,0-1.72-11.91,16.46,16.46,0,0,0-5.62-8.24,1.65,1.65,0,0,0-.69-.34c-.28,0,0,.55.07.81.78,2.11-.36,5-1.35,6.56a20.12,20.12,0,0,1-6.45,6.27,39.56,39.56,0,0,0-6.46,4.4,18.63,18.63,0,0,0-5.8,17c1.09,5.9,7,14.16,14.86,14.82h0a.23.23,0,0,0,.13-.43c-2.91-1.82-5.87-5.77-6.07-9.68a.23.23,0,0,1,.24-.25.25.25,0,0,1,.21.12c.84,1.36,3,2.07,4.91,2.07a6.33,6.33,0,0,0,1-.08.25.25,0,0,0,.16-.37,14.68,14.68,0,0,1-2.2-10.53,19.16,19.16,0,0,1,5.12-9.05.25.25,0,0,1,.17-.08.24.24,0,0,1,.23.31A9.18,9.18,0,0,0,33,37.53a22.57,22.57,0,0,0,3.49,5.67c1.65,2.17,3.17,4.59,3.44,7.3a8.65,8.65,0,0,1-4.09,8A.24.24,0,0,0,36,59h0c6.13-.62,10.64-6.48,12.84-11.13S52,36.69,48.05,33.38ZM46.77,46.86A22.47,22.47,0,0,1,42,53.55a11.07,11.07,0,0,0,.22-3.26c-.33-3.38-2.15-6.18-3.91-8.48a20.28,20.28,0,0,1-3.2-5.17,6.87,6.87,0,0,1-.63-4.9,2.54,2.54,0,0,0-4.25-2.52A21.47,21.47,0,0,0,24.52,39.4s0,.07,0,.1a15.94,15.94,0,0,0,.72,8.38,1.17,1.17,0,0,1-.36-.32A2.53,2.53,0,0,0,20.17,49a12.4,12.4,0,0,0,.93,4,18.53,18.53,0,0,1-5.31-9.27,16.27,16.27,0,0,1,5.07-14.87A30.88,30.88,0,0,1,26,25.37l1-.6a22.59,22.59,0,0,0,7.22-7,14,14,0,0,0,1.5-3.34,14,14,0,0,1,1.92,4s0,0,0,.06a42.06,42.06,0,0,1,1.61,11.21,13.32,13.32,0,0,0,1,5.54l.07.16a6.16,6.16,0,0,0,5.32,3.51,4.7,4.7,0,0,0,1.12-.13,4,4,0,0,0,1.44-.66C48.83,40.73,48.07,44.13,46.77,46.86Z" />
      <Path d="M24.13,16.52a1,1,0,0,0,1.13.93,1.07,1.07,0,0,0,.51-.11c1.63-.85,3.6-4.08,3.63-6.38a6.63,6.63,0,0,0-3.13-5.75A1,1,0,0,0,25.82,5c-.1,0-.1.09,0,.21a7.62,7.62,0,0,1,1,3.6C26.8,13.15,23.89,14.52,24.13,16.52Z" />
    </SVGIcon>
  );
}

export default Fire;
