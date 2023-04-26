import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from '../components/navigation/page';
// import DashboardContainer from '../pages/dashboard/dashboard';
import NotFound from '../pages/not_found';
import Welcome from '../pages/welcome';
import Setting from '../pages/setting/setting';
import Dashboard from '../pages/Dashboard/index';
import Profile from  '../pages/Profile/index'
import Product from '../pages/Product/index';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                {/* Dashboard Start */}
                <Route
                    path="/dashboard"
                    element={(
                        <Page title="Dashboard" protect>
                            <Dashboard />
                        </Page>
                    )}
                />
                {/* Product Start */}
                <Route
                    path="/product"
                    element={(
                        <Page title="Product" protect>
                            <Product />
                        </Page>
                    )}
                />
                {/* Setting */}
                <Route
                    path="/profile"
                    element={(
                        <Page title="Profile" protect>
                            <Profile />
                        </Page>
                    )}
                />
                {/* Setting */}
                <Route
                    path="/setting"
                    element={(
                        <Page title="Setting" protect>
                            <Setting />
                        </Page>
                    )}
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
