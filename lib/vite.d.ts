import { BuilderOptions } from "./types";
export default function myPlugin({ paths }: BuilderOptions): {
    name: string;
    load(id: any): string;
};
