// 指定されたJSONスキーマファイルを読み込み、スキーマ情報を返す
// -----------------------------------------------------------------------------
import { readFileSync } from 'fs';
import { JSONSchema7 } from 'json-schema';
import { join } from 'path';

export function readSchema(schemaPath: string): JSONSchema7 {
  
  const schema = readFileSync(join(__dirname, schemaPath), 'utf-8');
  return JSON.parse(schema);
}