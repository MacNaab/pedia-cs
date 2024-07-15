import { nanoid } from "nanoid";
import InputNumber from "@/components/form/inputnumber";
import Input from "@/components/form/input";
import Textarea from "@/components/form/textarea";
import Heading from "@/components/typographie/heading";
import { RadioGroup } from "@/components/form/radio";

interface JsonKey {
  nom: string;
  type: string;
  placeholder?: string;
  choices?: any;
}
function MyItem({ json }: { json: JsonKey }) {
  switch (json.type) {
    case "inputnumber":
      return (
        <div className="my-2">
          <InputNumber
            label={json.nom}
            name={json.nom}
            placeholder={json.placeholder}
          />
        </div>
      );
    case "textarea":
      return (
        <div className="my-2">
          <Textarea
            label={json.nom}
            name={json.nom}
            placeholder={json.placeholder}
          />
        </div>
      );
      case "radio":
        return (
            <div className="my-2">
          <RadioGroup
            name={json.nom}
            label={json.nom}
            items={json.choices}
          />
        </div>
        )
    default:
      return (
        <div className="my-2">
          <Input
            label={json.nom}
            name={json.nom}
            placeholder={json.placeholder}
          />
        </div>
      );
  }
}

function MyForm({ json, titre }: { json: any; titre: string }) {
  return (
    <div className="my-2 min-w-80">
      <Heading level={2}>{titre}</Heading>
      {json.map((e: any) => (
        <MyItem key={nanoid()} json={e} />
      ))}
      <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default function JsonToText({ json }: { json: any }) {
  const keys = Object.keys(json);
  const text = JSON.stringify(keys);

  return (
    <div>
      {keys.map((key) => (
        <MyForm json={json[key]} titre={key} key={nanoid()} />
      ))}
    </div>
  );
}
