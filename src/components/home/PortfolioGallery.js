import Gallery from "@/commonComponents/media/Gallery";
import { motion } from "framer-motion";
import {
  fadeDown,
  fadeDownIn,
  fadeDownOn,
} from "@/commonComponents/motion/animate";

const images = [
  {
    url: "/images/portfolio/codeai/codeai-img-1.webp",
    alt: "Nature 1",
    category: "nature",
  },
  {
    url: "/images/portfolio/codeai/codeai-img-1.webp",
    alt: "Nature 2",
    category: "nature",
  },
  {
    url: "/images/portfolio/codeai/codeai-img-1.webp",
    alt: "Architecture 1",
    category: "architecture",
  },
  {
    url: "/images/portfolio/codeai/codeai-img-1.webp",
    alt: "Architecture 2",
    category: "architecture",
  },
  {
    url: "/images/portfolio/codeai/codeai-img-1.webp",
    alt: "Architecture 2",
    category: "architecture",
  },

  // Add more images with different categories
];

export default function PortfolioGallery() {
  return (
    <div>
      <div className="container pt-5">
        <motion.div
          initial={fadeDownIn}
          whileInView={fadeDownOn}
          transition={fadeDown}
        >
          <h1 style={{ textAlign: "center" }}>Portfolio</h1>
        </motion.div>
        <motion.div
          initial={fadeDownIn}
          whileInView={fadeDownOn}
          transition={fadeDown} className="d-flex justify-content-center py-4"
        >
          <Gallery images={images} itemsPerPage={2} />
        </motion.div>
      </div>
    </div>
  );
}
