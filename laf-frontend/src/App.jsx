import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Basic placeholder components - will replace with actual components later
const Login = () => <div>Login Page</div>;
const Register = () => <div>Register Page</div>;
const UserDashboard = () => <div>User Dashboard</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;
const ReportItem = () => <div>Report Item</div>;
const Profile = () => <div>Profile</div>;

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/report" element={<ReportItem />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
