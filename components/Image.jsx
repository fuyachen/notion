// import getBase64 from "@/lib/getBase64";
import { Image as Img } from "next/image";

const Image = async ({ src, ...props }) => {
  // const base64 = await getBase64(src);
  // console.log(base64);
  return (
    <Img
      src={src}
      fill
      alt="image"
      // placeholder="blur"
      // blurDataURL={base64}
      {...props}
    />
  );
};

export default Image;
