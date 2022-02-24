type TShoesModels = 'cloud' | 
    'cloudflow' | 
    'cloudventure' |
    'cloudsurfer' |
    'cloudventure_waterproof' |
    'cloudventure_peak' |
    'cloudflyer'

export interface IShoe {
    id: string;
    name: TShoesModels;
    rating: number;
}

export interface IQuestion {
    id: number;
    copy: string;
    answers: IAnswer[];
}

export interface IAnswer {
    id: number;
    copy: string;
    nextQuestion: number;
    ratingIncrease: TRatingIncrease;
}

export type TRatingIncrease = {
    [key in TShoesModels]: number;
}

export interface IQuizData {
    questions: IQuestion[];
    shoes: IShoe[];
}