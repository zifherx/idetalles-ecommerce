export interface iProduct {
  id: number;
  attributes: {
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    motivo: string;
    price: number;
    images: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    category: {
      data: {
        attributes: {
          slug: string;
          categoryName: string;
        };
      };
    };
  };
}

export interface iCategory {
  id: number;
  attributes: {
    categoryName: string;
    slug: string;
    mainImage: {
      data: {
        id: number;
        attributes: {
          url: string;
          name: string;
        };
      };
    };
  };
}
