import { SchemaTree } from "./schema.tree";
import { NodeManager } from "../nodes/index";

export interface ICustomRoot {
    /* This is injected during the application initialization */
    BootstrapDialog: any;
}

interface ICustomOF {
    $root: ICustomRoot;
}
/* This interface is to add typing to the scope */
export interface ITree extends ICustomOF {
    /* The url of the angular html template that render each node(not including decoration and expander*/
    itemRenderer: string;

    /* The top level of the tree will be children of the node with _id = topNodeId */
    topNodeId: string;

    /* The ObjectId given to a new node, that cannot collide with a another id */
    newNodeObjectId: string;

    /* An array of the allowed child types of the top node, a angular expression */
    topAllowedChildTypes: string[];

    /* The tree controller */
    tree: SchemaTree;

    /* The node manager instance  */
    nodeManager: NodeManager;

    /* The position of the +-sign that is used to expand/collapse the tree */
    expanderPosition: string;

    /* The angular-ui-tree settings that are passed on to the tree */
    treeOptions: any;
}

export interface INodes extends ICustomOF {
    ngform: any;
    nodeManager: any;
    $broadcast: any; //TODO:: remove temporary
    forms: any;
    selected_schema: any;
    selected_form: any;
    selected_data: any;
}

export interface INodeView extends ICustomOF {
    collapsed: boolean;
    remove(): void;
    toggle(): void;
}

export interface IDict {
    [index: string]: any;
}

export class UISettings {
    showAddBars: boolean;
    downAddSiblingAfter: boolean;
    downAddChildAfter: boolean;
    strAllowedChildTypes: string;
}

export class TreeNode {
    id: string;
    name: string;
    title: string;
    type: string;
    children: TreeNode[];
    allowedChildTypes: string[];
    expanded: boolean;
    parentItem: TreeNode;
    ui: UISettings;
    nodeViewScope: INodeView;

    constructor() {
        this.ui = new UISettings();
    }

}
