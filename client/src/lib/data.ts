import image1 from "@assets/stock_images/modern_luxury_living_41a114b6.jpg";
import image2 from "@assets/stock_images/modern_farmhouse_kit_4100b00f.jpg";
import image3 from "@assets/stock_images/cozy_master_bedroom__4a5513c0.jpg";
import image4 from "@assets/stock_images/luxury_bathroom_inte_31962294.jpg";

// Reusing images for the sake of the mockup to fill galleries
const gallery1 = [image1, image2, image3, image4];
const gallery2 = [image2, image3, image4, image1];
const gallery3 = [image3, image4, image1, image2];
const gallery4 = [image4, image1, image2, image3];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  images: string[];
  cover: string;
}

export const projects: Project[] = [
  {
    id: "gable-house",
    title: "Квартира 1",
    category: "Residential",
    description: "Однокомнатная квартира там-то там-то.",
    location: "Aspen, CO",
    year: "2024",
    cover: image1,
    images: gallery1,
  },
  {
    id: "oaks-project",
    title: "The Oaks Project",
    category: "Renovation",
    description:
      "A masterful blend of modern and traditional elements. This historic renovation preserves the character of the original structure while introducing contemporary conveniences and style. The palette is kept neutral to highlight the architectural details.",
    location: "Charleston, SC",
    year: "2023",
    cover: image2,
    images: gallery2,
  },
  {
    id: "hilltop-estate",
    title: "Hilltop Estate",
    category: "New Build",
    description:
      "Elevated indoor/outdoor living in sunny SoCal. This estate was designed to maximize views and embrace the California lifestyle. Large glass doors disappear into pockets, merging the living room with the pool deck.",
    location: "Calabasas, CA",
    year: "2025",
    cover: image3,
    images: gallery3,
  },
  {
    id: "lakeside-retreat",
    title: "Lakeside Retreat",
    category: "Vacation Home",
    description:
      "A serene escape nestled by the water. Using local materials and a soft, nature-inspired color palette, this retreat offers a peaceful sanctuary from city life. Custom joinery and bespoke furniture pieces add a touch of luxury.",
    location: "Lake Tahoe, NV",
    year: "2024",
    cover: image4,
    images: gallery4,
  },
];
