import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    //process error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { hasErrored } = this.state;
    if (hasErrored) {
      return (
      <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/QIxIKBH.png" />
          <ErrorImageText>404 Error - This white sheet is not for sale because this page does not exist! Mwhaha</ErrorImageText>
      </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
