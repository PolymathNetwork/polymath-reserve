var MultiSigWallet = artifacts.require('./MultiSigWallet.sol');

module.exports = async (deployer, network) => {
  const owner1 = '0x521BB2255d30411b970485284053Db971B7a2e74';
  const owner2 = '0xb8bA58ceA064e45f77f9eB726F684f570B0092e2';
  const owner3 = '0xf0944Cd8A126C08d91ef08761c188175D42444db';
  const req = 3;
  await deployer.deploy(MultiSigWallet, [owner1, owner2, owner3], req);
  console.log(`
    ---------------------------------------------------------------
    ---------- POLYMATH (POLY) RESERVE MULTISIG DEPLOYED ----------
    ---------------------------------------------------------------
    - Contract address: ${MultiSigWallet.address}
    - Owners #1: ${owner1}
    - Owners #2: ${owner2}
    - Owners #3: ${owner3}
    - Required signatures: ${req}
    ---------------------------------------------------------------
  `);
};
