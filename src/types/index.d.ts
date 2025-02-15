declare global {
  interface SiteConfig {
    name: string;
    shortName: string;
    description: string;
    url: string;
    ogImage: string;
    logo: string;
    links: {
      linkedin: string;
      facebook: string;
      instagram: string;
    };
    contact: string;
  }

  export interface NavItems {
    title: string;
    href: string;
    services?: Array<NavService>;
  }

  interface NavService {
    title: string;
    href: string;
    description: string;
  }

  interface Service {
    metadata: ServiceMetadata;
    content: string;
  }

  interface ServiceMetadata {
    title?: string;
    description?: string;
    image?: string;
    isFeatured?: boolean;
    id?: number;
    slug: string;
  }
}

// Need to export something to make it a module
export {};
