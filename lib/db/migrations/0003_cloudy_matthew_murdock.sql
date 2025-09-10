ALTER TABLE "blogs" ALTER COLUMN "slug" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "title" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "excerpt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "thumbnail" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "author" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "author_img" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "blogs" DROP COLUMN "category";--> statement-breakpoint
ALTER TABLE "blogs" DROP COLUMN "day";--> statement-breakpoint
ALTER TABLE "blogs" DROP COLUMN "month";