var FieldType;
(function (FieldType) {
    FieldType["Text"] = "text";
    FieldType["TextArea"] = "textarea";
    FieldType["Email"] = "email";
    FieldType["Select"] = "select";
    FieldType["Checkbox"] = "checkbox";
    FieldType["Data"] = "date";
})(FieldType || (FieldType = {}));
class FieldLabel {
    constructor(forId, text, parent) {
        this.text = text;
        this.forId = forId;
        this.parent = parent;
    }
    render() {
        const labelElement = document.createElement('label');
        labelElement.htmlFor = this.forId;
        labelElement.innerText = this.text;
        this.parent.append(labelElement);
        return labelElement;
    }
}
class InputField {
    constructor(name, label, type, value) {
        this.name = name ? name : this.name;
        this.label = label ? label : this.label;
        this.type = type ? type : this.type;
        this.value = value ? value : this.value;
    }
    getValue() {
        return this.value;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const inputElement = document.createElement('input');
        inputElement.id = this.name;
        inputElement.type = this.type;
        inputElement.value = this.value;
        wrapper.append(inputElement);
        return inputElement;
    }
}
class TextAreaField {
    constructor(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue() {
        return this.value;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const textAreaElement = document.createElement('textarea');
        textAreaElement.id = this.name;
        textAreaElement.value = this.value;
        wrapper.append(textAreaElement);
        return textAreaElement;
    }
}
class SelectField {
    constructor(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue() {
        return this.value;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const newSelect = document.createElement('select');
        newSelect.id = this.name;
        wrapper.append(newSelect);
        const firstOption = document.createElement('option');
        firstOption.value = 'external';
        firstOption.innerText = 'Zaocznie';
        newSelect.append(firstOption);
        const secondOption = document.createElement('option');
        secondOption.value = 'full-time';
        secondOption.innerText = 'Dziennie';
        newSelect.append(secondOption);
        return wrapper;
    }
}
class CheckboxField {
    constructor(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById('main-form').prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const checkbox = document.createElement('input');
        checkbox.id = this.name;
        checkbox.type = FieldType.Checkbox;
        checkbox.value = this.value;
        wrapper.append(checkbox);
        return wrapper;
    }
}
var valuesArr = [];
class Form {
    constructor() {
        this.arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", FieldType.TextArea, "Nie mam żadnych uwag"),
            new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', FieldType.Checkbox, 'preferuje'),
            new SelectField("select-field", 'Tryb studiów do wyboru: ', FieldType.Select, 'zaocznie'),
            new InputField("input-email", "e-mail: ", FieldType.Email, "lorysek97@gmail.com"),
            new InputField("input-surname", "Nazwisko: ", FieldType.Text, 'Szlachta'),
            new InputField("input-name", "Imie: ", FieldType.Text, 'Patryk')];
    }
    getValue() {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            console.log(this.arrayOfFields[i].getValue());
        }
        console.log('form getvalue()');
    }
    render() {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }
    }
}
class App {
    constructor() {
        const newForm = new Form();
        newForm.render();
        document.getElementById('main-btn').addEventListener('click', () => {
            newForm.getValue();
        });
    }
}
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new App();
});
//# sourceMappingURL=index.js.map