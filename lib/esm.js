function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import hoist from 'hoist-non-react-statics';
import React from 'react';
export default function withContext(contexts) {
  return WrappedComponent => {
    const name = WrappedComponent.displayName || WrappedComponent.name || '<component>';

    const NewComponent = props => {
      const names = Object.keys(contexts);
      const addedProps = {};

      for (const name of names) addedProps[name] = React.useContext(contexts[name]);

      return React.createElement(WrappedComponent, _extends({}, props, addedProps));
    };

    NewComponent.displayName = `withContext(${name})`;
    hoist(NewComponent, WrappedComponent);
    return NewComponent;
  };
}
