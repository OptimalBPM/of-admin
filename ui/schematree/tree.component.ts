import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Response } from '@angular/http';
import { Promise } from 'core-js'; //TODO remove if compiled to es6
import '../core/rxjs.operators';

import { NodeManager, INodeManagement } from '../nodes/index';
import { SchemaTree, TreeNode, INodes, INodeView, IDict, ITree} from "../schematree/index";

let __moduleName: any; // fully resolved filename; defined at module load time  

@Component({
    moduleId: __moduleName,
    selector: 'bpm-schema-tree',
    templateUrl: 'tree.view.html',
    directives: [CORE_DIRECTIVES],
    inputs: ['itemRenderer', 'newNodeObjectId', 'nodeManager', 'expanderPosition', 'treeOptions']
})
export class SchemaTreeComponent extends SchemaTree implements OnInit {

    tree: SchemaTree;

    constructor(private scope: ITree) { 
        super(scope);
    }

    getClassname(): string {
        return this.constructor.toString().match(/\w+/g)[1];
    }

    ngOnInit() {
        console.log("Initiating the schema controller" + this.getClassname());
        this.data = {};
        if (!(this.scope.expanderPosition)) {
            this.scope.expanderPosition = "left";
        }

        // TODO:: wrap if statement in angular2 watch equivalent
        // $scope.$watch("onInit"
        if (this.scope.nodeManager) {
            console.log("Before tree.doInit");
            this.scope.tree.doInit(this.scope);
        }
        else {
            console.log("Initiating schemaTree this.scope.nodeManager not set!");
        }
        
        console.log("Initiated the schema tree controller");
    }
}