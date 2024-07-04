import styled from "styled-components";

const UploadYourImage1 = styled.div`
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
  letter-spacing: 0.01em;
  font-weight: 600;
  display: inline-block;
`;
const DocsH6 = styled.div`
  position: relative;
  width: 20.94rem;
  height: 1.06rem;
`;
const PngJpgAnd = styled.div`
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
  letter-spacing: 0.01em;
  display: inline-block;
`;
const DocsH61 = styled.div`
  position: relative;
  width: 20.94rem;
  height: 1.06rem;
  font-size: var(--input-small-medium-size);
`;
const DocsH6Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const ImageIcon = styled.img`
  position: relative;
  width: 4.38rem;
  height: 2.8rem;
  object-fit: cover;
  z-index: 0;
`;
const DropYourFiles1 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.5rem;
  font-weight: 500;
`;
const ChevronLeftIcon1 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Link = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.5rem;
  font-weight: 600;
`;
const BorderBottom1 = styled.div`
  align-self: stretch;
  position: relative;
  background-color: var(--blue-500);
  height: 0.13rem;
  display: none;
`;
const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const LinkDefault = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: var(--blue-500);
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-8xs);
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
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  z-index: 1;
`;
const FigmaIcon1 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
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
const PrelineUifig = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
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
const DraggingPointerIcon1 = styled.img`
  position: absolute;
  top: 3.73rem;
  left: 3.22rem;
  width: 1.25rem;
  height: 1.75rem;
  object-fit: cover;
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
const DragNDropFileUpload = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px dashed var(--gray-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3.13rem;
  position: relative;
  gap: var(--gap-xl);
`;
const DragNDropFileUploads1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: var(--gray-800);
`;
const UploadYourPicture1Root = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: center;
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;

const UploadYourPicture = () => {
  return (
    <UploadYourPicture1Root>
      <DocsH6Parent>
        <DocsH6>
          <UploadYourImage1>Upload your Image</UploadYourImage1>
        </DocsH6>
        <DocsH61>
          <PngJpgAnd>PNG, JPG and GIF file are allowed</PngJpgAnd>
        </DocsH61>
      </DocsH6Parent>
      <DragNDropFileUploads1>
        <DragNDropFileUpload>
          <ImageIcon alt="" src="/image@2x.png" />
          <Content>
            <Title>
              <DropYourFiles1>Drop your files here or</DropYourFiles1>
              <Links>
                <LinkDefault>
                  <ChevronLeftIcon1 alt="" />
                  <Placeholder>
                    <Link>browse</Link>
                    <BorderBottom1 />
                  </Placeholder>
                  <ChevronLeftIcon1 alt="" />
                </LinkDefault>
              </Links>
            </Title>
            <SecondaryLabel>Maximum size: 50MB</SecondaryLabel>
          </Content>
          <DarggingFile>
            <File1>
              <FigmaIcon1 alt="" />
            </File1>
            <Label>
              <PrelineUifig>preline-ui.fig</PrelineUifig>
            </Label>
            <DraggingPointerIcon1 alt="" />
          </DarggingFile>
        </DragNDropFileUpload>
      </DragNDropFileUploads1>
    </UploadYourPicture1Root>
  );
};

export default UploadYourPicture;
