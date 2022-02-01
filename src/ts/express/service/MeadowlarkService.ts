import {uuidv1} from "../../common/import/BasicsImports";

export function getJsonBodyWithRandomUUID(): string{

    return `{"body": "This is the about method. It\`s totally test project. Lang: TypeScript,  Base: NodeJs. ${uuidv1()}"}`;
}