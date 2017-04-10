DROP TABLE IF EXISTS sub_posts;

CREATE TABLE "sub_comments" (
	"id" BIGSERIAL NOT NULL,
	"comment_id" integer NOT NULL,
	"username" varchar(25) NOT NULL,
	"content" TEXT NOT NULL,
	CONSTRAINT sub_comments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


DROP TABLE IF EXISTS posts;

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


DROP TABLE IF EXISTS topics;

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


DROP TABLE IF EXISTS users;

CREATE TABLE "users" (
	"id" BIGSERIAL NOT NULL,
	"name" VARCHAR(40) NOT NULL,
	"password_digest" VARCHAR(255) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





-- ALTER TABLE "topics" ADD CONSTRAINT "topics_fk0" FOREIGN KEY ("user-id") REFERENCES "users"("id");


ALTER TABLE "comments" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("topic_id") REFERENCES "topics"("id");
-- ALTER TABLE "posts" ADD CONSTRAINT "posts_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "sub_comments" ADD CONSTRAINT "sub_comments_fk0" FOREIGN KEY ("comment_id") REFERENCES "comments"("id");
-- ALTER TABLE "sub_posts" ADD CONSTRAINT "sub_posts_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");

