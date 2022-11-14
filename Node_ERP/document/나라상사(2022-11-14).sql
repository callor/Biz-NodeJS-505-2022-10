-- 나라상사 ERP
CREATE DATABASE erpDBV2;
USE erpDBV2;
-- table 이 없을때만 생성하라
DROP TABLE tbl_buyer;
CREATE TABLE IF NOT EXISTS tbl_buyer (
	b_code	VARCHAR(5)	PRIMARY KEY COMMENT '거래처코드',
	b_title	VARCHAR(125) NOT NULL,	
	b_ceo	VARCHAR(50)	NOT NULL,	
	b_sid	VARCHAR(14),		
	b_tel	VARCHAR(15),		
	b_industry	VARCHAR(20),		
	b_business	VARCHAR(20),		
	b_ceo_tel	VARCHAR(14),		
	b_manager	VARCHAR(50)	NOT NULL,	
	b_man_tel	VARCHAR(14)	NOT NULL,	
	b_tax_addr	VARCHAR(50),		
	b_post_code	VARCHAR(10),		
	b_post_addr	VARCHAR(125),		
	b_etc_addr	VARCHAR(125)		
);
DESC tbl_buyer;


CREATE TABLE tbl_iolist (
	io_bcode VARCHAR(5),
    io_date VARCHAR(10),
    io_time VARCHAR(15)
);

DROP TABLE tbl_buyer;
DESC tbl_buyer;




