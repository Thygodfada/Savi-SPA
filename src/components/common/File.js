import React, { useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../../components/common/Modal';
import { Div, Paragraph } from '../../utils/common';
import UploadIcon from '../../assets/UploadIcon.svg';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import TempFile from '../../pages/admin/TrustGroup/TempFile';


const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModalArea = styled.div`
background: rgba(0, 0, 0, 0.03);
          border: 1px dashed #1a1a1a;
          height: 55vh;
          width:100%;
          text-align: center;
  padding-top: 0px;
  padding-bottom: 30px;
  font-style: normal;
  font-weight: bold;
        }}
`;
const Image = styled.img`
  marginleft: 30%;
  margin-bottom: 2px;
  max-width: 100%;
  height: Auto;
`;
const InputField = styled.div`
  height: 48px;
  width: 100%;
  background: transparent;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  padding: 14px 14px;
  color: #979797;
  font-size: 16px;
`;

const Label = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px;
  color: #21334f;
`;

const FormGroup = styled.div`
  position: relative;
`;

const ErrorText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #de1e1e;
  margin-bottom: 0;
  margin-top: 10px;
`;
export default function File({
  label,
  placeholder,
  onChange,
  value,
  name,
  style,
  errorMessage,
  onBlur,
}) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [file, setFile] = useState({});

  const handleChange =(e)=> {
    console.log({e});
    setFile(e);
    toggleModal();
  }
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log({ acceptedFiles });
  }, []);

const { 
  // acceptedFiles, fileRejections, 
  getRootProps, getInputProps, isDragActive } =
  useDropzone({
    onDrop
  });

  // const acceptedFileItems = acceptedFiles.map((value) => (
  //   <li key={value.path}>
  //     {value.path} - {value.size} bytes
  //   </li>
  // ));

  // const fileRejectionItems = fileRejections.map(({ value, errors }) => (
  //   <li key={value.path}>
  //     {value.path} - {value.size} bytes
  //     <ul>
  //       {errors.map((e) => (
  //         <li key={e.code}>{e.message}</li>
  //       ))}
  //     </ul>
  //   </li>
  // ));

  return (
    <div>
      <InputArea>
        <Label>{label}</Label>
        <FormGroup>
          <InputField
            onClick={() => toggleModal()}
            style={style}
          >{file && file.name}</InputField>
          <Modal title={label} isOpen={showModal} closeModal={toggleModal}>
            <ModalArea>
              <Image
                style={{ marginBottom: '20px', marginTop: '100px' }}
                src={UploadIcon}
                alt="Upload"
              />
              <TempFile handleFileChange={(e) => handleChange(e)}/>
              {/* <Div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Paragraph>Drop here</Paragraph>
                ) : (
                  <Paragraph style={{ fontSize: '16px', color: '#000000' }}>
                    Drag and drop your document here or just{' '}
                    <span
                      style={{ textDecoration: 'none', color: '#14a800' }}
                    >
                      browse
                    </span>{' '}
                    files
                    <Paragraph style={{ color: '#000000', marginTop: '20px' }}>
                      Max. Size 5MB
                      <Paragraph style={{ fontSize: '10px' }}>
                        PNG or JPG only
                      </Paragraph>
                    </Paragraph>
                  </Paragraph>
                )}
              </Div> */}
              {/* <aside>
                <Paragraph>Accepted files</Paragraph>
                <ul>{acceptedFileItems}</ul>
                <Paragraph>Rejected files</Paragraph>
                <ul>{fileRejectionItems}</ul>
              </aside> */}
            </ModalArea>
          </Modal>
        </FormGroup>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </InputArea>
    </div>
  );
}

File.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};
