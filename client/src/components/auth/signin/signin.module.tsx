import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field, FormikState } from 'formik';

const SignIn = ({ isSubmitting }: FormikState<any>) => {
  return (
    <div className="start">
      <div className="layout">
        <div className="main order-md-1">
          <div className="start">
            <div className="container">
              <div className="col-md-12">
                <div className="content">
                  <h1>Sign in to ChatApp</h1>
                  <Form>
                    <div className="form-group">
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                      <button className="btn icon">
                        <i className="material-icons">mail_outline</i>
                      </button>
                    </div>
                    <div className="form-group">
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <button className="btn icon">
                        <i className="material-icons">lock_outline</i>
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="btn button"
                      disabled={isSubmitting}
                    >
                      Sign In
                    </button>
                    <div className="callout">
                      <span>
                        Don't have account?
                        <Link to="/signUp">Sign Up</Link>
                      </span>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aside order-md-2">
          <div className="container">
            <div className="col-md-12">
              <div className="preference">
                <h2>Hello, Friend!</h2>
                <p>
                  Enter your personal details and start your journey with
                  ChatApp today.
                </p>
                <Link to="/signUp" className="btn button">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ email, password }: any) {
    return {
      email: email || '',
      password: password || '',
    };
  },
  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log(values);
    setSubmitting(false);
  },
})(SignIn);
