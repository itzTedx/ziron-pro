export interface CaseType {
  id: number;
  title: string;
  category: string;
  href: string;
  imageUrl: string;
}

export const CASE_STUDIES: CaseType[] = [
  {
    id: 1,
    title: "Aura Group",
    category: "Digital Marketing",
    href: "/case-studies/aura-group",
    imageUrl: "/images/featured/post-3.jpg",
  },
  {
    id: 2,
    title: "Tawreeq Document Clearing Services",
    category: "Web Development",
    href: "/case-studies/tawreeq",
    imageUrl: "/images/featured/post-7.jpg",
  },
  {
    id: 3,
    title: "SAJ Consultants",
    category: "Social Media Marketing",
    href: "/case-studies/saj-collection",
    imageUrl: "/images/featured/post-8.jpg",
  },
  {
    id: 4,
    title: "Simply KF",
    category: "Branding",
    href: "/case-studies/simply-kf",
    imageUrl: "/images/featured/post-13.jpg",
  },
  {
    id: 5,
    title: "Ziron Media",
    category: "Branding",
    href: "/case-studies/simply-kf",
    imageUrl: "/images/featured/post-2.jpg",
  },
];
