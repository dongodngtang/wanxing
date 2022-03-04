import styled from '@emotion/styled';
import { BaseVerifyComponentProps, FooterButton, FooterNode } from './lib';
import { ValidationLayout } from './validation-layout';
import { Checkbox } from 'antd';
import { useState } from 'react';

interface GameInstructions extends BaseVerifyComponentProps {}

const list = [
  '请在进入答题前关闭微信、QQ等聊天软件，以防被识别为作弊行为',
  '做题中请勿使用F功能键或查看源代码，如使用系统会记录下来',
  '诚信比赛，请勿上网搜索答案，与其他选手交流，求助外援等',
  '做题中途遇到问题被退出，在有效期内仍可进入再次进行答题',
  '请选择相对安静且网络稳定的环境进行比赛',
  '请提前关闭即时通信软件和可能弹窗的应用，若比赛中聊天软件消息弹框、浏览器弹出广告、系统更新或杀毒软件等都会提示跳出页面，并可能视为异常情况记录；',
  '比赛仅可作答一次；结束时间一到，系统将自动交卷，请注意安排时间',
  '比赛过程中如遇断网、电脑死机、意外关机、答题页面误关闭或故障退出等状况，请立即在正常作答时间内重新登录继续比赛；',
  '请诚信应考，禁止对试题内容进行复制、传播，一经发现后果自负。',
];

export const GameInstructions = ({ prev, next }: GameInstructions) => {
  const [checked, setChecked] = useState(false);

  const tipsNode = '请仔细阅读以下内容，如有违反后果自负。';

  const footerNode = (
    <FooterNode goPrev={() => prev?.()}>
      <FooterButton type={'primary'} disabled={!checked} onClick={next}>
        开始比赛
      </FooterButton>
    </FooterNode>
  );

  return (
    <ValidationLayout tipsNode={tipsNode} footerNode={footerNode}>
      <GameInstructionsContainer>
        <List>
          此处内容由后台发布比赛的进行自定义，如：
          {list.map((item, index) => (
            <li key={item}>{`${index + 1}、${item}`}</li>
          ))}
        </List>
        <Permission>
          <Checkbox onChange={(e) => setChecked(e.target.checked)}>
            我已阅读并同意，我承诺所有题目由个人独立完成，答题中不会获取网络、书籍、他人的帮助
          </Checkbox>
        </Permission>
      </GameInstructionsContainer>
    </ValidationLayout>
  );
};

const GameInstructionsContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 0.6rem;
  list-style: none;
  color: grey;
  li {
    line-height: 4rem;
  }
`;

const Permission = styled.p`
  margin: 2rem auto;
`;
