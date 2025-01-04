import {globSync, hasMagic} from "glob";
import * as path from "node:path";
import {BuilderOptions} from "./types";

const protectedName = ['index', '_layout']

const extractPath = (files: string[], path: BuilderOptions['path']) => {
    files.forEach((file) => {
        const toto = file.replace(path, '').split('/');
        const titi = toto.map((s)=>s === '' ? '/' : s)
        console.log(titi)
    })
}

const createStack = (files: string[]) => {
    return `createNativeStackNavigator({
  screens: {
    ${files.map((t, i)=> `index: Screen${i}`).join(',\n')}
  },
})
`
}


const createImports = (files: string[]) => {
    return files.map((t, i)=>`
import Screen${i} from '${path.resolve(t)}';\n
`)
}

export const loader = ({path: pathOption}: BuilderOptions) => {
    const jsfiles = globSync(`${pathOption}/**`, { ignore: 'node_modules/**', nodir: true, dotRelative: true });
    extractPath(jsfiles, pathOption)
    const stack = createStack(jsfiles);
    const imports = createImports(jsfiles);
    return `
import { memo } from "react";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

${imports}

const Navigation = createStaticNavigation(${stack});

export const Route = memo(()=>{
    return <Navigation />;
})
Route.displayName = "Route";
`
}
