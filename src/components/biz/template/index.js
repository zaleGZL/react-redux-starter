import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import classnames from 'classnames';

import Button from '../../ui/button';
import { dispatchChanges, dispatchAsyncChanges } from './actions';
// import { getErrorMessage } from '../../../utils';

import './style.scss';

class Template extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.actions = bindActionCreators(
      {
        dispatchChanges,
        dispatchAsyncChanges,
      },
      props.dispatch
    );
  }

  render() {
    const { actions } = this;
    const { template } = this.props;
    const { name, requestStatus } = template;

    return (
      <div className="template">
        <Button
          onClick={() => {
            actions.dispatchChanges('template', { name: 'zale' });
          }}
        >
          Sync Action
        </Button>
        <Button
          onClick={() => {
            actions.dispatchAsyncChanges('template', { name: 'zaleguo' });
          }}
        >
          Async action
        </Button>
        <div>name: {name}</div>
        <div>requestStatus: {requestStatus}</div>
      </div>
    );
  }
}

Template.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Template.defaultProps = {};

const mapStateToProps = state => {
  return {
    template: state.template,
  };
};

export default connect(mapStateToProps)(Template);
