/// <reference path="node_modules/@types/whatwg-fetch/index.d.ts" />

interface ApexCtx {
    succeed: (res: any) => void;
    fail: (err: Error) => void;
}
