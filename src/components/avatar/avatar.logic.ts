import useColorThief from "use-color-thief";

export const getColor = (image: string) => {
  const { color } = useColorThief(image, {
    format: "hex",
    colorCount: 10,
    quality: 10,
  });
  return color;
};
