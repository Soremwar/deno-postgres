CREATE USER CLEAR WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE POSTGRES TO CLEAR;

CREATE USER CLEAR_TLS WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE POSTGRES TO CLEAR_TLS;

CREATE USER MD5 WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE POSTGRES TO MD5;

CREATE USER MD5_TLS WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE POSTGRES TO MD5_TLS;
