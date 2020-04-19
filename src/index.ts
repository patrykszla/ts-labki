
enum FieldType {
    Text = "text",
    TextArea = 'textarea',
    Email = 'email',
    Select = 'select',
    Checkbox = 'checkbox',
    Data = 'date'  
}

interface IField {
    name: string;
    label: string;
    type:FieldType;
    value: string;
    render(): void;
} 
class FieldLabel {
    text: string;
    forId: string;
    parent: HTMLDivElement;
    constructor(forId:string, text:string, parent:HTMLDivElement) {
        this.text = text;
        this.forId = forId;
        this.parent = parent;
    }
    render():HTMLLabelElement {
        const labelElement = <HTMLLabelElement>document.createElement('label');
        labelElement.htmlFor = this.forId;
        labelElement.innerText = this.text;
        this.parent.append(labelElement); 
        return labelElement
    }
}
class InputField implements IField {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    constructor(name: string, label: string, type: FieldType, value?: string) {
        this.name = name ? name : this.name;
        this.label = label ? label : this.label;
        this.type = type ? type : this.type;
        this.value = value? value : this.value;
    }
    getValue(): string {
        var inputVal = (<HTMLInputElement>document.getElementById(this.name)).value;
        return inputVal
    }
    render():HTMLInputElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const inputElement = <HTMLInputElement>document.createElement('input');
        inputElement.id = this.name;  
        inputElement.type = this.type;
        inputElement.value = this.value;
        wrapper.append(inputElement);
        return inputElement
    }
}
class TextAreaField implements IField {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    constructor(name:string, label: string, type:FieldType, value?:string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue(): string {
        var textAreaVal = (<HTMLTextAreaElement>document.getElementById(this.name)).value
        return textAreaVal
    }
    render():HTMLTextAreaElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const textAreaElement = <HTMLTextAreaElement>document.createElement('textarea');
        textAreaElement.id = this.name;
        textAreaElement.value = this.value;
        wrapper.append(textAreaElement);
        return textAreaElement
    }
}
class SelectField implements IField {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    constructor(name:string, label: string, type:FieldType, value?: string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue(): string {
        var selectValue = (<HTMLSelectElement>document.getElementById(this.name)).value;
        if (selectValue == 'external') {
            selectValue = "Tryb zaoczny";
        } else {
            selectValue = "Tryb dzienny";
        }
        return selectValue
    }
    render():HTMLDivElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const newSelect = <HTMLSelectElement>document.createElement('select');
        newSelect.id = this.name;
        wrapper.append(newSelect);
        const firstOption = <HTMLOptionElement>document.createElement('option');
        firstOption.value = 'external';
        firstOption.innerText = 'Zaocznie';
        newSelect.append(firstOption);
        const secondOption = <HTMLOptionElement>document.createElement('option')
        secondOption.value = 'full-time';
        secondOption.innerText = 'Dziennie';
        newSelect.append(secondOption);
        return wrapper;
    }
}

class CheckboxField implements IField {
    name:string;
    label: string;
    type: FieldType;
    value: string;
    constructor(name:string, label: string, type: FieldType, value?: string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue(): string {
        var checkboxValue = (<HTMLInputElement>document.getElementById(this.name)).checked;
        var checkboxString = ' '
        if (checkboxValue == true) {
            checkboxString = 'preferuje e-learning';
        } else if (checkboxValue == false) {
            checkboxString = 'nie preferuje e-learningu';
        }
        return checkboxString
    }
    render():HTMLDivElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById('main-form').prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const checkbox = <HTMLInputElement>document.createElement('input');
        checkbox.id = this.name;
        checkbox.type = FieldType.Checkbox;
        checkbox.value = this.value;
        wrapper.append(checkbox);
        return wrapper;
    }
}
var valuesArr:string[] = [];

class Form {
    arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", FieldType.TextArea, ' '), 
    new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', FieldType.Checkbox, ' '), 
    new SelectField("select-field", 'Tryb studiów do wyboru: ', FieldType.Select, ' '),
    new InputField("input-email","e-mail: ", FieldType.Email, ' '),
    new InputField("input-surname", "Nazwisko: ", FieldType.Text, ' '),
    new InputField("input-name", "Imie: ", FieldType.Text, ' ')]
    constructor(){}

    getValue():void {
 
    for (var i = 0; i < this.arrayOfFields.length; i++ ) {
        console.log(this.arrayOfFields[i].getValue());
        var element = document.createElement("p");
        element.innerText = (this.arrayOfFields[i].getValue());
        document.getElementById('render-wrapper').after(element);
    }
}
    render():void {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }

    }
}
class App {

    constructor() {
        const newForm = new Form(); 
        newForm.render();
        document.getElementById('submit').addEventListener('click', (event) => {
            event.preventDefault();
            newForm.getValue();
        })
    }
}
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new App();
    
});




