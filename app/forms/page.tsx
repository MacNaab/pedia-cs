import Image from "next/image";
import Textarea from "@/components/form/textarea";
import {RadioGroup} from "@/components/form/radio";
import Input from "@/components/form/input";

export default function Home() {
  return (
    <main className="p-24">
      <RadioGroup items={[{label: "Option 1", name: "bordered-radio"}, {label: "Option 2", name: "bordered-radio"}, {label: "Option 3", name: "bordered-radio"}]} />
      <Textarea label="Textarea" name="textarea" />
      <Input label="Input" name="input" size="small" />
      <Input label="Input" name="input" size="base" />
      <Input label="Input" name="input" size="large" />
    </main>
  );
}
