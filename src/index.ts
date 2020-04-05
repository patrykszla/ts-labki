

enum FieldType {
    HTMLInputElement ,
    HTMLTextAreaElement,
    HTMLDataListElement
}

interface IField {
    name: string;
    label: string;
    type: FieldType;
    value: HTMLElement;
    render(): HTMLElement;
}

/*
class FieldLabel {

    renderLabel()
}
*/

