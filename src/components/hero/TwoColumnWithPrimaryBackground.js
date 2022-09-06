import React from "react";
import tw from "twin.macro";
import Lottie from "react-lottie-player";
import lottieJson from './marriage-couple-hugging.json'
import lottieRings from './wedding-rings.json';
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const Image = tw.img`w-144 ml-auto`

export default ({
  heading = "Приглашение на свадьбу Дмитрия ＆ Анастасии",
  description = "Мы будем рады видеть вас на нашей росписи 9 сентября в 15.00 в батумском двореце бракосочетания",
}) => {

  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Lottie
                    loop
                    animationData={lottieRings}
                    play
                    style={{ width: 150, height: 150 }}
                />
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
              </TextColumn>
              <IllustrationColumn>
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: 700, height: 700 }}
                />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
