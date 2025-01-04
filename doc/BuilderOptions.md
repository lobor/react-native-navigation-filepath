# Builder options

## Options
- **paths** (`Array<string>`) -- List of path contains routes
```ts
paths: ['./featuresFoo/routes', './featuresBar/routes']
```
- **rewrites** (<code>Array<<a href="#rewritetype">RewriteType</a>></code>, optional) -- List of path contains routes
```ts
rewrites: [
    {
        source: '/old',
        destination: '/new',
    }
]
```

## Types
### RewriteType
- **source** (`string`) -- Path sour to redirect
- **destination** (`string`) -- Path to destination
