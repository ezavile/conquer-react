import React from 'react';
import styled from 'styled-components';

import { AppProvider } from 'app-context';
import {
  DashboardHeader,
  DashboardFollowers,
  DashboardSubscriptions,
} from 'components';

const Container = styled.div`
  max-width: 69.375rem;
  margin: 0 auto;
  padding: 2.25rem 1.5rem;
`;

export const App = () => (
  <AppProvider>
    <Container>
      <DashboardHeader />
      <main>
        <DashboardFollowers />
        <DashboardSubscriptions />
      </main>
    </Container>
  </AppProvider>
);
