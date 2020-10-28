import { splitAtColon } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { strict } from 'assert';

@Pipe({
    name: 'toCapitals'
})
export class CapitalsPipe implements PipeTransform{
    transform(str: string){
        if (!str)
            return null;
        else {
            let word: string;
            let i = 0;
            let words = [];
            let prepositions = ["the", "a", "at", "and", "or", "but",
                                "both", "either", "that", "of"]

            for (word of str.split(" ")){
                if (i == 0 || !prepositions.includes(word.toLowerCase())){
                    word = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
                }

                words[i] = word;
                i++;
            }
            
            return words.join(" ");
        }
    }
}