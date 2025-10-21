import { Pipe, PipeTransform } from '@angular/core';

interface ITodo {
  label: string;
  status: string;
}

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    todoCollection: Array<ITodo>,
    filteredStatus: string
  ): Array<ITodo> {
    console.log('[TRANSFORM]');

    if (filteredStatus === '') {
      return todoCollection;
    }

    let resultArray = [];
    for (let todo of todoCollection) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }
}

// Create a pipe for Sorting -> desc / asc
