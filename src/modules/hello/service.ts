import { MedusaService } from "@medusajs/utils";
import MyCustom from "./models/my-custom";

class HelloModuleService extends MedusaService({
  MyCustom,
}) {
  constructor() {
    super(...arguments);
  }

  getMessage() {
    return "Hello from HelloModuleService!";
  }
}

export default HelloModuleService;
