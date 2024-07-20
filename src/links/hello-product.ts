import HelloModule from "../modules/hello";
import ProductModule from "@medusajs/product";
import { defineLink } from "@medusajs/utils";

export default defineLink(
  {
    linkable: HelloModule.linkable.myCustom,
    isList: true,
  },
  ProductModule.linkable.product
);
