import { defineFunction } from '@aws-amplify/backend';

export const setTenantIdPostAuth = defineFunction({
  name: 'SetTenantIdPostAuth',
  entry: './setTenantIdPostAuth/handler.js',
  runtime: 18,
  timeoutSeconds: 60,
  memoryMB: 128
});