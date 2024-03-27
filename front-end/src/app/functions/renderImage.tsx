import Image from "next/image";
import { renderImageProps } from "../types/renderImage";

export function RenderImage({
  princialImage,
  BluerImage,
  alt,
}: renderImageProps) {
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
