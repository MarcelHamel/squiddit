DROP TABLE IF EXISTS sub_comments;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS users;


CREATE TABLE "sub_comments" (
	"id" BIGSERIAL NOT NULL,
	"comment_id" integer NOT NULL,
	"username" varchar(25) NOT NULL,
	"content" TEXT NOT NULL,
	CONSTRAINT sub_comments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "comments" (
	"id" BIGSERIAL NOT NULL,
	"topic_id" integer NOT NULL,
	"username" text NOT NULL,
	"content" TEXT NOT NULL,
	"votes" integer DEFAULT 0,
	CONSTRAINT comments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "topics" (
	"id" BIGSERIAL NOT NULL,
	"subject" varchar(64) NOT NULL,
	"content" TEXT NOT NULL,
	"username" varchar(25) NOT NULL,
	"votes" integer DEFAULT 0,
	CONSTRAINT topics_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "users" (
	"id" BIGSERIAL NOT NULL,
	"email" VARCHAR(40) NOT NULL UNIQUE,
	"username" VARCHAR(25) NOT NULL,
	"password_digest" VARCHAR(255) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "comments" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE;
ALTER TABLE "sub_comments" ADD CONSTRAINT "sub_comments_fk0" FOREIGN KEY ("comment_id") REFERENCES "comments"("id") ON DELETE CASCADE;
