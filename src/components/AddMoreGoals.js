import React, { useState, useCallback, useRef } from 'react';
import PortalPopup from './PortalPopup';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimeFrame from './TimeFrame';
import axios from 'axios';
import { toast } from 'react-toastify';



const AddMoreGoalsc = ({onClose,fetchPersonalSavings}) => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [startDatee, setStartDate] = useState(null);
  const [targetDate, setWithdrawalDate] = useState(null);
  const [showFrame, setShowFrame] = useState(false); 
  const [avatar, setAvatar] = useState(null); 
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    goalamount: '',
    avatar: null  ,
    startdate:'',
    targetdate:'',
    isautomatic:false,
    amounttoadd:0,
    frequency:'',
    walletnumber:localStorage.getItem("walletNumber")
  });
  
  const handleAutoSaveAmountView = (event) => {
     setShowFrame(event.target.value==="1");
     const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
  };
  const inputFileRef2 = useRef(null);
  const handleDivClickk = () =>{
    inputFileRef2.current.click();
  }

 

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);



  const handleImageDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        setFormData({
          ...formData,
          avatar: event.target.files[0]
        });
        setAvatar(file);
      } else {
        console.error('File size exceeds 50MB limit.');
      }
    }
  };

  const handleImageDragOver = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.items[0].getAsFile();
    if (file && file.size > 50 * 1024 * 1024) {
      console.error('File size exceeds 50MB limit.');
      event.dataTransfer.dropEffect = 'none'; // Prevent the drop
    } else {
      event.dataTransfer.dropEffect = 'copy';
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFormData({
        ...formData,
        avatar: e.target.files[0]  // Update image state with the selected file
      });
      setAvatar(e.target.files[0]);
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      if(formData.title ===""){
        toast.error("Title is required");
        return;
      }
      if(formData.goalamount ===""){
        toast.error("Target amount is required");
        return;
      }
      if(formData.frequency ===""){
        toast.error("Frequency is required");
        return;
      }
      if(formData.startdate ===""){
        toast.error("Start date is required");
        return;
      }
      if(formData.targetdate ===""){
        toast.error("Target date is required");
        return;
      }
      if(formData.avatar ===null){
        toast.error("Avatar is null");
        return;
      }
      setLoading(true);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('goalamount', formData.goalamount);
      formDataToSend.append('avatar', formData.avatar);
      formDataToSend.append('startdate', new Date(formData.startdate).toISOString());
      formDataToSend.append('targetdate', new Date(formData.targetdate).toISOString());
      formDataToSend.append('isautomatic', formData.isautomatic==="0"?false:true);
      formDataToSend.append('amounttoadd', formData.amounttoadd);
      formDataToSend.append('frequency', formData.frequency);
      formDataToSend.append('walletnumber', formData.walletnumber);

      await axios.post('https://localhost:7226/api/Saving/createPersonalSaving', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log("data",response.data);
        if(response.data.succeeded){
          toast.success(response.data.message);
          onClose();
          fetchPersonalSavings();
        }else{
          toast.error("a "+response.data.message);
        }
        
      }).catch(error => {
        if (error.response) {
          toast.error("b "+ error.response.data.title);
          console.error('Server responded with error status:', error.response.data.title);
        } else if (error.request) {
          console.error('No response received from server:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error submitting form', error);
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date); // Update startDate state with the selected date
    setFormData({
      ...formData,
      startdate: date // Update startDate in the formData state with the selected date
    });
  };

  const handleTargetDateChange = (date) => {
    setWithdrawalDate(date); // Update startDate state with the selected date
    setFormData({
      ...formData,
      targetdate: date // Update startDate in the formData state with the selected date
    });
  };

  return (
    <>
      <AddMoreGoalsRoot>
        <FrameParent>
          <TextWrapper>
            <Text1>Set a Target</Text1>
          </TextWrapper>
          <Text2>
            Create and track multiple saving goals to achieve your financial
            targets
          </Text2>
        </FrameParent>
        <AddMoreGoalsInner>
          <FrameWrapper>
            <form  onSubmit={handleSubmit} id='goalForm'>
            
            <FrameGroup>
              <FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Target</Text3>
                    <Buttondefault>
                      <label htmlFor="targetInput" style={{ flex: 1 }}>
                        <input
                        onChange={handleChange}
                          type="text"
                          name="title"
                          required
                          id="targetInput"
                          value={formData.title}
                          placeholder="Type here"
                          style={{
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                          }}
                        />
                      </label>
                      
  
                    </Buttondefault>
                  </TextParent>
                </FrameWrapper>
              </FrameWrapper>
              <FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Target Amount</Text3>
                    <Buttondefault>
                      <label htmlFor="amountInput" style={{ flex: 1 }}>
                        <input
                          type="number"
                          onChange={handleChange}
                          value={formData.goalamount}
                          id="amountInput"
                          name="goalamount"
                          placeholder="Target amount"
                          style={{
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                          }}
                        />
                      </label>
                    </Buttondefault>
                  </TextParent>
                </FrameWrapper>
              </FrameWrapper>
              <FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Frequency</Text3>
                    <Buttondefault1>
                      <label htmlFor="frequencyInput" style={{ flex: 1 }}>
                        <select
                          id="frequencyInput"
                          name="frequency"
                          onChange={handleChange}
                          value={formData.frequency}
                          placeholder="Pick your frequency"
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          <option value="">--select--</option>
                          <option value="0">Daily</option>
                          <option value="1">Weekly</option>
                          <option value="2">Montly</option>
                        </select>
                      </label>
                    </Buttondefault1>
                  </TextParent>
                </FrameWrapper>
              </FrameWrapper>
              <FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Is Automatic</Text3>
                    <Buttondefault1>
                      <label htmlFor="isautomatic" style={{ flex: 1 }}>
                        <select
                          onChange={handleAutoSaveAmountView}
                          id="isautomatic"
                          value={formData.isautomatic}
                          placeholder=""
                          name="isautomatic"
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          <option value="0">NO</option>
                          <option value="1">YES</option>
                        </select>
                      </label>
                    </Buttondefault1>
                  </TextParent>
                </FrameWrapper>
              </FrameWrapper>
              {showFrame && (
                <FrameWrapper>
                  <FrameWrapper>
                    <TextParent>
                      <Text3>Automatic Save Amount</Text3>
                      <Buttondefault>
                        <label htmlFor="autosaveamount" style={{ flex: 1 }}>
                          <input
                            type="number"
                            onChange={handleChange}
                            id="autosaveamount"
                            value={formData.amounttoadd}
                            name="amounttoadd"
                            placeholder="Auto Save Amount"
                            style={{
                              width: '100%',
                              border: 'none',
                              outline: 'none',
                            }}
                          />
                        </label>
                      </Buttondefault>
                    </TextParent>
                  </FrameWrapper>
                </FrameWrapper>
              )}
              <FrameParent1>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Start Date</Text3>
                    <StyledDatePicker
                      selected={startDatee}
                      placeholderText="Pick your date"
                      onChange={handleStartDateChange}
                      name="startdate"
                      dateFormat="MMMM d, yyyy"
                      id="startdate"
                      onKeyDown={(e) => e.preventDefault()}
                    />
                  </TextParent>
                </FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Withdrawal Date</Text3>
                    <StyledDatePicker
                      selected={targetDate}
                      name="targetdate"
                      onChange={handleTargetDateChange}
                      placeholderText="Pick your date"
                      dateFormat="MMMM d, yyyy"
                      id="withdrawaldate"
                      onKeyDown={(e) => e.preventDefault()}
                    />
                  </TextParent>
                </FrameWrapper>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Upload Avatar</Text20>
                    <DragNDropFileUpload  onDrop={(e) => handleImageDrop(e)}
                onDragOver={(e) => handleImageDragOver(e)}>
                      <ImageIcon alt="" />
                      {avatar ? (
                          <div>{avatar.name}</div>
                        ) : (
                          <React.Fragment>
                           
                            <DropYourFiles2>
                            Drop your files here or<Span onClick={handleDivClickk} > browse</Span>
                          </DropYourFiles2>
                            <SecondaryLabel>Maximum size: 50MB</SecondaryLabel>
                            <input
                              ref={inputFileRef2}
                              name="avatar"
                              type="file"  style={{display:'none'}}
                              onChange={handleChange}
                            />
                          </React.Fragment>
                        )}
                      <DarggingFile>
                        <File1>
                          <FigmaIcon2 alt="" />
                        </File1>
                        <Label>
                          <PrelineUifig>preline-ui.fig</PrelineUifig>
                        </Label>
                        <DraggingPointerIcon2 alt="" />
                      </DarggingFile>
                    </DragNDropFileUpload>
                  </TextParent>
                </FrameWrapper2>

              </FrameParent1>
              <Ctadefault onClick={handleSubmit} disabled={loading}>
                <Text3>{loading ? 'Submitting...' : 'Submit'}</Text3>
              </Ctadefault>
            </FrameGroup>
</form>
          </FrameWrapper>
        </AddMoreGoalsInner>
      </AddMoreGoalsRoot>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <TimeFrame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddMoreGoalsc;

const Span = styled.span`
  color: #3b82f6;
  cursor:pointer
`;
const DragNDropFileUpload = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px dashed var(--grey-400);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-21xl);
  position: relative;
  gap: var(--gap-xl);
  color: var(--gray-800);
  cursor:default;
`;
const ImageIcon = styled.img`
  position: relative;
  width: 4.38rem;
  height: 2.8rem;
  object-fit: cover;
  display: none;
  z-index: 0;
`;
const Text20 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const DropYourFiles2 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.5rem;
  font-weight: 500;
`;
const File1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.69rem;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  box-shadow: var(--drop-shadow-2xl);
  border: 1px solid var(--gray-300);
  box-sizing: border-box;
  width: 2rem;
  height: 2.63rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SecondaryLabel = styled.div`
  position: relative;
  font-size: var(--input-small-medium-size);
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--gray-400);
  text-align: center;
`;

const DarggingFile = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 2.63rem;
  left: 16.63rem;
  width: 5.38rem;
  height: 5.48rem;
  display: none;
  z-index: 2;
  font-size: var(--xs-regular-size);
  color: var(--white);
`;
const FigmaIcon2 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Label = styled.div`
  position: absolute;
  top: 2.88rem;
  left: 0rem;
  border-radius: var(--br-980xl);
  background-color: var(--blue-600);
  box-shadow: var(--drop-shadow-md);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-7xs);
`;
const PrelineUifig = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
`;

const DraggingPointerIcon2 = styled.img`
  position: absolute;
  top: 3.73rem;
  left: 3.22rem;
  width: 1.25rem;
  height: 1.75rem;
  object-fit: cover;
`;
const FrameWrapper2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text1 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Text2 = styled.div`
  width: 23.38rem;
  position: relative;
  font-size: var(--body-text-bold-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.06rem;
  flex-shrink: 0;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;

const FrameParent1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Text3 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Buttondefault = styled.div`
  width: 20rem;
  border-radius: var(--br-3xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  overflow: hidden;
  padding-left:10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  // padding: var(--padding-xs) var(--padding-base);
  height:40px;
  gap: var(--gap-81xl);
  font-size: var(--button-semi-bold-14-size);
  color: var(--grey-400);
`;
const StyledDatePicker = styled(DatePicker)`
  width: 20rem;
  padding: var(--padding-xs) var(--padding-base);
  border-radius: var(--br-5xs);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  font-size: var(--button-semi-bold-14-size);
  color: black;
  margin: 0; /* Add this to remove any default margin */
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ArrowDropDownIcon = styled.img`
  width: 1.5rem;
  position: relative;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const Buttondefault1 = styled.div`
  width: 20rem;
  border-radius: var(--br-3xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  padding-left:10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height:40px;
  font-size: var(--button-semi-bold-14-size);
  color: var(--grey-400);
`;

const Ctadefault = styled.div`
  width: 20rem;
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--white);
  cursor: pointer;
  margin-top:1.5em;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const AddMoreGoalsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--body-text-bold-16-size);
`;
const AddMoreGoalsRoot = styled.div`
  position: relative;
  border-radius: var(--br-base);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--headline-bold-24-size);
  color: var(--main-text);
  font-family: var(--button-semi-bold-14);
`;
