function pipe<T>(...rest: Function[]) {
    return (a: T) =>
        rest.reduce((pre: T, next: Function) => {
            return next(pre) as T;
        }, a);
}

export default pipe;
