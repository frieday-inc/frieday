import { join, dirname } from 'path';

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default getAbsolutePath;
