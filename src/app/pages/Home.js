import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../redux/actions';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    this.props.dispatch(getPosts());
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="page-header">
          <h1> Home </h1>
        </div>
        <div className="row">
          {this.props.posts.map((p, i) => {
            return (
              <div key={i} className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{p.title}</h4>
                    <p className="card-description">@{p.username}</p>
                    <div className="media">
                      <i className="mdi mdi-earth icon-md text-info d-flex align-self-start mr-3"></i>
                      <div className="media-body">
                        <p className="card-text">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque.
                        </p>
                      </div>
                    </div>
                    <p>{p.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(Home);
