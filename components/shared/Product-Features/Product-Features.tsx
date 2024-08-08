import { ProductFeaturesProps } from "./ProductFeatures.types";

export function ProductFeatures(props: ProductFeaturesProps) {
  const { motivo } = props;
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="px-2 py-1 text-white bg-black rounded-full w-fit text-sm dark:bg-white dark:text-black">
        {motivo}
      </p>
    </div>
  );
}
