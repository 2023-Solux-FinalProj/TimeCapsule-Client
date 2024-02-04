import './App.css';
import { Route, Routes } from 'react-router-dom';
import KaKao from './api/KaKao';
import Home from './pages/Home';
import OnBoarding from './pages/OnBoarding';
import AddCard from './pages/AddCard';
import AddedCardList from './pages/AddedCardList';
import InsertMusic from './pages/InsertMusic';
import Send from './pages/Send';
import CapsuleList from './pages/CapsuleList';
import CapsuleDetail from './pages/CapsuleDetail';
import ThemeList from './pages/ThemeList';
import Three from './pages/Three';
import SendCapsule from './pages/SendCapsule';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login/oauth2/code/kakao" element={<KaKao />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create/add" element={<AddCard />} />
        <Route path="/create/addedlist" element={<AddedCardList />} />
        <Route path="/create/music" element={<InsertMusic />} />
        <Route path="/send" element={<Send />} />
        <Route path="/capsulelist" element={<CapsuleList />} />
        <Route path="/capsuledetail" element={<CapsuleDetail />} />
        <Route path="/create" element={<ThemeList />} />
        <Route path="/three" element={<Three />} />
        <Route path="/send/sendcapsule" element={<SendCapsule />} />
      </Routes>
    </div>
  );
}

export default App;
