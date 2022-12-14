-- create user
CREATE ROLE "qa-rw" WITH LOGIN ENCRYPTED PASSWORD '6YENZiWaPzu3LjzbBpi!Hm4G'; -- password in 1password vault
GRANT CONNECT ON DATABASE corso TO "qa-rw";
ALTER ROLE "qa-rw" SET search_path = pghero, pg_catalog, public;
