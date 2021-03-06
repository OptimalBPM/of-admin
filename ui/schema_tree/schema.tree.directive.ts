import { SchemaTreeController } from "../schema_tree/index";
import { upgradeAdapter } from "/admin/upgrade.adapter";

export const schemaTreeDirective = {
	bindings: {
		itemRenderer: "@",
		newNodeObjectId: "@",
		nodeManager: "=",
		expanderPosition: "@",
		treeOptions: "="
  },
  templateUrl: "admin/schema_tree/schema.tree.view.html",
	controller: SchemaTreeController
};

// TODO:: only used in angular 1.x currently
// export const SchemaTreeComponent = upgradeAdapter.upgradeNg1Component('ofSchemaTree');
