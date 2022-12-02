-- bbsDB, root 로그인
CREATE DATABASE bbsDB;
USE bbsDB;

/*
AUTO_INCREMENT 속서
INSERT 를 수행할때 특별히 값이 없을때 또는 0 일때
	기존의 칼럼 값을 비교하여 1 만큼 자동 증가된 값으로 지정한다
DEFAULT 속성
INSERT 를 수행할때 특별히 값이 없을때 채워넣을 값 지정

(DATE_FORMAT(NOW(),'%Y-%m-%d'))
현재 DB 가 설치된 서버(컴퓨터)의 현재 시각을 가져와서
YYYY-MM-DD 형식의 문자열로 변환하라

NOT NULL
DEFAULT CURRENT_TIMESTAMP
ON UPDATE CURRENT_TIMESTAMP,	
최초 INSERT 가 될때 자동으로 현재 TIMESTAMP(시간 일련번호)를
날짜시각 형태로 변경하여 저장하고
UPDATE 가 될때 자동으로 현재 TIMESTAMP 값으로 변경하라


*/
CREATE TABLE tbl_bbs (
	b_seq BIGINT	AUTO_INCREMENT	PRIMARY KEY,
	b_date VARCHAR(10) NOT NULL 
		DEFAULT (DATE_FORMAT(NOW(),'%Y-%m-%d')),	
	b_time VARCHAR(10) NOT NULL
		DEFAULT (DATE_FORMAT(NOW(),'%H:%i:%S')),	
	b_writer VARCHAR(125)	NOT NULL,	
	b_subject VARCHAR(125)	NOT NULL,	
	b_content TEXT	NOT NULL,	
	b_count	INT,		
	b_update datetime 
		NOT NULL
		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
DESC tbl_bbs;

/*
참조무결성 설정(포린키, FOREIGN)
CONSTRAINT f_bbs
FOREIGN KEY(f_bseq) REFERENCES tbl_bbs(b_seq)
tbl_bbs 테이블의 b_seq 칼럼과 현재 table 의 f_bseq 칼럼을 
서로 연결하여 참조관계를 공고히 하는 설정
tbl_bbs(b_seq)		tbl_files(f_seq)
====================================
있다				=>	있을 수 있다
없다				=>	절대 없다
반드시 있어야 한다	<=	있다
=====================================

tbl_bbs 와 tbl_files 간에 연결관계를 철저히 유지하여
게시글이 없는데 첨부파일정보가 존재하는 것을 방지하는 목적이 있다
tbl_bbs 에 키값이 있고, 그 키에 해당하는 연결 정보가 tbl_files 에 있는 경우
해당하는 데이터는 삭제, 키값의 Update는 기본적으로 금지된다
ON DELETE CASCADE
tbl_bbs 의 어떤 데이터를 삭제를 시도하는 경우
그 키값에 해당하는 데이터가 tbls_files 에 있으면 같이 모두 삭제

ON UPDATE CASCADE
키값을 변경하면 자동으로 같이 변경
UPDATE tbl_bbs
SET b_seq = 100
WHERE b_seq = 10; 이 명령을 시도하면

UDPATE tbl_files
SET f_bseq = 100
WHERE f_bseq = 10; 이 명령이 같이 실행된다

참조무결성(FOREIG KEY) 설정은
1:N 관계 table 에서 N 의 table 에 설정한다
1의 table 은 PK 이어야 한다
*/
CREATE TABLE tbl_files (
	f_seq	BIGINT	AUTO_INCREMENT,	
	f_bseq	BIGINT	NOT NULL,	
	f_date	VARCHAR(10)	NOT NULL	DEFAULT (DATE_FORMAT(NOW(),'%Y-%m-%d')),
	f_time	VARCHAR(10)	NOT NULL	DEFAULT (DATE_FORMAT(NOW(),'%H:%i:%S')),
	f_original_name	VARCHAR(255)	NOT NULL,
	f_save_name	VARCHAR(255)	NOT NULL,	
	f_ext	VARCHAR(10)	NOT NULL,	
	PRIMARY KEY(f_seq),
    
    CONSTRAINT f_bbs
	FOREIGN KEY(f_bseq) REFERENCES tbl_bbs(b_seq)
    ON DELETE CASCADE
    -- ON UPDATE CASCADE
);

-- 이미 생성된 table 간에 참조 무결성 설정
-- 단 이때는 두 table 간에 EQ JOIN 이 성립되어야 한다
ALTER TABLE tbl_files ADD CONSTRAINT f_bbs
FOREIGN KEY(f_bseq) REFERENCES tbl_bbs(b_seq)
ON DELETE CASCADE;

-- 참조 무결성 관계를 삭제하기
ALTER TABLE tbl_files
DROP CONSTRAINT f_bseq;





