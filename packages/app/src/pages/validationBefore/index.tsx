import { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { StepsLine } from './steps-line';
import { PersonalInfoVerify } from './personal-Info-verify';
import { Carousel } from 'antd';
import { FaceVerify } from './face-verify';
import { ScreenRecord } from './screen-record';
import { GameInstructions } from './game-instructions';
import { useHistory } from 'umi';
import { ROUTE_NAME } from '@/enum';

const ValidationBefore = () => {
  const [curretStep, setCurrentStep] = useState(0);

  const carouselRef = useRef<any>();

  const history = useHistory();

  const next = () => {
    setCurrentStep(Math.min(curretStep + 1, 3));
    if (curretStep < 3) {
      carouselRef.current?.next();
    } else {
      history.replace(ROUTE_NAME.library);
    }
  };

  const prev = () => {
    setCurrentStep(Math.max(curretStep - 1, 0));
    carouselRef.current?.prev();
  };

  return (
    <ValidationContainer>
      <Header>
        <h1>比赛时间：2022/1/21 12:00-14:00</h1>
        <StepsLine current={curretStep} />
      </Header>
      <Contentbox>
        <Carousel ref={carouselRef} dots={false}>
          <PersonalInfoVerify next={next} />
          <FaceVerify prev={prev} next={next} />
          <ScreenRecord prev={prev} next={next} />
          <GameInstructions prev={prev} next={next} />
        </Carousel>
      </Contentbox>
    </ValidationContainer>
  );
};

const ValidationContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  background-color: white;
`;

const Contentbox = styled.div`
  flex: 1;
`;

export default ValidationBefore;
