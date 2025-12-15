import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

export function CoverImage({ title, src, slug }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm object-cover", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      fill
    />
  );
  return (
    <div className="sm:mx-0 relative h-96">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}