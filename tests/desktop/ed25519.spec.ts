/* eslint-disable prettier/prettier */

import { sha256 } from '@spacemesh/sm-codec/lib/utils/crypto';
import * as ed from '../../desktop/ed25519';

describe('ed25519', () => {
  const publicKey =
    'd3a11c7b10ea55551210952219314b3ab3eae3c571e1274736cda24bb2bd0f7f';
  const secretKey =
    '78cf687d957abba7d555c2e0974e1c83c34e8c4bc491b3d034216fdf9a78c94dd3a11c7b10ea55551210952219314b3ab3eae3c571e1274736cda24bb2bd0f7f';
  const genesisID = new Uint8Array([
      51,
    13,
    17,
    59,
    152,
    12,
    243,
    163,
    29,
    125,
    73,
    182,
    3,
    150,
    80,
    133,
    46,
    74,
    42,
    216
  ]);
  it('sign', () => {
    const tx = Uint8Array.from([
      0, 0, 0, 0, 0, 136, 115, 101, 220, 126, 211, 50, 161, 69, 251, 61, 50, 57,
      9, 205, 103, 53, 34, 165, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4, 211, 161, 28, 123, 16, 234, 85, 85,
      18, 16, 149, 34, 25, 49, 75, 58, 179, 234, 227, 197, 113, 225, 39, 71, 54,
      205, 162, 75, 178, 189, 15, 127,
    ]);
    const hash = sha256(new Uint8Array([...genesisID, ...tx]));

    const sig = ed.sign(hash, secretKey);

    expect(sig).toEqual(
      Uint8Array.from([
        78, 199,   0,  29, 164, 222, 224, 105,  18, 107,  82,
        127, 198,  21,  27, 133,  65,  72, 134, 118, 167,  64,
        53,   4,  74, 172, 245, 220, 145, 117, 243, 209, 206,
        203, 233, 242, 222, 199, 168, 188, 254, 188,  86, 164,
        113, 124, 230,  34, 196, 169, 103,  98,  20, 155,  31,
        79,  86,  95, 253,  73,  82,  52,  57,   1
      ])
    );
  });
  it('verify', () => {
    const tx = Uint8Array.from([
      0, 0, 0, 0, 0, 136, 115, 101, 220, 126, 211, 50, 161, 69, 251, 61, 50, 57,
      9, 205, 103, 53, 34, 165, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4, 211, 161, 28, 123, 16, 234, 85, 85,
      18, 16, 149, 34, 25, 49, 75, 58, 179, 234, 227, 197, 113, 225, 39, 71, 54,
      205, 162, 75, 178, 189, 15, 127,
    ]);
    const hash = sha256(new Uint8Array([...genesisID, ...tx]));

    const sig = Uint8Array.from([
      78, 199,   0,  29, 164, 222, 224, 105,  18, 107,  82,
      127, 198,  21,  27, 133,  65,  72, 134, 118, 167,  64,
      53,   4,  74, 172, 245, 220, 145, 117, 243, 209, 206,
      203, 233, 242, 222, 199, 168, 188, 254, 188,  86, 164,
      113, 124, 230,  34, 196, 169, 103,  98,  20, 155,  31,
      79,  86,  95, 253,  73,  82,  52,  57,   1
    ]);

    const res = ed.verify(hash, sig, publicKey);

    expect(res).toBeTruthy();
  });
});
