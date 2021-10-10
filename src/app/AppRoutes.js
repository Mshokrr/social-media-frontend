import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../app/shared/Spinner';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Admin = lazy(() => import('./pages/Admin'));
const Home = lazy(() => import('./pages/Home'));

const Dashboard1 = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login1 = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

class AppRoutes extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) => {
            if (!this.props.loggedIn) {
              return <Redirect to="/login" />;
            } else {
              return <Component {...props} />;
            }
          }}
        />
      );
    };

    const AdminRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) => {
            if (!this.props.isAdmin) {
              return <Redirect to="/404" />;
            } else {
              return <Component {...props} />;
            }
          }}
        />
      );
    };

    const LoginRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) => {
            if (this.props.loggedIn) {
              return <Redirect to="/home" />;
            } else {
              return <Component {...props} />;
            }
          }}
        />
      );
    };

    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          {/* Public Routes */}
          <LoginRoute path="/login" component={Login} />
          <LoginRoute path="/register" component={Register} />
          <Route path="/404" component={Error404} />
          <Route path="/500" component={Error500} />
          {/* ============== */}

          {/* Private Routes */}
          <PrivateRoute exact path="/home" component={Home} />
          <AdminRoute path="/admin" component={Admin} />
          <PrivateRoute path="/admin" component={Admin} />
          {/* ============== */}

          {/* Template Pages */}
          <Route exact path="/layout/dashboard" component={Dashboard1} />
          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/basic-ui/typography" component={Typography} />
          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />
          <Route path="/tables/basic-table" component={BasicTable} />
          <Route path="/icons/mdi" component={Mdi} />
          <Route path="/charts/chart-js" component={ChartJs} />
          <Route path="/user-pages/login-1" component={Login1} />
          <Route path="/user-pages/register-1" component={Register1} />
          {/* =============== */}

          <Redirect to="/home" />
        </Switch>
      </Suspense>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAdmin: state.loggedIn && state.user && state.user.isAdmin,
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(AppRoutes);
