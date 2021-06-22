\echo 'Delete and recreate vaccine_hubdb?'
\prompt 'Return for yes or control-c to cancel >' answer

drop database vaccine-hub-api;
create database vaccine-hub-api;
\connect vaccine-hub-api

\i vaccine-hub-schema.sql