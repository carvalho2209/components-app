import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filesize'
})
export class FileSizePipe implements PipeTransform {

    transform(size: number) {

        let sizeCalculated = (size / (1024 * 1024))
        let extension = ' MB'

        if (sizeCalculated > 1024) {
            sizeCalculated = (sizeCalculated / 1024);
            extension = ' GB'
        }

        return sizeCalculated.toFixed(2) + extension;
    }

}
