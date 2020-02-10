import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const { data } = resume;
  
  return (
    <Container>
      <Header 
        title="Insurance Quote"
      />
      <FormContainer>
        <Form
          setResume={setResume}
        />
        <Resume
          data={data}
        />
      </FormContainer>
    </Container>
  );
}

export default App;
