import { IArticle, ICoffeeProcess, IRoastery, ISelectCoffee, IStory } from "../types";

const stories: IStory[] = [
    {
        id: 'storyId1',
        storyHeading: 'STARBUCKS RESERVE™ DELIVERED',
        storyDescription:'Rare coffees. Superb food. Specialty beverages and accessories. All delivered to your door.',
        storyLink: {
            link: '/',
            text: 'Order with uber eats',
        },
        showBottomLogo: true

    },
    {
        id: 'storyId2',
        storyHeading: 'VISIT STARBUCKS RESERVE™',
        storyDescription: "Visit us at a Starbucks Reserve™ Roastery or coffee bar, or find Starbucks Reserve coffee at select Starbucks locations.",
        storyLink: {
            link: '/',
            text: 'Explore',
        }

    },
    {
        id: 'storyId3',
        storyHeading: 'EXPLORE OUR COFFEE',
        storyDescription:'Everything we do is in the name of coffee. This is the culmination of it all—our pursuit of the highest state of coffee experience, our relentless and ongoing innovation—all captured in your cup.',
        storyLink: {
            link: '/',
            text: 'EXPLORE OUR COFFEE',
        }

    }

]

const selectedCoffees: ISelectCoffee[] = [
    {
        id: 'GravitasBlendVint2020_FY20',
        name: 'GRAVITAS® BLEND VINTAGE 2020'
    },
    {
        id: 'KenyaBarichu_FY19',
        name: 'KENYA BARICHU',
    },
    {
        id: 'SDUgandaRedCherry_FY19',
        name: 'SUN-DRIED UGANDA RED CHERRY',
    },
    {
        id: 'VietnamDaLat_FY19',
        name: 'VIETNAM DA LAT',
    },
    {
        id: 'SDBrazilValeVerde_FY19',
        name: 'SUN-DRIED BRAZIL VALE VERDE ESTATE',
    },
    {
        id: 'ColMatamboWoods_FY19',
        name: 'COLOMBIA MATAMBO WOODS'
    }
]


const roasteries: IRoastery[] = [
    {
        id: '132-40815',
        label: 'SEATTLE'
    },
    {
        id: '132-40104',
        label: 'SHANGHAI'
    },
    {
        id: '132-42002',
        label: 'MILANO'
    },
    {
        id: '132-45762',
        label: 'NEW YORK'
    },
    {
        id: '132-48772',
        label: 'TOKYO'
    },
    {
        id: '132-57386',
        label: 'CHICAGO'
    },
]

const articles: IArticle[] = [
    {
        id: '132-40285',
        imageCaption: 'Starbucks Reserve: Coffee',
        title: 'COFFEE STARTS HERE',
    },
    {
        id: '132-40156',
        imageCaption: 'Starbucks Reserve: People',
        title: 'FROM FARM TO FILTER: THE JOURNEY OF A STARBUCKS RESERVE™ COFFEE BEAN',
    },
    {
        id: '132-40155',
        imageCaption: 'Starbucks Reserve: People',
        title: 'PRINCI™: SPIRITO DI MILANO™',
    }

]


const coffeeProcesses:  ICoffeeProcess[] = [
    {
        id: '1',
        title: 'CRAFT',
        description: `For us, craft is about fearless innovation, driven by our boundless curiosity and passion for all things coffee. We coax it to its fullest expression through meticulous roasting and brewing, then experiment with aging, infusing, distilling and nitrogenating it—resulting in creations ranging from timeless classics to those we haven’t dreamed of yet. If innovation is an art, then coffee is our medium`,
        image1: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40555.jpg',
        image2: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40577.jpg',
        image3: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40567.jpg',
    },
    {
        id: '2',
        title: 'BREWING',
        description: `The finest brewing methods hold artistry, science and skill in perfect balance. In the cup, each technique produces a distinct flavor profile. We make it our task to find new ways to coax out a complexity of taste, body and aroma.`,
        image1: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40548.jpg',
        image3: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40550.jpg',
        image2: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40553.jpg',
    },
    {
        id: '3',
        title: 'MIXOLOGY',
        description: `A true articulation of creativity, our handcrafted cocktails weave the skill of bartender and barista into a single art. In the hands of our mixologists, our rare and remarkable coffees inspire a boundary-breaking experience for the senses.`,
        image1: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40585.jpg',
        image2: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40574.jpg',
        image3: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40587.jpg',
    },
    {
        id: '4',
        title: 'ROASTING',
        description: `Since 1971, Starbucks has been obsessed with the fine art of roasting. We’re proud to expand this legacy. When green beans arrive at Starbucks Reserve Roasteries, our Master Roasters tailor a unique roast for each lot to unlock each coffee’s maximum flavor and nuance. Every single Starbucks Reserve bean has traveled through one of these shrines to coffee.`,
        image1: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40545.jpg',
        image2: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40593.jpg',
        image3: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40590.jpg',
    },
    {
        id: '5',
        title: 'SOURCING',
        description: `We travel the world in search of extraordinary beans. We partner with small, family-run farms, historic estates and pioneering cooperatives, helping growers and communities improve the health and productivity of their crops and livelihoods. What we inherit at the end of the process are rare beans with enormous potential`,
        image1: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40562.jpg',
        image2: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40560.jpg',
        image3: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40565.jpg',
    }
]

export { stories, selectedCoffees, roasteries, articles, coffeeProcesses }




