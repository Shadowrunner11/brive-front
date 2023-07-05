export class RequiredEnvError extends Error {
  constructor(envName: EnvKeys){
    super(`Env ${envName} is required, refer to envexample and add to correct env into .env` )
  }
}

export const getEnvOrThrow = (envName: EnvKeys): string=>{
  const value = import.meta.env[envName]

  if(!value)
    throw new RequiredEnvError(envName)

  return value.toString();
}
