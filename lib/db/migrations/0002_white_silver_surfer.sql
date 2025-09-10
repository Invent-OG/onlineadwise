ALTER TABLE "blogs" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "thumbnail" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "author" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "author_img" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "day" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "month" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" DROP COLUMN "image_url";--> statement-breakpoint
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_slug_unique" UNIQUE("slug");