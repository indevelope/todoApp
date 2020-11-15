import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => (
  <Wrapper>
    <Container>
      <h1 className='text-3xl font-bold'>Contacts</h1>
      <div>
        Made by tn
      </div>
      <div>
        Contact us via email: <a href='mailto:tn@example.com' className='underline'>tn@example.com</a>
      </div>
      <div className='block mt-10'>
        <Link className='border px-5 py-3' to='/'>
          Go back
        </Link>
      </div>
    </Container>
  </Wrapper>
);

export default Contacts;

const Wrapper = ({ children }) => (
  <div className='flex flex-col h-full items-center justify-center bg-gray-800 text-gray-100'>
    {children}
  </div>
);

const Container = ({ children }) => <div>{children}</div>;