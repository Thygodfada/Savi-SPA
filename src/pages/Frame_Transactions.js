import '../App.css';
import Header from '../components/navs/Header';
import Sidebar from '../components/navs/Sidebar';
const Frame_Transactions = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ border: 'none', marginLeft: '17.5rem' }}>
        <div style={{ marginTop: '7em' }}>
          TRANSACTIONS
        </div>
      </div>
    </>
  );
};

export default Frame_Transactions;
