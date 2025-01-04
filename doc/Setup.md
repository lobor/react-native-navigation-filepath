# Setup
`pnpm i react-navigation-filepath`

## Builder Config
### Native
Add Babel plugin
```js
plugins: [
    ["react-navigation-filepath/babel", {
      /** Options here **/
    }]
]
```
See builder [options](./BuilderOptions.md)

### Web
Add Vite plugin
```js
import filepath from 'react-navigation-filepath/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        filepath({
            /** Options here **/
        }),
    ],
})
```
See builder [options](./BuilderOptions.md)

## Instance router
In App.tsx
```tsx
import { Route } from "react-navigation-filepath/route"
export function App(){
    return <Route />
}
```
