
import "angular";
import "angular-ui-select";
import { upgradeAdapter } from "/admin/upgrade.adapter";
import { INodesScope } from "../types/index";
import { NodesController} from "../controllers/index";

export const nodesDirective = {
	scope: true,
  templateUrl: "admin/views/nodes.html",
	controller: NodesController
};

export const NodesComponent = upgradeAdapter.upgradeNg1Component('bpm-nodes');
