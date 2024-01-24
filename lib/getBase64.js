import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (imageUrl) => {
  try {
    const res = await fetch(imageUrl);
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (err) {
    console.log(err.stack);
  }
};

export default getBase64;
