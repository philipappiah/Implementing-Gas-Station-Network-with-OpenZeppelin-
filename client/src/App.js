import React, { useState } from 'react';

import { useWeb3Network, useEphemeralKey, useWeb3Injected } from '@openzeppelin/network';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Hero from './components/Hero/index.js';
import Web3Info from './components/Web3Info/index.js';
import Counter from './components/Counter/index.js';

import styles from './App.module.scss';

// const infuraToken = process.env.REACT_APP_INFURA_TOKEN;
const infuraToken = '89d8a46b2a8d46a8afec97ed7631c6d5';

function App() {
  // get ephemeralKey
  const signKey = useEphemeralKey();

  //get GSN web3
  const context = useWeb3Network(`wss://ropsten.infura.io/ws/v3/${infuraToken}`, {
    pollInterval: 15 * 1000,
    gsn: {
      signKey,
    },
  });

  // const context = useWeb3Network('http://127.0.0.1:8545', {
  //   gsn: {
  //     dev: true,
  //     signKey
      
  //   },
  // });

  //const context = useWeb3Injected();

  // load Counter json artifact
  let counterJSON = undefined;
  try {
    counterJSON = require('../../build/contracts/Counter.json');
  } catch (e) {
    console.log(e);
  }

  // load Counter instance
  const [counterInstance, setCounterInstance] = useState(undefined);
  let deployedNetwork = undefined;
  if (!counterInstance && context && counterJSON && counterJSON.networks && context.networkId) {
    deployedNetwork = counterJSON.networks[context.networkId.toString()];
    if (deployedNetwork) {
      setCounterInstance(new context.lib.eth.Contract(counterJSON.abi, deployedNetwork.address));
    }
  }

  function renderNoWeb3() {
    return (
      <div className={styles.loader}>
        <h3>Web3 Provider Not Found</h3>
        <p>Please, install and run Ganache.</p>
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <Header />
      <Hero />
      <div className={styles.wrapper}>
        {!context.lib && renderNoWeb3()}
        <div className={styles.contracts}>
          <h1>BUILD with GSN Kit!</h1>
          <div className={styles.widgets}>
            <Web3Info title="Web3 Provider" context={context} />
            <Counter {...context} JSON={counterJSON} instance={counterInstance} deployedNetwork={deployedNetwork} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
