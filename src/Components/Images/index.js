import Ironman from './ironman.png';
import Captain from './cpm.jpg';
import Thor from './thor.jpg';
import Batman from './batman.png';
import Spiderman from './spider.jpg';
import Bahubali from './bahubali.jpg';
import Hulk from './hulk.png';
import Thanos from './thanos.png';
import { v4 as uuidv4 } from "uuid";
import shuffle from 'shuffle-array'


export let images = shuffle(
[
    {
        id:uuidv4(),
        name:"Ironman",
        pic:Ironman,
        isFlipped:false,
        isMatched:false,
        mid:101,


    },
    {
        id:uuidv4(),
        name:"Captain",
        pic:Captain,
        isFlipped:false,
        isMatched:false,
        mid:102,


    },
    {
        id:uuidv4(),
        name:"Thor",
        pic:Thor,
        isFlipped:false,
        isMatched:false,
        mid:103,


    },
    {
        id:uuidv4(),
        name:"Batman",
        pic:Batman,
        isFlipped:false,
        isMatched:false,
        mid:104,


    },
    {
        id:uuidv4(),
        name:"spiderman",
        pic:Spiderman,
        isFlipped:false,
        isMatched:false,
        mid:105,


    },
    {
        id:uuidv4(),
        name:"Bahubali",
        pic:Bahubali,
        isFlipped:false,
        isMatched:false,
        mid:106,


    },
    {
        id:uuidv4(),
        name:"Hulk",
        pic:Hulk,
        isFlipped:false,
        isMatched:false,
        mid:107,


    },
    {
        id:uuidv4(),
        name:"Thanos",
        pic:Thanos ,
        isFlipped:false,
        isMatched:false,
        mid:108,
    },
    {      
          id:uuidv4(),
        name:"Captain",
        pic:Captain,
        isFlipped:false,
        isMatched:false,
        mid:102,


    },
    {
        id:uuidv4(),
        name:"Thanos",
        pic:Thanos ,
        isFlipped:false,
        isMatched:false,
        mid:108,


    },
    {
        id:uuidv4(),
        name:"Hulk",
        pic:Hulk,
        isFlipped:false,
        isMatched:false,
        mid:107,


    },
    {
        id:uuidv4(),
        name:"Bahubali",
        pic:Bahubali,
        isFlipped:false,
        isMatched:false,
        mid:106,


    },
    {
        id:uuidv4(),
        name:"spiderman",
        pic:Spiderman,
        isFlipped:false,
        isMatched:false,
        mid:105,


    },
    {
        id:uuidv4(),
        name:"Ironman",
        pic:Ironman,
        isFlipped:false,
        isMatched:false,
        mid:101,

    },
    {
        id:uuidv4(),
        name:"Batman",
        pic:Batman,
        isFlipped:false,
        isMatched:false,
        mid:104,


    },
    {
        id:uuidv4(),
        name:"Thor",
        pic:Thor,
        isFlipped:false,
        isMatched:false,
        mid:103,

    },

])

