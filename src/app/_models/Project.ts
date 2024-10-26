import { Tag } from "./Tag";

export interface Project{
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: String;
    pictures: string[];
    tags: Tag[];
    
}