

create table final(
    id varchar(50) primary key,
    username varchar(50) unique not null,
    gmail varchar(50) unique,
    password varchar(50) unique not null
)

