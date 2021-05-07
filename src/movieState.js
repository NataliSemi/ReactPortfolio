import athlete from './img/athlete.jpg';
import goodtime from './img/goodtime.jpg';
import theracer from './img/theracer.jpg';
import athlete2 from './img/athlete2.jpg';

import goodtime2 from './img/goodtime2.jpg';


export const MovieState = () => {
    return [
        {
            title: 'The Athlete',
            mainImg: athlete,
            secondaryImg: athlete2,
            url: '/work/the-athlete',
            awards: [
                {
                    title: 'Truly A masterpiece',
                    descriptin: 
                    "Lore Ipsum some tet"
                },
                {
                    title:'Fresh look on a brutal sport.',
                    description: 
                    "Lorem is simple dummy text of the print"
                },
            ]
        },
        {
            title: 'Good Times',
            mainImg: goodtime,
            url: '/work/good-times',
            secondaryImg: goodtime2,
            awards: [
                {
                                    
                    title: 'Truly A masterpiece',
                    descriptin: 
                    "Lore Ipsum some tet"
                },
                {
                    title:'Fresh look on a brutal sport.',
                    description: 
                    "Lorem is simple dummy text of the print"
                },
                
            ]
        }
    ]
}