# API
- **Components**
  - [Route](#route)
  - [Link](#link)
- **Hooks**
  - [useLink](#uselink)
  - [useParams](#useparams)
  - [useRouter](#userouter)

## Route
Use initial route

### Usage
```tsx
import { Route } from "react-native-navigation-filepath/route";

<Route />
```

## Link
Use for link different page

### Usage
```tsx
import { Link } from "react-native-navigation-filepath/link";

<Link href="/link">I'm a link</Link>
```
### Props
- **href** (`string`) -- href of page
- **title** (`string`, optional) -- Aria label for native and title for web
- **target** (`_blank`, optional) -- Target type for web

## useLink
### Usage
```tsx
import { useLink } from "react-native-navigation-filepath/useLink";

const link = useLink({ href:"/link" })
```

## useParams
### Usage
```tsx
import { useParams } from "react-native-navigation-filepath/useParams";

const params = useParams()
```

## useRouter
### Usage
```tsx
import { useRouter } from "react-native-navigation-filepath/useRouter";

const router = useRouter()
```
### Return value
- **push** (`(href: string) => void`) -- Push on navigation state
```tsx
router.push('/link')
```
