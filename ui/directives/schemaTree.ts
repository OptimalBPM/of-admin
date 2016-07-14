import "angular";
import "angular-ui-tree";
import "angular-ui-tree/angular-ui-tree.min.css!";
import {TreeScope} from "../types/index";
import {SchemaTreeController} from "../controllers/index";
import { upgradeAdapter } from "/admin/upgrade.adapter";

export const schemaTreeDirective = {
	scope: {
		itemRenderer: "@",
		newNodeObjectId: "@",
		nodeManager: "=",
		expanderPosition: "@",
		treeOptions: "="
  },
  templateUrl: "admin/views/schematree.html",
	controller: SchemaTreeController,
	link: ($scope: TreeScope, element: JQuery) => {
		console.log("link function in schemaTree directive called ");

		if (!($scope.expanderPosition)) {
			$scope.expanderPosition = "left";
		}
		$scope.$watch("onInit", function (value) {
			if ($scope.nodeManager) {
				console.log("Before tree.doInit");
				$scope.tree.doInit($scope);
			}
			else {
				console.log("Initiating schemaTree $scope.nodeManager not set!");
			}
		});

	},
};

export const SchemaTreeComponent = upgradeAdapter.upgradeNg1Component('bpmSchemaTree');
