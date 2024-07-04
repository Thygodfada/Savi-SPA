// Import necessary dependencies
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/common/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import AuthLayout from './layouts/AuthLayout';
import { GlobalProvider } from './context/GlobalState';
//import { useAuth } from './context/auth/AuthState'; // Import useAuth hook
import 'react-toastify/dist/ReactToastify.css';
import KYC from './pages/Kyc';
import ForgetPassword from './pages/Reset/ForgetPassword';
import ResetPassword from './pages/Reset/ResetPassword';
import DashBoard from './pages/dashboard/Frame_Dashboard';
import GlobalStyles from './global';
import Sidebar from './components/navs/Sidebar';
import LandingPage from './pages/landingPage/LandingPage';
import Signin from './pages/signinSignup/SignIn';
import Signup from './pages/signinSignup/SignUp';
import FundSavings from './components/modal/FundSavings';
import PersonalSavings from './pages/savings/Frame_PersonalSavings';
import ExploreGroup from './pages/group/Frame_ExploreGroup';
import MyGoalsEmpty from './pages/savings/Frame_MyGoalsEmpty';
import Groupsempty from './pages/group/Frame_GroupEmpty';
import PersonalSavingDetails from './pages/savings/Frame_PersonalSavingDetails';
import CreateSavingsGroupForm from './pages/group/CreateNewSavingsGroup';
import CreateGroupSuccessModal from './components/modal/CreateGroupSuccess';
import ActiveGroupDetails from './pages/group/ActiveGroupDetails';
import ExploreGroupDetails from './pages/group/ExploreGroupDetails';
import ActiveGroups from './pages/group/Frame_Group';
import GroupFlow from './pages/group/GroupFlow';
import RegistrationSuccessful from './pages/signinSignup/RegistrationSuccessful';
import EmailConfirmed from './pages/signinSignup/EmailConfirmed';
 import UserGroups from './pages/group/UserGroups';
 import Transacations from './pages/group/Transacations';
 import GroupTransactions from './pages/group/Group_Transactions';
 import DefaultingUsers from './pages/group/Defaulting_Users';
 import Users from './pages/group/Users';
 import Complaints from './pages/Complaints';
 import Settings from './pages/Settings';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <GlobalStyles />
            <Routes>
              {/* <Route path="/dash" element={<Dash />} /> */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/mygoals" element={<MyGoalsEmpty />} />
              <Route path="/kyc-verification" element={<KYC />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/reset-password" element={<ForgetPassword />} />
              <Route path="/confirmpassword" element={<ResetPassword />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/fundsaving" element={<FundSavings />} />
              <Route path="/personalsaving" element={<PersonalSavings />} />
              <Route path="/groups" element={<Groupsempty />} />
              <Route  path="/personal-saving-details" element={<PersonalSavingDetails />}  />
              <Route path="/explore-groups" element={<ExploreGroup />} />
              <Route  path="/CreateSavingsGroupForms"  element={<CreateSavingsGroupForm />}  />
              <Route path="/CreateGroupSuccessModals"  element={<CreateGroupSuccessModal />} />
              <Route path="/active-groups"  element={<ActiveGroups />}  />
              <Route path="/active-group-details"  element={<ActiveGroupDetails />}  />
              <Route path="/explore-group-details"  element={<ExploreGroupDetails />}  />
              <Route path="/groupflow" element={<GroupFlow />} />
              <Route path="/RegistrationSuccessful" element={<RegistrationSuccessful />} />
              <Route path="/email-confirmed" element={<EmailConfirmed />} />
              <Route path="/user-groups" element={<UserGroups/>}/>
              <Route path="/transactions" element={<Transacations/>}/>
              <Route path="/group-transactions" element={<GroupTransactions/>}/>
              <Route path= "/defaulting-users" element = {<DefaultingUsers/>}/>
              <Route path= "/users" element = {<Users/>}/>
              <Route path= "/complaints" element = {<Complaints/>}/>
              <Route path= "/settings" element = {<Settings/>}/>
            </Routes>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
