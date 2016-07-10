import { Promise } from 'core-js'; //TODO remove if compiled to es6
import { INodeManagement } from './index';
import { SchemaTree, TreeNode, INodes, IDict} from "../schematree/index";

/* Everyone inheriting from this class must implement the NodeManagement interface */
export class NodeManager implements INodeManagement {

    /* An instance of the nodeManager */
    nodeManager: INodeManagement;

    /* The forms that are used for each schema id*/
    forms: any;

    /* The schema tree controller */
    tree: SchemaTree;

    constructor(private nodeScope: INodes) {
        console.log("Initiating the nodes manager base class " + this.getClassname());
        this.nodeManager = this;
        console.log("Initiated the nodes manager base class");
    }

    getClassname(): string {
        return this.constructor.toString().match(/\w+/g)[1];
    }

    doSubmit(submit_data: any) {
        // First we broadcast an event so all fields validate themselves
        let result: any = this.nodeScope.$broadcast("schemaFormValidate");

        this.tree.log(result.toString());
        if (this.nodeScope.ngform.$valid) {
            // The form checked out, save data
            this.onSubmit(submit_data);
        }
        else {
            this.nodeScope.$root.BootstrapDialog.alert("The input didn't match validation!");
        }
    }

    onSubmit (submit_data: any): void {
        console.log("onSubmit not implemented in " + this.getClassname() + " base class!");
    }

    onInit (schemaTreeController: SchemaTreeController) {
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
