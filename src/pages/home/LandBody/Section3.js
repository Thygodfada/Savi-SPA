import React from 'react';
import styled from 'styled-components';
import Success from './Success';
import youngwoman from '../../../assets/images/youngwoman.png';

const StyledFrame = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 111px;
  justify-content: center;
  padding: 80px 170px;
  position: relative;
  width: 1441px;

  .div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: -36px;
    position: relative;
    width: 362px;
  }

  .text-wrapper {
    color: var(--primary-color);
    font-family: var(--headline-bold-40-font-family);
    font-size: var(--headline-bold-40-font-size);
    font-style: var(--headline-bold-40-font-style);
    font-weight: var(--headline-bold-40-font-weight);
    letter-spacing: var(--headline-bold-40-letter-spacing);
    line-height: var(--headline-bold-40-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  .group,
  .frame-wrapper {
    height: 30px;
    position: relative;
    width: 28px;
  }

  .div-2,
  .div-3,
  .div-4,
  .div-5,
  .div-6,
  .div-7,
  .div-8,
  .div-9,
  .div-10,
  .div-11,
  .div-12,
  .div-13 {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }

  .text-wrapper-2,
  .text-wrapper-4,
  .text-wrapper-5,
  .text-wrapper-6,
  .text-wrapper-7,
  .text-wrapper-8 {
    color: var(--main-text);
    font-family: 'Inter', Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22.4px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  .text-wrapper-3,
  .text-wrapper-5 {
    color: var(--main-text);
    font-family: 'Inter', Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 28px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  .p {
    align-self: stretch;
    color: var(--main-text);
    font-family: var(--body-text-normal-16-font-family);
    font-size: var(--body-text-normal-16-font-size);
    font-style: var(--body-text-normal-16-font-style);
    font-weight: var(--body-text-normal-16-font-weight);
    letter-spacing: var(--body-text-normal-16-letter-spacing);
    line-height: var(--body-text-normal-16-line-height);
    position: relative;
  }

  .div-wrapper,
  .div-wrapper-2 {
    align-items: flex-start;
    background-color: #b5179e94;
    border-radius: 100px;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    padding: 4px 10px;
    position: relative;
  }

  .overlap-group-wrapper {
    height: 427px;
    margin-right: -36px;
    overflow: hidden;
    position: relative;
    width: 700px;
  }

  .overlap-group {
    background-color: #f5b9ec4c;
    height: 500px;
    position: relative;
  }

  .young-african-woman {
    height: 427px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 700px;
  }

  .success-1 {
    height: 24px !important;
    left: 10px !important;
    position: absolute !important;
    top: 8px !important;
    width: 24px !important;
  }
`;

const ThirdSection = () => {
  return (
    <StyledFrame>
      <div className="div">
        <div className="text-wrapper">How It Works</div>
        <div className="div-2">
          {renderStep(
            '1',
            'Sign Up in Seconds',
            'Create account with Savvi and start saving.'
          )}
          {renderStep(
            '2',
            'Join or Create Thrift Groups',
            'Create your account quickly and start your savings journey within moments.'
          )}
          {renderStep(
            '3',
            'Automated Contributions',
            'Schedule automatic transfers from your wallet to your savings group for hassle-free saving.'
          )}
          {renderStep(
            '4',
            'Track and Celebrate',
            'Monitor your savings growth, view contributions, and celebrate milestones on our user-friendly dashboard.'
          )}
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="young-african-woman"
            alt="Young african woman"
            src={youngwoman}
          />
          {renderNotification('Joined successful')}
          {renderChart('Savings growth')}
          {renderNotification('Joined Saving Group')}
        </div>
      </div>
    </StyledFrame>
  );

  function renderStep(number, title, description) {
    return (
      <div className="div-3">
        <div className="group">
          <div className="div-wrapper">
            <div className="text-wrapper-2">{number}</div>
          </div>
        </div>
        <div className="div-4">
          <div className="text-wrapper-3">{title}</div>
          <p className="p">{description}</p>
        </div>
      </div>
    );
  }
  function renderNotification(title) {
    return (
      <div className="div-11">
        <div className="text-wrapper-7">{title}</div>
        <Success className="success-1" color="#34A853" />
      </div>
    );
  }

  function renderChart(title) {
    return (
      <div className="div-12">
        <img
          className="default-line-chart"
          alt="Default line chart"
          src="https://c.animaapp.com/ZKdkYpeY/img/default-line-chart--gradient-.svg"
        />
        <div className="savings-growth">
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  function renderNotificationGroup(title) {
    return (
      <div className="div-13">
        <div className="text-wrapper-8">{title}</div>
        <Success className="success-1" color="#34A853" />
      </div>
    );
  }
};

export default ThirdSection;
