import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    }

    componentWillMount () {
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(
        res => res, error => {this.setState({error: error})});
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    clearErrorHandler = () => {
      this.setState({error: null});
    }

    render () {
      return (
        <Aux>
        <Modal
          show={this.state.error}
          modalClosed={this.clearErrorHandler}>
          {this.state.error ? this.state.error.message : null}
        </Modal>
        <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;
