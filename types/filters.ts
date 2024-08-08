export interface iFilter {
  result: iResultFilterType | null;
  loading: boolean;
  error: string;
}

export interface iResultFilterType {
  schema: {
    attributes: {
      motivo: {
        enum: any;
      };
    };
  };
}
