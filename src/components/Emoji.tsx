import { Image, ImageProps } from "@chakra-ui/react";
import bullEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbs from "../assets/thumbs-up.webp";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return <div>😡</div>;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "thumbs up", boxSize: "25px" },
    5: { src: bullEye, alt: "damn shit good asf", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
