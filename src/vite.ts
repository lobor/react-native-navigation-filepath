import {BuilderOptions} from "./types";
import {loader} from "./loader";

export default function myPlugin(options: BuilderOptions) {
    const source = loader(options)
    return {
        name: 'transform-file',

        load(id) {
            if (id.endsWith('react-native-navigation-filepath/lib/Components/Route.js')) {
                return source
            }
        },
    }
}
