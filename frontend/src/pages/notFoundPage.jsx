/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className='text-center'>
    <img
      alt='Page not found'
      className='img-fluid w-25'
      src='https://cdn2.hexlet.io/assets/error-pages/404-4b6ef16aba4c494d8101c104236304e640683fa9abdb3dd7a46cab7ad05d46e9.svg'
    />
    <h1 className='h4 text-muted'>Page not found :(</h1>
    <p className='text-muted'>
      You can go on
      <Link to='/'>the main page</Link>
    </p>
  </div>
);

export default NotFoundPage;
