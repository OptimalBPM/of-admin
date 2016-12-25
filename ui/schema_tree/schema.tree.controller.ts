import "angular";
import "jquery";
import "bootstrap3-dialog";
import "bootstrap3-dialog/dist/css/bootstrap-dialog.min.css!";

import "angular-ui-tree";
import "angular-ui-tree/angular-ui-tree.min.css!";

import {NodeManager} from "../types/index";
import {ICustomOFScope, IDict, TreeNode, ITree, INodeView} from "../types/schemaTreeTypes"

/* The SchemaTreeControl class is instantiated as a controller class in the typescript model */
export class SchemaTreeController implements ITree {
	/* The SchemaTreeController class holds the generic functionality of the schema-tree.
	 The schema tree consist of an angular-ui-tree and a angular-schema-form instance.
		*/

		/* The url of the angular html template that render each node(not including decoration and expander*/
	itemRenderer: string;

	/* The top level of the tree will be children of the node with _id = topNodeId */
	topNodeId: string;

	/* The ObjectId given to a new node, that cannot collide with a another id */
	newNodeObjectId: string;

	/* An array of the allowed child types of the top node, a angular expression */
	topAllowedChildTypes: string[];

	/* The node manager instance  */
	nodeManager: NodeManager;

	/* The position of the +-sign that is used to expand/collapse the tree */
	expanderPosition: string;

	/* The angular-ui-tree settings that are passed on to the tree */
	treeOptions: any;

	/** An object whose properties are used as a key-value(dictionary) for to the actual data for the trees entities
	 * These are not held in the tree because of possible naming conflicts(id, title) and ordering.  */
	data: IDict;

	/* TODO: Data should likely not be in the tree, but should be broken out. Why has allowedChildTypes to be set in setItemUi?
	 TODO: Break out BootstrapDialog dep
	 */

	/* An object whose properties are used as a key-value(dictionary) for to the actual data for all schema */
	schemas: IDict;

	/* The top list of children, */
	children: TreeNode[];

	/* The currently selected node. Used do track the color of the selected item, defined in HTML */
	selectedItem: TreeNode;

	selected_form: any[];

	selected_data: IDict;
	/* TODO: Use class, and add setting  for selectedItemClass */

	/* CALLBACKS */

	/**
	 * Initializes all schemaTree functionality
	 */
	doInit = (treeScope: ITree) => {
		console.log("In doInit");
		let nodeManager: NodeManager = this.nodeManager;
		if (nodeManager.onInit) {
			console.log("Scope before" + this.toString());
			nodeManager.onInit(this);

			/* Initializes an asyncronous (lazy loading) tree */
			if ((typeof (nodeManager) !== "undefined") && (nodeManager.onAsyncInitTree)) {
				nodeManager.onAsyncInitTree().then(() => {
					if (nodeManager.onAsyncLoadChildren && nodeManager.onAsyncLoadChildren(null) != null) {
						return nodeManager.onAsyncLoadChildren(null)
							.success((data: any) => {
								let _topNodes: any[] = this.childrenToArray(data, null);
								if (_topNodes.length !== 1) {
									this.$scope.$root.BootstrapDialog.alert("Error: There can only be one top node!");
									return null;
								}
								this.setItemUi(_topNodes[0], null);
								// Then load children
								return nodeManager.onAsyncLoadChildren(_topNodes[0].id)
									.success((data) => {
										this.children = this.childrenToArray(data, _topNodes[0]);
										_topNodes[0].children = this.children;
									});

							})
							.error((data: any, status: number, headers: ng.IHttpHeadersGetter, config: ng.IRequestConfig): any => {

								// TODO: Generalize this error parsing.
								let error: string = "Loading items failed: ";
								if (data) {
									error += "\nResponse : " + data.toString();
									try {
										let strData: string = JSON.stringify(data);
										error += "\nJSON representation: " + strData;
									}
									catch (Exception) {
										console.log("Failed to JSON-parse sever response: " + Exception.message);
									}
								}
								if (status) {
									error += "\nStatus : " + status.toString();
								}
								else {
									error += "\nNo status received.";
								}
								this.$scope.$root.BootstrapDialog.alert("Loading items failed: " + error);
							});
					}

				});
			}
		}
		else {
			console.log("Nodemanager has no onInit: " + this.toString());
		}
	};

	/**
	 * Initialize all.
	 */

	/* Convenience wrapper for console.log (console isn't available in the template expression) */
	log = (logText: string) => {
		console.log(logText);
	};

	// Set ui settings for each new rendered node item, called from ng-init
	setItemUi = (item: TreeNode, nodeScope: INodeView) => {
		item.nodeView = nodeScope;
		if (item.id !== this.newNodeObjectId) {
			if (Object.keys(this.data).length > 0) {
				let data: any = this.data[item.id];
				item.allowedChildTypes = data["allowedChildTypes"];
				item.ui.strAllowedChildTypes = "";
				if (item.allowedChildTypes.length === 1) {
					item.ui.strAllowedChildTypes = this.schemas[item.allowedChildTypes[0]]["title"].toLowerCase();
				}
				else {
					for (let currIdx = 0; currIdx < item.allowedChildTypes.length; currIdx++) {
						if (!(item.allowedChildTypes[currIdx] in this.schemas)) {
							continue;
						}
						let shortName = this.schemas[item.allowedChildTypes[currIdx]]["title"].toLowerCase();
						if (currIdx === 0) {
							item.ui.strAllowedChildTypes = item.ui.strAllowedChildTypes + shortName;
						}
						else if (currIdx === item.allowedChildTypes.length - 1) {
							item.ui.strAllowedChildTypes = item.ui.strAllowedChildTypes + " or " + shortName;
						}
						else {
							item.ui.strAllowedChildTypes = item.ui.strAllowedChildTypes + ", " + shortName;
						}

					}
				}

				this.log(item.ui.strAllowedChildTypes);
				// If the data should be expanded by default
				if ((nodeScope) && ("expanded" in data) && (data["expanded"] === true)) {
					this.$timeout(this.onAsyncToggleChildren.bind(null, nodeScope, item));
				}
			}
		}

	};

	// ********************* Helper functions ********************


	/**
	 * Recurse tree to find node in tree by id
	 * @param {array} currChildren - An array of children to be recursed
	 * @param {string} id - The id to be found
	 * @returns {object} - If found, the child, otherwise null.
	 */
	findChild = (currChildren: TreeNode[], id: string) => {
		for (let i = 0; i < currChildren.length; i++) {
			if (currChildren[i].id === id) {
				return currChildren[i];
			}
			else {
				if (currChildren[i].children) {
					let result = this.findChild(currChildren[i].children, id);
					if (result) {
						return result;
					}
				}
			}
		}
		return null;
	};

	/**
	 * Returns a lookup list of all node types
	 */
	lookupChildNodeTypes = () => {

		let items = [];
		Object.keys(this.schemas).forEach((schemaRef) => {
			let item = this.schemas[schemaRef];
			if (item.collection = "node") {
				items.push({ value: schemaRef, name: item.title });

			}
		});
		return items;
	};

	static closeAddBars(item: TreeNode) {
		item.ui.showAddBars = false;
		item.ui.downAddSiblingAfter = false;
		item.ui.downAddChildAfter = false;
	}


	/**
	 * Pushes JSON tree node data from a web request unto an array and the $scope.data key-value dict.
	 * The data can have any structure, however the following fields are necessary:
	 * id: The id of the node, can be anything, must be unique
	 * title: The title of the node
	 * type: The type of the node
	 *
	 * Optional:
	 * expanded: If true, the node will be expanded by default.
	 *
	 * It is recommended to use the same attributes in controllers that provide their own tree node data.
	 * @param inData - The data
	 * @param parent - The parent node
	 * @returns {Array}
	 */
	public childrenToArray = (inData: any, parent: TreeNode): TreeNode[] => {
		let items: TreeNode[] = [];
		inData.forEach((entry) => {
			let _curr_item: TreeNode = new TreeNode();
			_curr_item.id = entry["_id"];
			_curr_item.title = entry["name"];
			_curr_item.type = entry["schemaRef"];
			_curr_item.allowedChildTypes = entry["allowedChildTypes"];
			_curr_item.parentItem = parent;
			this.data[entry["_id"]] = entry;
			items.push(_curr_item);
		});
		return items;
	};


	dataToLookups = (lookupData: any): any[] => {
		let items = [];
		lookupData.forEach((entry) => {
			items.push({ value: entry["_id"], name: entry["name"] });
		});
		return items;
	};

	addNode = (scope: INodeView, item: TreeNode, isParent: boolean, schemaRef: string) => {

		// Create local functions as callback
		let _add = (scope, item, template) => {

			if (!item.children) {
				item.children = [];
			}
			// Create a new child, use a temporary
			let _newChild: TreeNode = new TreeNode();
			_newChild.id = this.newNodeObjectId;

			_newChild.type = schemaRef;
			if (template) {
				_newChild.title = template["name"];
			} else {
				_newChild.title = "New " + this.schemas[schemaRef].title;
			}

			if (isParent) {
				item.children.unshift(_newChild);
			} else {
				let self_idx = item.parentItem.children.indexOf(item);
				item.parentItem.children.splice(self_idx + 1, 0, _newChild);
			}

			let curr_datetime = new Date();
			let curr_data: any;
			if (template) {
				curr_data = template
			} else {
				curr_data = {
					name: _newChild.title,
					schemaRef: schemaRef
				};
			}
			curr_data._id = this.newNodeObjectId;
			curr_data.parent_id = isParent ? item.id : item.parentItem.id;
			curr_data.createdWhen = curr_datetime.toISOString();


			this.data[this.newNodeObjectId] = curr_data;
			if (this.nodeManager.onSelectNode) {
				this.nodeManager.onSelectNode(_newChild);
			}
		};

		let _handleCollapse = (scope, item, template) => {
			// If the parent is collapsed, expand.
			if (isParent && scope.collapsed) {
				this.onAsyncToggleChildren(scope, item).then(() => {
					this.log("returned from toggle_Children");
					_add(scope, item, template);
				});

			}
			else {
				_add(scope, item, template);
			}
		};



		SchemaTreeController.closeAddBars(item);

		if (this.children && this.findChild(this.children, this.newNodeObjectId)) {
			this.$scope.$root.BootstrapDialog.alert("You can only add one item at the time.");
		}
		if (this.nodeManager.getTemplateAsync) {
			this.nodeManager.getTemplateAsync(schemaRef).success((_template) => {
				_handleCollapse(scope, item, _template[0])
			})
		}
		else {
			_handleCollapse(scope, item, null)
		}


		// TODO: ITRT: Fix different situations like adding multiple nodes without saving them.

	};

	/**
	 * Remove a node from the tree
	 * @param scope - the current scope.
	 * @param id - The node id of the node to remove
	 */
	deleteNode = (scope: INodeView, id: string) => {
		this.log("removing");

		// The node is a new node that haven't been saved yet
		if (id === this.newNodeObjectId) {

			this.selected_form = [];
			this.selected_data = {};
			scope.remove();
			console.log("removed from tree");

		} else {
			this.$scope.$root.BootstrapDialog.confirm("Are you sure that you want to remove this node?", (result) => {
				if (result) {
					if (this.nodeManager.onAsyncRemoveNode) {
						this.nodeManager.onAsyncRemoveNode(id).then((data) => {
							scope.remove();
							this.selected_data = null;

							console.log("removed from back end");
						});
					} else {
						scope.remove();
						this.selected_data = null;
					}
				}
			});
		}
	};

	/**
	 * Lazily load on toogle.
	 * @param scope {NodeViewScope} the angular scope variable
	 * @param item {TreeNode} - the item to load
	 */
	onAsyncToggleChildren = (scope: INodeView, item: TreeNode) => {
		this.log("in toggleChildren before promise");
		return new this.$q((resolve, reject) => {
			console.log("in toggleChildren");
			// If it hasn't any children, try and load them.
			if (!item.children) {
				if (this.nodeManager.onAsyncLoadChildren) {
					this.nodeManager.onAsyncLoadChildren(item.id)
						.success((data) => {
							this.log("Before setting children");
							// Set the children of the node
							item.children = this.childrenToArray(data, item);
							if (item.children.length > 0) {
								// Expand the tree node
								scope.toggle();

							}
							resolve();
						})
						.error((data, status, headers, config) => {
							reject("Loading items failed: " + status);
						});
				}
			}
			else {
				// If the children are there already, no loading is necessary
				if (item.children.length > 0) {
					scope.toggle();
				}
			}
			this.log("Exiting toggle_Children");
		});
	};

	$onInit() {
		console.log("link onInit function in schemaTree directive called ");

		if (!(this.expanderPosition)) {
			this.expanderPosition = "left";
		}
		this.$scope.$watch("onInit", () => {
			if (this.nodeManager) {
				console.log("Before tree.doInit");
				this.doInit(this);
			} else {
				console.log("Initiating schemaTree $scope.nodeManager not set!");
			}
		});
	}

	static $inject = ['$scope', '$q', '$timeout'];

	constructor(private $scope: ICustomOFScope, public $q: ng.IQService, public $timeout: ng.ITimeoutService) {
		console.log("Initiating the schema controller" + $scope.toString());
		this.data = {};
		console.log("Initiated the schema tree controller");
	}
}
