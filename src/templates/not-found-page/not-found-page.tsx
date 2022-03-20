import React from "react";
import { Background } from "../../components/background";
import { Container } from "../../components/container";
import { GlassBox } from "../../components/glass-box";
import { Footer } from "../../fragments/footer";
import { NotFound } from "../../fragments/not-found";

import "./not-found-page.scss";

export const NotFoundPage = () => {
  return (
    <div className="main">
      <Container>
        <div className="mainShit">
          <GlassBox>
            <NotFound />
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
