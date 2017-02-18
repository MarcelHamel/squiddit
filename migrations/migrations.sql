-- Exported from DB-DESIGNER.NET schema
DROP TABLE IF EXISTS sub_posts;

CREATE TABLE "sub_posts" (
	"sub_id" serial NOT NULL,
	"post_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"sub_comment" TEXT NOT NULL,
	CONSTRAINT sub_posts_pk PRIMARY KEY ("sub_id")
) WITH (
  OIDS=FALSE
);


DROP TABLE IF EXISTS posts;

CREATE TABLE "posts" (
	"post_id" serial NOT NULL,
	"topic_id" integer NOT NULL,
	-- "user_id" integer NOT NULL,
	"post_content" TEXT NOT NULL,
	"post_votes" integer DEFAULT 0,
	CONSTRAINT posts_pk PRIMARY KEY ("post_id")
) WITH (
  OIDS=FALSE
);


DROP TABLE IF EXISTS topics;

CREATE TABLE "topics" (
	"id" serial NOT NULL,
	"subject" varchar(64) NOT NULL,
	"content" TEXT NOT NULL,
	-- "user-id" integer NOT NULL,
	"votes" integer DEFAULT 0,
	CONSTRAINT topics_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


DROP TABLE IF EXISTS users;

CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(25) NOT NULL,
	"pin" varchar(4) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





-- ALTER TABLE "topics" ADD CONSTRAINT "topics_fk0" FOREIGN KEY ("user-id") REFERENCES "users"("id");


ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("topic_id") REFERENCES "topics"("id");
-- ALTER TABLE "posts" ADD CONSTRAINT "posts_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "sub_posts" ADD CONSTRAINT "sub_posts_fk0" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id");
-- ALTER TABLE "sub_posts" ADD CONSTRAINT "sub_posts_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");

