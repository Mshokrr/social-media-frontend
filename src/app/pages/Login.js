import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { login } from '../../redux/actions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <h4>Sign in to continue</h4>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="email"
                      placeholder="Username"
                      size="lg"
                      className="h-auto"
                      onChange={(e) => {
                        this.setState({
                          username: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      size="lg"
                      className="h-auto"
                      onChange={(e) => {
                        this.setState({
                          password: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <div className="mt-3">
                    {/* <Link
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={() => {
                        console.log('clicked!!!');
                      }}
                    >
                      SIGN IN
                    </Link> */}
                    <a
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={() => {
                        console.log('clicked!!!');
                        this.props.dispatch(
                          login({
                            username: this.state.username,
                            password: this.state.password,
                          })
                        );
                      }}
                    >
                      SIGN IN
                    </a>
                  </div>

                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary">
                      Create
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Login);
