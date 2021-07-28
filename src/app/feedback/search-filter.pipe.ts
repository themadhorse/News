import { Pipe, PipeTransform } from "@angular/core";
import { Country } from "./feedback.component";


@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(countryList: Country[], search: string) {
    if(!search) return countryList;
    let updatedList = countryList.filter(
      (country: Country) => {
        if(!country) return;
        return (country.name).toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
    );
    return updatedList;
  }
}
