import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './services/auth';
import ProtectedRoute from './components/common/ProtectedRoute';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import Dashboard from './pages/User/Dashboard';
import ReportItem from './pages/User/ReportItem';
import Profile from './pages/User/Profile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ClaimsManagement from './pages/Admin/ClaimsManagement';
import AllItems from './pages/Admin/AllItems';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage hideHeaderFooter />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/report-item" element={<ReportItem />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              
              <Route element={<ProtectedRoute roles={['ADMIN']} />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/claims" element={<ClaimsManagement />} />
                <Route path="/admin/items" element={<AllItems />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </AuthProvider>
  );
}

export default App;