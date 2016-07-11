import { SchemaTree, TreeNode, INodes, IDict} from "../schematree/index";

export interface INodeManagement {

    /**
     * Synchronous. If assigned, called to init the tree. *Must* have the treeScope parameter(exact name),
     * exposes the scope of the tree and is the only way to set the rest of the callback and settings.
     * @param treeScope - The scope of the tree
     */

    // Only initiated if not already initiated.
    onInit(schemaTreeController: SchemaTree): void;


    /*The following callbacks should be set in the onInit callback, as the tree scope is available there */

    /** Synchronous. Called when a node is selected
     * @param treeNode
     */
    onSelectNode(treeNode: TreeNode): void;


    /**
     * Async. Called when a node is removed. Typically contains code to remove from backend, Must return a promise.
     * @param {string} id - The ObjectId of the node to remove
     * @returns {ng.IPromise}
     */
    onAsyncRemoveNode?(id: string): Promise<any>;


    /**
     * Async. Called when a children should be loaded. Typically contains code to load from backend, Must return a promise.
     * @param {string} parentId - an Id of a parent node, can be null
     * @returns {ng.IPromise}
     */
    onAsyncLoadChildren?(parentId: string): Promise<any>;


    /**
     * Async. Called when a children should be loaded. Typically contains code to load from backend, Must return a promise.
     * @returns {ng.IPromise}
     */
    onAsyncInitTree(): Promise<any>;


    /**
     * Should return a CSS base class given a tree item. Typically matches the shortname of the schema with a CSS class name.
     * @param {string} node - the tree item.
     * @returns {string}
     */
    getClassFromItem(treeNode: TreeNode): string;


    /**
     * Should return a CSS base class given a tree node type,.
     * @param {string} nodeType - the tree item.
     * @returns {string}
     */
    getIconClass(nodeType: string): string;

}