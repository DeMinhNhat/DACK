import vstruct from "varstruct";
import crypto from "crypto";
import { Keypair } from "stellar-base";
import * as v1 from "./v1";
import axios from "axios";

export const getKey = () => {
    return Keypair.random();
}

export const Transaction = vstruct([
    { name: 'version', type: vstruct.UInt8 },
]);

export function encode(tx) {
    switch (tx.version) {
        case 1:
            return v1.encode(tx);

        default:
            throw Error('Unsupport version');
    }
}

export function decode(data) {
    const versionTx = Transaction.decode(data);
    switch (versionTx.version) {
        case 1:
            return v1.decode(data);

        default:
            throw Error('Unsupport version');
    }
}

export function getUnsignedHash(tx) {
    return crypto
        .createHash('sha256')
        .update(encode({
            ...tx,
            signature: Buffer.alloc(64, 0),
        }))
        .digest();
}

export function sign(tx, secret) {
    const key = Keypair.fromSecret(secret);
    tx.account = key.publicKey();
    tx.signature = key.sign(getUnsignedHash(tx));
}

export function verify(tx) {
    const key = Keypair.fromPublicKey(tx.account);
    return key.verify(getUnsignedHash(tx), tx.signature);
}

export function hash(tx) {
    return tx.hash = crypto.createHash('sha256')
        .update(encode(tx))
        .digest()
        .toString('hex')
        .toUpperCase();
}

export const decodeTransaction = (data) => {
    var transaction = v1.decode(Buffer.from(data, 'base64'));
    return transaction;
}

export function findSequenceAvailable(data, public_key) {
    data.reverse();
    for (const block of data) {
        return block.tx.sequence + 1;
    }
}

export function getUserName(data, public_key) {
    data.reverse();
    let max = 1;
    let name = null;
    for (const block of data) {
        if (block.tx.sequence > max && block.tx.account === public_key && block.tx.operation === 'update_account' && block.tx.params.key === 'name') {
            name = new Buffer(block.tx.params.value).toString()
            max = block.tx.sequence;
        }
    }
    return name;
}

export function getFollowingTracnsaction(data, public_key) {
    const txs = data.filter(block => block.tx.account === public_key &&
        block.tx.operation === 'update_account' && block.tx.params.key === 'followings');
    // let arr = [Buffer.from(base32.decode(publicKey))];
    // arr = v1.Followings.encode({ addresses: arr })
    const followings = txs.map(tx => new Buffer(tx.tx.params.value).toString());
}