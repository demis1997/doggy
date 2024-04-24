import { Routes, Route } from "react-router-dom";
import HomeOne from "pages/home-one";

import StakingFive from "pages/staking-5";
import KycOne from "pages/kyc-1";
import Signin from "pages/login";
import Signup from "pages/register";
import ForgetPassword from "pages/forget-password";

import Leaderboard from "pages/leaderboard";
import IGORanking from "pages/igo-ranking";
import IgoApply from "pages/igo-apply";
import RoadmapDetails from "pages/roadmap-details";
import TeamDetails from "pages/team-details";
import Contact from "pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeOne />} exact />
      <Route path="/staking-5" element={<StakingFive />} />
      <Route path="/kyc-1" element={<KycOne />} />

      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />

      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/igo-ranking" element={<IGORanking />} />
      <Route path="/igo-apply" element={<IgoApply />} />
      <Route path="/roadmap-details" element={<RoadmapDetails />} />
      <Route path="/team-details" element={<TeamDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
