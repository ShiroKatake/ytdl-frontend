export const processEnv: any = (name: string) => {
  const env = process.env[name];
  if ((env === undefined) || (env === null)) {
    throw Error(`Environment variable not found: ${name}`);
  }
  return env;
}