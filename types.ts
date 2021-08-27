export interface IStory {
    id: string;
    storyHeading: string;
    storyDescription: string;
    storyLink: {
        link: string,
        text: string;
    }
    showBottomLogo?: boolean;
}

export interface ISelectCoffee {
    name: string;
    id: string;
}

export interface IRoastery {
    id: string;
    label: string;
}

export interface IArticle {
    id: string;
    imageCaption: string;
    title: string;
}

export interface ILink {
    path: string;
    label: string;
}


export interface ICoffeeProcess {
    id: string;
    image1: string;
    image2: string;
    image3: string;
    title: string;
    description: string;
}