
import "angular";
import "angular-ui-select";
import { upgradeAdapter } from "/admin/upgrade.adapter";
import { NodesScope } from "../types/index";
import { NodesController} from "../controllers/index";

export const nodesDirective = {
  templateUrl: "admin/views/nodes.html",
	controller: NodesController
};

export const NodesComponent = upgradeAdapter.upgradeNg1Component('bpmNodes');
