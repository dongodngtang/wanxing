import { TimerView } from '@/components';
import { useFormatCountdown } from '@/hooks/useFormatCountdown';
import styled from '@emotion/styled';

const ExaminationLib = () => {
  const endTime = Date._now() + 900 * 2 * 1000;

  const { hour, min, seconds } = useFormatCountdown(
    Math.floor((endTime - Date._now()) / 1000),
    true,
  );

  return (
    <ExamLibraryContainer>
      <Header>
        <h1>目录</h1>
        <TimerView
          prefixText={'距离比赛结束还有'}
          timestr={`${hour}时 ${min}分 ${seconds}秒`}
        />
      </Header>
      <main>
        <p>共100道题 满分100分 时长60分钟</p>
        <Explain>
          <li>
            1、比赛过程中，<Warn>不允许跳出比赛页面，否则会影响您的成绩</Warn>;
          </li>
          <li>
            2、如果答题过程中遇到断电、断网等异常情况造成中断，请重新登录进入比赛继续作答即可；
          </li>
          <li>
            3、至少做题30分钟后才能交卷，全部作答完成后请务必要点击
            <Warn>”提交试卷“</Warn>按钮交卷；
          </li>
          <li>4、倒计时结束系统将自动交卷，请控制好时间；</li>
        </Explain>
      </main>
    </ExamLibraryContainer>
  );
};

const ExamLibraryContainer = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Explain = styled.ul`
  background-color: #eee;
  margin: 0;
  padding: 2rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
`;

const Warn = styled.span`
  color: red;
  font-size: 1.1em;
  font-weight: bold;
`;

export default ExaminationLib;
