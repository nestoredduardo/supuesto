import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TRPCProvider } from './utils/trpc';

export const App = () => {
  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};
