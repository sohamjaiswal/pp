import React from "react";
import { Background } from "../../components/background";
import { Container } from "../../components/container";
import { GlassBox } from "../../components/glass-box";
import { Footer } from "../../fragments/footer";
import { Profile } from "../../fragments/profile";
// import { TriangleBackground } from '../../components/triangle-background'

import "./main.scss";
import { IMainProps } from "./main.types";

export const Main = ({ profile }: IMainProps) => {
  return (
    <div className="main">
      <Container>
        <div className="mainShit">
          <GlassBox>
            <Profile {...profile} />
            <Footer />
          </GlassBox>
        </div>
      </Container>
      <Background />
    </div>
  );
};
