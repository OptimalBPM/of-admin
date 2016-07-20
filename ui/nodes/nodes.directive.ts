
import { upgradeAdapter } from "/admin/upgrade.adapter";
import { NodesController} from "./nodes.controller";

export const nodesDirective = {
	scope: true,
  templateUrl: "admin/nodes/nodes.view.html",
	controller: NodesController
};

export const NodesComponent = upgradeAdapter.upgradeNg1Component('bpmNodes');
