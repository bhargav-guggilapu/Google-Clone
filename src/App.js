import Home from "./components/Home";
import Search from "./components/Search";
import { Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const [profile, setProfile] = useState("");

  const onAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setProfile(res.user.photoURL);
      })
      .catch((res) => {
        alert("Can't sign in try again later.");
      });
  };

  return (
    <div>
      <Switch>
        <Route path="/tooble" exact>
          <Home setProfile={setProfile} profile={profile} onAuth={onAuth} />
        </Route>
        <Route path="/tooble/search/:query/:index" exact>
          <Search setProfile={setProfile} profile={profile} onAuth={onAuth} />
        </Route>
        <Route path="*">
          <Redirect to="/tooble" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
