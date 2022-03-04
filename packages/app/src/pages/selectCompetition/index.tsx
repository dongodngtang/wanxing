import styled from '@emotion/styled';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { Card } from 'antd';
import { useHistory } from 'umi';
import { useReducerContext } from '@/context/reducer-context';
import { ROUTE_NAME } from '@/enum';

const SelectCompetition = () => {
  useHeaderTitle('请选择您要进入的比赛');

  const { dispatch } = useReducerContext();
  const history = useHistory();

  const onSelect = (val: string) => {
    dispatch({ currentCompetition: val });
    history.push(ROUTE_NAME.selectMode);
  };

  return (
    <Container>
      <ItemCard onClick={() => onSelect('2021年RA国际机器人大赛1')}>
        <p>2021年RA国际机器人大赛1</p>
        <p>赛项 RA编程项</p>
        <p>地点 线上比赛</p>
        <p>时间 2021年7月24日-7月25日</p>
      </ItemCard>
      <ItemCard onClick={() => onSelect('2021年RA国际机器人大赛2')}>
        <p>2021年RA国际机器人大赛2</p>
        <p>赛项 RA编程项</p>
        <p>地点 线上比赛</p>
        <p>时间 2021年7月24日-7月25日</p>
      </ItemCard>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2rem 10%;
`;

const ItemCard = styled(Card)`
  width: 48%;
  margin-bottom: 4rem;
  border-radius: 0.6rem;
  box-shadow: 0 0 10px #e1e1e1;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
  font-size: 0;
  p {
    font-size: 1.8rem;
  }
  &:hover {
    transform: scale(1.05);
    .ant-card-body {
      background-color: #a0b3e7;
      color: white;
    }
  }
`;

export default SelectCompetition;
