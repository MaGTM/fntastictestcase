type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods?: Mods, additional?: Array<string | undefined>): string => {
    return [
        cls,
        ...additional ?? [],
        ...Object.entries(mods ?? {})
            .filter(([, value]) => Boolean(value))
            .map(([key]) => key)
    ].join(' ');
};
