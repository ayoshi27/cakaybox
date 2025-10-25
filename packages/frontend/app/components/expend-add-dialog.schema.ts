import * as v from "valibot";
import { toTypedSchema } from "@vee-validate/valibot";

const priceSchema = v.pipe(v.number('料金は数字で入力してください'), v.minValue(0));
const expendAddDialogSchema = toTypedSchema(
  v.object({
    price: priceSchema,
  })
);

export { expendAddDialogSchema };
