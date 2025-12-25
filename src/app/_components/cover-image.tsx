import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  className?: string;
};

export function CoverImage({ title, src, slug, className }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm object-contain", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      fill
    />
  );
  return (
    <div className={cn("relative", className)}>
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}