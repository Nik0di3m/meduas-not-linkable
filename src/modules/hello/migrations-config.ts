import { defineMikroOrmCliConfig } from "@medusajs/utils";
import path from "path";
import MyCustom from "./models/my-custom";

export default defineMikroOrmCliConfig("hello", {
  entities: [MyCustom] as any[],
  migrations: {
    path: path.join(__dirname, "migrations"),
  },
});
