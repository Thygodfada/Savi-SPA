import styled from 'styled-components';
import Goals from './Goals';

const Content = styled.div`
  align-items: flex;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  background-color: #f9fafb;
`;

const Savings = ({goalsData}) => {
  

  return (
    <>
      <Content>
        {
          goalsData.map((goal) => (
            
            <Goals          
              imageSrc={goal.avatar}
              category="Progress"
              title={goal.title}
              amount= {goal.balance+"/"+goal.goalAmount}
              progress={(goal.balance/goal.goalAmount*100)+"%"}
              id={goal.id}
            />
          ))
        }
      </Content>
    </>
  );
};

export default Savings;
