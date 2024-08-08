import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FilterMotivo } from "../Filter-Motivo";
import { iFilterControlProps } from "./Filter.types";

export function FiltersControlCategory(props: iFilterControlProps) {
  const { setFilterMotivo } = props;
  const router = useRouter();

  return (
    <div className="sm:w-[350px] sm:mt-5 p-6">
      <FilterMotivo setFilterMotivo={setFilterMotivo} />
      {/* <Button onClick={() => router.refresh()}>
        Borrar Filtros
        <Trash className="w-4 h-4 ml-2" />
      </Button> */}
    </div>
  );
}
