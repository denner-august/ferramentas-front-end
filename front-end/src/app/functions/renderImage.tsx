import Image, { StaticImageData } from "next/image";

interface RenderImageProps {
  princialImage: StaticImageData;
  BluerImage: string;
  alt: string;
}

export function RenderImage({
  princialImage,
  BluerImage,
  alt,
}: RenderImageProps) {
  return (
    <figure>
      <Image
        src={princialImage}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
        }}
        blurDataURL={BluerImage}
      />
    </figure>
  );
}
