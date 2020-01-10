import React from "react";
import {
  TextButton,
  SliderDotsButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Aside from "../components/Aside";
import { Next } from "../assets/Icons";

export default function ReportOne() {
  const location = useLocation();
  return (
    <>
      <H2>Location, Date and Time:</H2>
      <H1>Where and when did it happened?</H1>
      <SliderDotsButton />

      <Aside>
        <Link to="/report/3" active={location.pathname === "/report/3"}>
          <SvgTextFooterButton
            svg={<Next />}
            text="Next to step 2"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
