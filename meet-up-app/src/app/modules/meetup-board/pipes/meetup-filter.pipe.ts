import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meetupsFilter'
})
export class MeetupFilterPipe implements PipeTransform {

  transform(items: any, searchText: string): any{
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((meetup: any) => {
      return meetup.name.toLocaleLowerCase().includes(searchText)
        || meetup.owner.fio.toLocaleLowerCase().includes(searchText);
    })
  }

}
