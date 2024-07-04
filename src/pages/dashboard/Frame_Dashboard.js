import '../../App.css';
import Header from '../../components/navs/Header';
import Sidebar from '../../components/navs/Sidebar';
import DashBoard from './DashBoard';
import AdminDashBoard from './AdminDashBoard';
import SidebarAdmin from '../../components/navs/SidebarAdmin';

const Frame_Dashboard = () => {

  return (
    <>
      <Header />
      {localStorage.getItem("userRole")==="User"?( <Sidebar />):( <SidebarAdmin />)}        
      <div style={{ border: 'none', marginLeft: '17.5rem' }}>
        <div style={{ marginTop: '5.5em' }}>
          {localStorage.getItem("userRole")==="User"?( <DashBoard/>):( <AdminDashBoard/>)}         
        </div>
      </div>
    </>
  );
};

export default Frame_Dashboard;


