import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <div className="app transition-all ease-in">
      <SignedOut>
        <div className="signInContainer">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="signInContainer">
          <SignOutButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
      <Home />
      <Canvas />
      <Customizer />
    </div>
  );
}


export default App