/* eslint-disable jsx-quotes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import { useFormik } from 'formik';
import schema from '../schemas/index.js';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: schema,
  });

  return (
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
  );
};

export default Login;
