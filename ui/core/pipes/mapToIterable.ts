import { Pipe, PipeTransform } from '@angular/core';

/**
 * Example:  
 *  <div *ngFor="let pair of object | mapToIterable">
 *    key {{ pair.key }} and value {{ pair.value }}
 *  </div>
 * 
 **/
@Pipe({ name: 'mapToIterable' })
export class MapToIterable implements PipeTransform {
    transform(value: any) {
        let result = [];
        for (let key in value) {
            result.push({ key, value: value[key] });
        }
        console.log('trying', result);
        return result;
    }
}