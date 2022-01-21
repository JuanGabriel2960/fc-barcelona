export interface Main {
    _id:          string;
    published_at: Date;
    group:        Group[];
    createdAt:    Date;
    updatedAt:    Date;
    __v:          number;
    id:           string;
}

export interface Group {
    players:  Player[];
    _id:      string;
    position: string;
    __v:      number;
    id:       string;
}

export interface Player {
    position:     string;
    _id:          string;
    name:         string;
    lastname:     string;
    published_at: Date;
    createdAt:    Date;
    updatedAt:    Date;
    __v:          number;
    birthday:     Date;
    country:      string;
    facebook:     string;
    height:       number;
    instagram:    string;
    twitter:      string;
    weight:       number;
    data_title_1: string;
    from:         string;
    previously:   string;
    stat_title_1: string;
    stat_title_2: string;
    video:        string;
    data_bio:     string;
    stat_title_3: string;
    title_bio:    string;
    stat_data_1:  string;
    stat_data_2:  string;
    stat_data_3:  string;
    bio:          Bio;
    flag:         Card;
    profile:      Profile;
    card:         Card;
    card_data_1:  string;
    card_data_2:  string;
    card_data_3:  string;
    card_title_1: string;
    card_title_2: string;
    card_title_3: string;
    number:       string;
    id:           string;
}

export interface Bio {
    _id:             string;
    name:            string;
    alternativeText: string;
    caption:         string;
    hash:            string;
    ext:             EXT;
    mime:            MIME;
    size:            number;
    width:           number;
    height:          number;
    url:             string;
    formats:         BioFormats;
    provider:        string;
    related:         string[];
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
    id:              string;
}

export enum EXT {
    Jpg = ".jpg",
    PNG = ".png",
}

export interface BioFormats {
    thumbnail: Small;
    small:     Small;
}

export interface Small {
    name:   string;
    hash:   string;
    ext:    EXT;
    mime:   MIME;
    width:  number;
    height: number;
    size:   number;
    path:   null;
    url:    string;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
}

export interface Card {
    _id:             string;
    name:            string;
    alternativeText: string;
    caption:         string;
    hash:            string;
    ext:             EXT;
    mime:            MIME;
    size:            number;
    width:           number;
    height:          number;
    url:             string;
    formats:         CardFormats;
    provider:        string;
    related:         string[];
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
    id:              string;
}

export interface CardFormats {
    thumbnail: Small;
}

export interface Profile {
    _id:             string;
    name:            string;
    alternativeText: string;
    caption:         string;
    hash:            string;
    ext:             EXT;
    mime:            MIME;
    size:            number;
    width:           number;
    height:          number;
    url:             string;
    formats:         ProfileFormats;
    provider:        string;
    related:         string[];
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
    id:              string;
}

export interface ProfileFormats {
    thumbnail: Small;
    medium:    Small;
    small:     Small;
}
