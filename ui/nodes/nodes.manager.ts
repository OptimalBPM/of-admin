import { INodeManagement } from './index';
import { SchemaTree, TreeNode, INodes, IDict} from "../schematree/index";

/* Everyone inheriting from this class must implement the NodeManagement interface */
export class NodeManager implements INodeManagement, INodes {

    /* An instance of the nodeManager */
    nodeManager: INodeManagement;

    /* The forms that are used for each schema id*/
    forms: any;

    /* The schema tree controller */
    tree: SchemaTree;

    //Formerly nodeScope values
    $root: any;
    ngform: any;
    $broadcast: any; //TODO:: remove temporary
    selected_schema: any;
    selected_form: any;
    selected_data: any;

    constructor(public nodeScope: INodes) {
        console.log("Initiating the nodes manager base class " + this.getClassname());
        this.nodeManager = this;
        console.log("Initiated the nodes manager base class");
    }

    getClassname(): string {
        return this.constructor.toString().match(/\w+/g)[1];
    }

    doSubmit(submit_data: any) {
        // First we broadcast an event so all fields validate themselves
        let result: any = this.$broadcast("schemaFormValidate");

        this.tree.log(result.toString());
        if (this.ngform.$valid) {
            // The form checked out, save data
            this.onSubmit(submit_data);
        }
        else {
            this.$root.BootstrapDialog.alert("The input didn't match validation!");
        }
    }

    onSubmit (submit_data: any): void {
        console.log("onSubmit not implemented in " + this.getClassname() + " base class!");
    }

    onInit (schemaTreeController: SchemaTree) {
        console.log("onInit not implemented in " + this.getClassname() + " base class!");
    }

    onSelectNode (treeNode: TreeNode): void {
        console.log("onSelectNode not implemented in " + this.getClassname() + " base class!");
    }

    getClassFromItem (treeNode: TreeNode): string {
        console.log("onSelectNode not implemented in " + this.getClassname() + " base class!");
        return "";
    }

    getIconClass (nodeType: string): string {
        console.log("getIconClass not implemented in " + this.getClassname() + " base class!");
        return "";
    }

    getTemplateAsync (schemaRef: string): Promise<any> {
        console.log("getTemplateAsync not implemented in " + this.getClassname() + " base class!");
        return null;
    }

    onAsyncInitTree(): Promise<any> {
        console.log("onAsyncInitTree not implemented in " + this.getClassname() + " base class!");
        return null;
    };

    onAsyncLoadChildren (parentId: string): Promise<any> {
        console.log("onAsyncLoadChildren not implemented in " + this.getClassname() + " base class!");
        return null;
    }

    onAsyncRemoveNode (parentId: string): Promise<any> {
        console.log("onAsyncRemoveNode not implemented in " + this.getClassname() + " base class!");
        return null;
    }
}
