import { ConnectionOptions } from "../connection/connection_params.ts";

const file = "config.json";
const path = new URL("config.json", import.meta.url);

let content = "{}";
try {
  content = await Deno.readTextFile(path);
} catch (e) {
  if (e instanceof Deno.errors.NotFound) {
    console.log(
      `"${file}" wasn't found in the tests directory, using environmental variables`,
    );
  } else {
    throw e;
  }
}

const config: {
  postgres: {
    applicationName: string;
    database: string;
    hostname: string;
    password: string;
    port: string | number;
    users: {
      clear: string;
      clear_tls: string;
      main: string;
      md5: string;
      md5_tls: string;
    };
  };
  postgres_scram: {
    applicationName: string;
    database: string;
    hostname: string;
    password: string;
    port: string | number;
    users: {
      scram: string;
      scram_tls: string;
    };
  };
} = JSON.parse(content);

// TODO
// DRY

export const getClearConfiguration = (): ConnectionOptions => {
  return {
    applicationName: config.postgres.applicationName,
    database: config.postgres.database,
    hostname: config.postgres.hostname,
    password: config.postgres.password,
    port: config.postgres.port,
    user: config.postgres.users.clear,
  };
};

export const getClearTlsConfiguration = (): ConnectionOptions => {
  return {
    applicationName: config.postgres.applicationName,
    database: config.postgres.database,
    hostname: config.postgres.hostname,
    password: config.postgres.password,
    port: config.postgres.port,
    tls: {
      enforce: true,
    },
    user: config.postgres.users.clear_tls,
  };
};

export const getMainConfiguration = (): ConnectionOptions => {
  return {
    applicationName: config.postgres.applicationName,
    database: config.postgres.database,
    hostname: config.postgres.hostname,
    password: config.postgres.password,
    port: config.postgres.port,
    user: config.postgres.users.main,
  };
};

export const getMd5Configuration = (): ConnectionOptions => {
  return {
    applicationName: config.postgres.applicationName,
    database: config.postgres.database,
    hostname: config.postgres.hostname,
    password: config.postgres.password,
    port: config.postgres.port,
    user: config.postgres.users.md5,
  };
};

export const getMd5TlsConfiguration = (): ConnectionOptions => {
  return {
    applicationName: config.postgres.applicationName,
    database: config.postgres.database,
    hostname: config.postgres.hostname,
    password: config.postgres.password,
    port: config.postgres.port,
    tls: {
      enforce: true,
    },
    user: config.postgres.users.md5_tls,
  };
};

export const getScramSha256Configuration = (): ConnectionOptions => {
  return {
    applicationName: config.postgres_scram.applicationName,
    database: config.postgres_scram.database,
    hostname: config.postgres_scram.hostname,
    password: config.postgres_scram.password,
    port: config.postgres_scram.port,
    user: config.postgres_scram.users.scram,
  };
};

export const getScramSha256TlsConfiguration = (): ConnectionOptions => {
  return {
    applicationName: config.postgres_scram.applicationName,
    database: config.postgres_scram.database,
    hostname: config.postgres_scram.hostname,
    password: config.postgres_scram.password,
    port: config.postgres_scram.port,
    tls: {
      enforce: true,
    },
    user: config.postgres_scram.users.scram_tls,
  };
};
