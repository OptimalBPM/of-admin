import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Response } from '@angular/http';
import '../core/rxjs.operators';

import { NodeManager, INodeManagement } from '../nodes/index';
import { SchemaTreeComponent, SchemaTree, TreeNode, INodes, IDict} from "../schematree/index";

let __moduleName: any; // fully resolved filename; defined at module load time  

@Component({
    moduleId: __moduleName,  
    selector: 'bpm-nodes',
    templateUrl: 'nodes.view.html',
    directives: [ CORE_DIRECTIVES, SchemaTreeComponent ]
})
export class NodesComponent implements OnInit, INodeManagement, INodes {
    
    /* An instance of the nodeManager */
    nodeManager: INodeManagement;

    /* The forms that are used for each schema id*/
    forms: any;

    /* The schema tree controller */
    tree: SchemaTree;

    // The history data
    history: any[];

    /** The groups variable holds a list of all the groups. */
    groups: any[];

    /* Hold the options for the tree */
    treeOptions: any;

    //Formerly nodeScope values
    $root: any;
    ngform: any;
    $broadcast: any; //TODO:: remove temporary
    selected_schema: any;
    selected_form: any;
    selected_data: any;

    constructor(private http: Http ) {}

    /* TODO: Unresolved bug, sometimes nodes aren"t initialized correctly (undefined arrays) \n Possible to add nodes twice */
    /* TODO: Add proper($timeout-based) animation delay to tree */
    /* TODO: Follow-up so that angular-strap select dropdown positioning on scroll is rectified */

    // *********************** Web service calls ******************************

    /**
     * Returns a promise for all nodes under the node with parent_id
     * @param {string} parentId - an objectId of a parent node, can be null
     * @returns {IHttpPromise}
     */
    onAsyncLoadChildren(parentId: string): Promise<any>{
        if (parentId != null) {
            parentId = "ObjectId(" + parentId.toString() + ")";
        }
        return this.http.post("/node/find", {"parent_id": parentId}).toPromise();
    }

    /**
     * Removes the given node from the database
     * @param {string} nodeId - The ObjectId of the node to remove
     * @returns {IHttpPromise}
     */
    onAsyncRemoveNode(nodeId: string): Promise<any> {
        return this.http.post("/node/remove", {"_id": nodeId}).toPromise();
    }

    /**
     * Returns a list of history items for the node
     * @param {string} historyId - The ObjectId of the node to list history for
     * @returns {IHttpPromise}
     */
    loadHistory(historyId: string): Promise<any> {
        return this.http.post("/node/history", {"_id": historyId}).toPromise();
    }

    /**
     * Is called when the schema form save-button is clicked
     * @param {object} submitData - The data to be submitted
     */
    onSubmit(submitData: any): void {
        this.saveNode(submitData);
    }
    
    getTemplateAsync(schemaRef : string): Promise<any> {
        return this.http.post("/node/get_templates", {"schemaRef": schemaRef}).toPromise();
    }
    

    /**
     * Returns a promise to save the provided data to the database
     * @param {object} saveData - to save, must comply with the relevant mbe schema
     * @returns {IHttpPromise}
     */
    saveNode(saveData): Promise<any> {

        let id: string = saveData["_id"];
        let _curr_child: any;

        _curr_child = this.tree.findChild(this.tree.children, id);

        if (id === this.tree.newNodeObjectId) {
            // Delete the id so that a new item is saved.
            delete saveData["_id"];
        }

        return this.http.post("/node/save", saveData)
            .toPromise()
            .then((response) => {
                let strId: string = response.json();
                saveData["_id"] = strId;
                this.tree.data[strId] = saveData;
                _curr_child.id = saveData["_id"];
                _curr_child.title = saveData["name"];
                _curr_child.type = saveData["schemaRef"];
                _curr_child.allowedChildTypes = saveData["allowedChildTypes"];
                console.log("Data saved, _id: " + strId);
            })
            .catch((error:any) => {
                console.error('An Http error occurred', error);
                this.$root.BootstrapDialog.alert("Saving node failed: " + error.status);
            });
    }

    /*
     * Returns a CSS base class given a tree item
     * @param {TreeNode} node - the tree item.
     * @returns {string}
     */
    getClassFromItem(node: TreeNode): string {
        return "node";
    }

    /*
     * Returns a CSS icon base class given a node type
     * @param {string} nodeType - the node type.
     * @returns {string}
     */
    getIconClass(nodeType: string): string {
        return "";
    }

    /**
     *********************** Refresh functions ******************************
     */

    /**
     * Initialize groups
     */
    onInitGroups() {
        return this.onAsyncLoadChildren("000000010000010001e64c24")
            .then((_data) => {
                this.groups = this.tree.dataToLookups(_data);

            })
            .catch((error:any) => {
                this.$root.BootstrapDialog.alert("Loading groups failed: " + error.status);
            });
    }

    /**
     * Load all schemas
     */
    onInitSchemas(): Promise<any> {
        return this.http.get("/node/get_schemas")
            .toPromise()
            .then((data: any) => {
                this.tree.schemas = data;
            })
            .catch((error:any) => {
                console.error('An Http error occurred', error);
                this.$root.BootstrapDialog.alert("Loading schemas failed: " + error.status);
            });
    }

    /**
     * Load all UI forms
     */
    onInitForms(): Promise<any> {

        return this.http.get("views/nodes/node_forms.json")
            .toPromise()
            .then((data: any) => {
                let _nodeSchemaRef: string = "of://node.json";
                this.forms = data;

                let _nodeForm: any = data[_nodeSchemaRef];

                // Add the node.json fields in the beginning of all the other forms.
                Object.keys(data).forEach(
                    (_currSchemaRef) => {
                        let _newForm: any;
                        if (_currSchemaRef === _nodeSchemaRef) {
                            // Do not concatenate with itself
                            _newForm = _nodeForm.slice(0);
                        }
                        else {
                            // Insert form after nodename and description in base node form
                            _newForm = _nodeForm.slice(0);
                            _newForm.splice.apply(_newForm, [2, 0].concat(data[_currSchemaRef]));
                        }
                        // Add submit and store the finished form.
                        this.forms[_currSchemaRef] = _newForm.concat(
                            [
                                {
                                    type: "submit",
                                    title: "Save"
                                }
                            ]);
                    }
                );
                // TODO: Is AnyOf implemented? https://github.com/Textalk/angular-schema-form/issues/163me
                // TODO: Are $refs implemented? https://github.com/Textalk/angular-schema-form/issues/69
                // TODO: Is populating implemented? https://github.com/Textalk/angular-schema-form/issues/205

            })
            .catch((error:any) => {
                console.error('An Http error occurred', error);
                this.$root.BootstrapDialog.alert("Loading forms failed: " + error.status);
            });
    }


    /**
     * Set the currently edited schema form
     * @param node
     */
    setDetails(node): void {
        let schemaRef: string = "";
        this.selected_schema = null;
        if ("schemaRef" in node) {
            schemaRef = node["schemaRef"];
            this.selected_schema = this.tree.schemas[schemaRef];
            // Set form and add save/submit button
            if (schemaRef in this.forms) {
                this.selected_form = this.forms[schemaRef];
            } else {
                console.log("No form definition for " + schemaRef.toString() + ", using \"*\"");
                this.selected_form = ["*"];
            }
        } else {
            console.log("No schema ref in node: " + node.toString());
        }

        this.selected_data = node;
        console.log("schemaRef: " + schemaRef);

    }

    /**
     * Show the history of a node
     * @param id
     * @returns {IHttpPromise<any>}
     */
    showHistory(id): Promise<any> {

        if (id !== this.tree.newNodeObjectId) {
            return this.loadHistory(id)
                .then((data: any) => {
                    this.history = data;
                })
                .catch((error: any) => {
                    this.$root.BootstrapDialog.alert("Loading history failed: " + error.status);
                });
        }

    }

    /**
     * Select the provided node
     * @param treeNode
     */
    onSelectNode(treeNode): void {
        this.setDetails(this.tree.data[treeNode.id]);
        this.showHistory(treeNode.id);
        this.tree.selectedItem = treeNode;
    }

    onDropped(event: any): void {
        let nodeId: string = event.source.nodeScope.$modelValue.Id;
        this.tree.data[nodeId].parentId = event.dest.nodesScope.parent.$modelValue.id;
        this.saveNode(this.tree.data[nodeId]);
    }

    /**
     * Initialize the node component
     * @param schemaTree
     */
    onInit(schemaTree): void { //TODO:: transform to component output event
        console.log("In NodesComponent.onInit");
        this.tree = schemaTree;
        //TODO:: this.tree.nodeManager = this; 
        this.treeOptions = {
            "dropped": this.onDropped
        };
    }

    // *********************** Initialization *************************

    onAsyncInitTree(): Promise <any> {
        return new Promise<void> ((resolve) => {
            // Initialize all metadata
            this.onInitGroups().then(() => {
                this.onInitForms().then(() => {
                    this.onInitSchemas().then(() => {
                        resolve();
                    });
                });
            });
        });
    }

    
    ngOnInit() {                
        console.log("Initiating NodesComponent");    
        this.nodeManager = this;
        console.log("Initiated NodesComponent");
    }
}