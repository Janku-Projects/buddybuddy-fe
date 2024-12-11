import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyles from "./styles/globalStyles";
import Layout from "./layouts/Layout";
import RoutesGroup from "./routes/RoutesGroup";


const App: React.FC = () => {

    return (
        <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <GlobalStyles/>
                            <Layout>
                                <RoutesGroup/>
                            </Layout>

                        </PersistGate>
                    </Provider>
                </ThemeProvider>
            </BrowserRouter>
        </SnackbarProvider>
    );
};

export default App;
