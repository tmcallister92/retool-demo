-- create user
CREATE ROLE pghero WITH LOGIN ENCRYPTED PASSWORD 'b!N*BB8zoQ8Un8QoD*XKqcTd'; -- password in 1password vault
GRANT CONNECT ON DATABASE corso TO pghero;
ALTER ROLE pghero SET search_path = pghero, pg_catalog, public;