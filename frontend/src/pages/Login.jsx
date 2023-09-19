/* eslint-disable jsx-quotes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import axios from 'axios';
import schema from '../schemas/index.js';
import { setChannels } from '../slices/ChannelsSlice.jsx';
import { setMessages } from '../slices/MessagesSlice.jsx';

const fetchData = async (dispatch) => {
  try {
    const response = await axios.get('/api/v1/data', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    // TODO: Сохранить данные в стор
    dispatch(setChannels(response.data.channels));
    dispatch(setMessages(response.data.messages));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Login = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchData(dispatch);
    } else {
      navigate('/login');
    }
  }, [navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/v1/login', values);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } catch (error) {
        setErrorMessage('Authorisation error. Please check your email and password.');
      }
    },
  });

  return (
    <>
      {/* {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>} */}
      <div className='container-fluid h-100'>
        <div className='row justify-content-center align-content-center h-100'>
          <div className='col-12 col-md-8 col-xxl-6'>
            <div className='card shadow-sm'>
              <div className='card-body row p-5'>
                <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                  <img
                    src='./images/enter.jpg'
                    className='rounded-circle'
                    alt='login'
                  />
                </div>
                <form
                  onSubmit={formik.handleSubmit}
                  className='col-12 col-md-6 mt-3 mt-mb-0'
                >
                  <h1 className='text-center mb-4'>Login</h1>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      name='username'
                      required
                      placeholder='username'
                      id='username'
                      className='form-control'
                      value={formik.values.username}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor='username'>username</label>
                  </div>
                  <div className='form-floating mb-4'>
                    <input
                      type='password'
                      name='password'
                      autoComplete='current-password'
                      required
                      placeholder='password'
                      id='password'
                      className='form-control'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor='pasword'>password</label>
                  </div>
                  {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
                  <button
                    type='submit'
                    className='w-100 mb-3 btn btn-outline-primary'
                  >
                    go
                  </button>
                </form>
              </div>
              <div className='card-footer p-4'>
                <div className='text-center'>
                  <span>Do not have an account? </span>
                  <a href='/signup'>Signup</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
