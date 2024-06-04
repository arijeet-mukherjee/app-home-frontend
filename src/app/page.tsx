'use client'
import React, { useState, useRef, useCallback } from "react";
import dynamic from 'next/dynamic';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { store, persistor } from "@store/store";

const HomeComponents = dynamic(() => import('./_app'), {
  loading: () => <p>Loading.....</p>
});

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeComponents />
      </PersistGate>
    </Provider>
  );
}
