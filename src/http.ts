import { OpenibanResponse } from './types';

const https = require('https');

export function get(url: string): Promise<OpenibanResponse> {
  const options = {
    port: 443,
    host: 'openiban.com',
    path: url,
    method: 'get',
    headers: { 'Accept': '*/*' }
  };

  return new Promise((resolve, reject) => {
    https.get(options, (res: any) => {
      res.on('data', (d: String | Buffer) => {
        resolve(JSON.parse(d.toString()));
      });
    }).on('error', (err: Error) => {
      reject(err);
    });
  });
}
