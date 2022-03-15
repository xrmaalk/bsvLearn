const bsv = require("bsv");
const Forge = require("txforge");

const privKey = new bsv.PrivKey().fromRandom();
console.log("Private Key is :", privKey.toString());

const keyPair = new bsv.KeyPair().fromPrivKey(privKey);
const pubKey = keyPair.pubKey;
console.log("Public key is :", pubKey.toString());

const address = new bsv.Address().fromPubKey(pubKey);
console.log("Address is :", address.toString());
