import React from "react";
import { Background } from "../../components/background";
import { Container } from "../../components/container";
import { GlassBox } from "../../components/glass-box";
import { Footer } from "../../fragments/footer";
import { Profile } from "../../fragments/profile";
import { Showcase } from "../../fragments/showcase";
import { TextPanel } from "../../fragments/text-panel";

import "./main.scss";
import { IMainProps } from "./main.types";

export const Main = ({
  profile,
  aboutMe,
  techShowcase,
  langShowcase,
}: IMainProps) => {
  return (
    <div className="main">
      <Container>
        <div className="mainShit">
          <GlassBox>
            <Profile {...profile} />
            <TextPanel {...aboutMe} />
            <Showcase {...langShowcase} />
            <Showcase {...techShowcase} />
            <Footer />
          </GlassBox>
        </div>
      </Container>
      <div className="background">
        <Background />
      </div>
    </div>
  );
};
