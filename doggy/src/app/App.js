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
    <div className="profile-container">
    <h1 className="title">Edit Profile</h1>
    <form className="profile-form" onSubmit={handleSubmit}>
      <div className="avatar-section">
        <img src={avatar || 'path/to/default-avatar.png'} alt="Avatar" className="avatar" />
        <input type="file" id="avatar-upload" onChange={handleAvatarChange} hidden />
        <label htmlFor="avatar-upload" className="avatar-upload-button">Update Avatar</label>
      </div>
      <div className="form-section">
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="We use your email address to send you notifications of your subscribed contests." />
        </div>
        <div className="form-group">
          <label>Discord</label>
          <input type="text" value={discord} onChange={(e) => setDiscord(e.target.value)} placeholder="We may use Discord to contact you regarding your submissions." />
        </div>
        <div className="form-group">
          <label>Telegram</label>
          <input type="text" value={telegram} onChange={(e) => setTelegram(e.target.value)} placeholder="We may use Telegram to contact you regarding your submissions." />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="@" />
        </div>
        <div className="form-group">
          <label>LinkedIn</label>
          <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="in/" />
        </div>
      </div>
      <button className="signup-button" type="submit">Save</button>
    </form>
  </div>
  );
}

export default App;
