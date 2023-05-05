import DefaultLayout from "@/components/layout/default-layout";
import ProtectedRoute from "@/utils/protectedRoute";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes } from "@/routers/privateRoutes";
import { publicRoutes } from "@/routers/publicRoutes";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.hasLayout) {
              Layout = DefaultLayout;
            } else if (!route.hasLayout) {
              Layout = Fragment as any;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.hasLayout) {
              Layout = DefaultLayout;
            } else if (!route.hasLayout) {
              Layout = Fragment as any;
            }

            const Page = route.component;
            return (
              <Route key={index} element={<ProtectedRoute />}>
                <Route
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              </Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
