const template = (state = {}, action) => {
  switch (action.type) {
    case 'template':
      return Object.assign({}, state, action.data);
    default: {
      return state;
    }
  }
};

export default {
  template,
};
