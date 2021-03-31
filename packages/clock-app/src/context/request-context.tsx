import { ImSpinner9 } from 'react-icons/im';
import styled from 'styled-components';

import { createContext, ReactNode } from 'react';

import { AppState } from './app-model';
import { useClockAppState } from './app-context';

const Icon = styled(ImSpinner9)`
  animation: icon-spin 1s infinite linear;
  opacity: 0.5;
  size: 2rem;

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

const RequestContext = createContext(null);
RequestContext.displayName = 'RequestContext';

function RequestHandler({
  request,
  children,
}: {
  request: keyof AppState['request'];
  children: ReactNode;
}) {
  const { state } = useClockAppState();

  const status = state.request[request];

  return (
    <RequestContext.Provider value={null}>
      {status === 'pending' ? <Icon /> : children}
    </RequestContext.Provider>
  );
}

export { RequestHandler };
