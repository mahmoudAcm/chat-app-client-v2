import React, { createRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field, FormikState } from 'formik';
import getLocation from '../../../helpers/userLocation';

const ImageAvatar = createRef<HTMLImageElement>();
const userLocation = createRef<HTMLInputElement>();

const SignUp = ({ isSubmitting }: FormikState<any>) => {
  useEffect(() => {
    (async () => {
      try {
        const details = await getLocation();
        userLocation.current!.value = `${details.country}, ${details.city}`;
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="start">
      <div className="layout">
        <div className="main order-md-2">
          <div className="start">
            <div className="container">
              <div className="col-md-12">
                <div className="content">
                  <h1>Create Account</h1>
                  <Form className="signup">
                    <input type="text" ref={userLocation} hidden />
                    <div className="form-group">
                      <img
                        ref={ImageAvatar}
                        className="rounded my-3"
                        style={{ maxWidth: '225px', maxHeight: '200px' }}
                      />
                      <div className="custom-file">
                        <label
                          className="custom-file-label"
                          htmlFor="validatedCustomFile"
                        >
                          Choose avatar...
                        </label>
                        <input
                          id="validatedCustomFile"
                          type="file"
                          className="custom-file-input"
                          onChange={(e: any) => {
                            try {
                              e.persist();
                              const files = e.target.files;
                              const blob = files![0];
                              var reader = new FileReader();
                              reader.readAsDataURL(blob);
                              reader.onloadend = function () {
                                var base64data = reader.result;
                                ImageAvatar.current!.src = base64data!.toString();
                              };
                            } catch (e) {}
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-parent">
                      <div className="form-group">
                        <Field
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Username"
                          required
                        />
                        <button className="btn icon">
                          <i className="material-icons">person_outline</i>
                        </button>
                      </div>
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
                      Sign Up
                    </button>
                    <div className="callout">
                      <span>
                        Already a member? <Link to="/signIn">Sign In</Link>
                      </span>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aside order-md-1">
          <div className="container">
            <div className="col-md-12">
              <div className="preference">
                <h2>Welcome Back!</h2>
                <p>
                  To keep connected with your friends please login with your
                  personal info.
                </p>
                <Link to="/signIn" className="btn button">
                  Sign In
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
  mapPropsToValues({ email, password, username }: any) {
    return {
      email: email || '',
      password: password || '',
      username: username || '',
    };
  },
  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log(values, userLocation.current!.value);
    setSubmitting(false);
  },
})(SignUp);
