import { model } from "@medusajs/utils";

const MyCustom = model.define("my_custom", {
  id: model.id().primaryKey(),
  name_hello: model.text(),
});

export default MyCustom;
