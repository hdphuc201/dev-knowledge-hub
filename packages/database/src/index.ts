export const databasePackageName = "@dev-knowledge-hub/database";

export type DatabaseConfig = {
  connectionUrl: string;
};

export function createDatabaseConfig(connectionUrl: string): DatabaseConfig {
  return {
    connectionUrl,
  };
}
