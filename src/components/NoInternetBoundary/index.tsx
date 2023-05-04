import React from 'react';
import { HiStatusOffline } from 'react-icons/hi';
import { Container } from './styles';

export default class NoInternetBoundary extends React.Component<
  any,
  { hasError: boolean }
> {
  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <HiStatusOffline />
          <h1>O Spotify não está disponível enquanto você está offline.</h1>
        </Container>
      );
    }

    return this.props.children;
  }
}
