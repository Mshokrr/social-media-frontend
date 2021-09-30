import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { register } from '../../redux/actions';
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0 h-100">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <h4>FRNDZ</h4>
                <h6 className="font-weight-light">Create an account</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      onChange={(e) => {
                        this.setState({
                          username: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      onChange={(e) => {
                        this.setState({
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => {
                        this.setState({
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="mt-3">
                    {/* <Link
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      to="/dashboard"
                    >
                      SIGN UP
                    </Link> */}
                    <a
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={() => {
                        console.log(this.state);
                        this.props.dispatch(
                          register({
                            username: this.state.username,
                            password: this.state.password,
                            email: this.state.email,
                          })
                        );
                      }}
                    >
                      SIGN UP
                    </a>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary">
                      Login
                    </Link>
                  </div>
                </form>
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

export default connect(mapStateToProps)(Register);
