import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { iFilter } from "@/types/filters";
import { iFilterMotivoProps } from "./Filter-Motivo.types";

export function FilterMotivo(props: iFilterMotivoProps) {
  const { setFilterMotivo } = props;

  const { result, loading }: iFilter = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Motivo</p>
      {loading && result === null && <p>Cargando motivos...</p>}

      <RadioGroup onValueChange={(value) => setFilterMotivo(value)}>
        {result !== null &&
          result.schema.attributes.motivo.enum.map((motivo: any) => (
            <div key={motivo} className="flex items-center space-x-2">
              <RadioGroupItem value={motivo} id={motivo} />
              <Label htmlFor={motivo}>{motivo}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
}
