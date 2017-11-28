import React, { Component } from 'react';

// functional form
//
// const withClass = (WrappedComponent, classes) => {
//   return (props) => (
//     <div className={classes}>
//        <WrappedComponent {...props}/>
//     </div>
//   );
// }

// class form
//
const withClass = (WrappedComponent, classes) => {
  return class extends Component {
    render () {
      return   (
        <div className={classes}>
           <WrappedComponent {...this.props}/>
        </div>
      );
    }
  }
}

export default withClass;
