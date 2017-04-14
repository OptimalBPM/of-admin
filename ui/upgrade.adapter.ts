
import 'reflect-metadata';

import { forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeAdapter } from '@angular/upgrade';

import {AppModule} from "./app.module";
import * as adminComponent from "./admin/admin.component";

console.log("Before setting upgrade adapter");
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

adminComponent.nodesComponent = upgradeAdapter.upgradeNg1Component('ofNodes');

console.log("adminComponent.nodesComponent is set");
