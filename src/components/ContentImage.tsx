import Image, { type ImageProps } from "next/image";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/cn";

/** 将 /images/foo.jpg 映射为 /images/foo.webp（需先运行 optimize:images） */
export function webpSrc(src: string): string {
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}

type Props = ImageProps & {
  src: string;
};

/** 优先 WebP、JPEG/PNG 降级的图片组件 */
export function ContentImage({ src, alt, className, fill, sizes, priority, ...rest }: Props) {
  const webp = webpSrc(src);

  if (fill) {
    return (
      <picture className="absolute inset-0 block">
        <source srcSet={assetPath(webp)} type="image/webp" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(className)}
          {...rest}
        />
      </picture>
    );
  }

  return (
    <picture className={cn("block", className)}>
      <source srcSet={assetPath(webp)} type="image/webp" />
      <Image src={src} alt={alt} sizes={sizes} priority={priority} className={className} {...rest} />
    </picture>
  );
}
