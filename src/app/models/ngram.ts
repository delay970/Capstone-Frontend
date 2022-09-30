export class NGram {

    ngram: string;
    size: number;
    unique: number;
    total: number;

    constructor( ngram: string, size: number, unique: number, total: number){
        this.ngram = ngram;
        this.size = size;
        this.unique = unique;
        this.total = total;
    }

}
