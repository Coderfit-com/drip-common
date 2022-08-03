interface ComposeMessageProps<T> {
    template: string;
    data: Partial<T>;
    addLinebreaks?: boolean;
}
declare function composeWithVariables<T>({ template, data, addLinebreaks, }: ComposeMessageProps<T & {
    firstLine: string;
}>): string;
export { composeWithVariables };
