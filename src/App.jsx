import { useAddress, useMetamask } from '@thirdweb-dev/react';
import logo from '../src/assets/buildertech-logo.png';

const App = () => {
   // Use the hooks thirdweb give us.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to BuilderTech DAO</h1>
        <img className="main-logo" src={logo} alt="BuilderTech Logo"/>
        <p>We shape the future of the built world.</p>
        <br></br>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>);
}

export default App;
