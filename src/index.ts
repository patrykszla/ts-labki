
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
    constructor(name: string, label: string, type: FieldType, value: string) {
        this.name = name ? name : this.name;
        this.label = label ? label : this.label;
        this.type = type ? type : this.type;
        this.value = value? value : this.value;
    }

    getValue(): string {
        return this.value
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
        
        
        // var inputVal = inputElement.value;
        wrapper.append(inputElement);
        // console.log(inputVal);
        return inputElement
    }
}

class TextAreaField implements IField {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    constructor(name:string, label: string, type:FieldType, value:string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }

    getValue(): string {
        return this.value
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
    constructor(name:string, label: string, type:FieldType, value: string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }

    getValue(): string {
        return this.value
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
    constructor(name:string, label: string, type: FieldType, value: string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value;
    }
    
    getValue(): string {
        return this.value;
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
        // console.log(this.value);
        return wrapper;
    }
}



var valuesArr:string[] = [];

class Form {
    arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", FieldType.TextArea, "Nie mam żadnych uwag"), 
    new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', FieldType.Checkbox, 'preferuje'), 
    new SelectField("select-field", 'Tryb studiów do wyboru: ', FieldType.Select, 'zaocznie'),
    new InputField("input-email","e-mail: ", FieldType.Email, "lorysek97@gmail.com"),
    new InputField("input-surname", "Nazwisko: ", FieldType.Text, 'Szlachta'),
    new InputField("input-name", "Imie: ", FieldType.Text, 'Patryk' )]
    constructor(){}

    getValue():void {
    //    for(var i = 0; i < this.arrayOfFields.length; i++) {
    //        console.log(this.arrayOfFields[i].getValue);
    //    }
    for (var i = 0; i < this.arrayOfFields.length; i++ ) {
        console.log(this.arrayOfFields[i].getValue());
    }

    
        console.log('form getvalue()')
       
    //     for(var i = 0; i < this.arrayOfFields.length; i++) {
    //         console.log(this.arrayOfFields[i].getValue);
    //     }
    //    })
        
        // document.getElementById('main-btn').addEventListener("click", function changeVal():void {
        //     console.log(document.getElementsByClassName("form-div"));
        //     var nameVal = (<HTMLInputElement>document.getElementById("input-name")).value;
        //     valuesArr.push(nameVal);
        //     var surnameVal = (<HTMLInputElement>document.getElementById("input-surname")).value;
        //     valuesArr.push(surnameVal);
        //     var emailVal = (<HTMLInputElement>document.getElementById("input-email")).value
        //     valuesArr.push(emailVal);
        //     var selectVal = (<HTMLSelectElement>document.getElementById('select-field')).value;
        //     valuesArr.push(selectVal);
        //     var checkBox = (<HTMLInputElement>document.getElementById('checkbox')).value;
        //     valuesArr.push(checkBox);
        //     var textAreaVal = (<HTMLTextAreaElement>document.getElementById('text-area')).value;
        //     valuesArr.push(textAreaVal);
        //     console.log(valuesArr);
            

        //     for (var i = 0; i<valuesArr.length; i++){
        //         console.log(valuesArr[i]);
        //         var newElement = document.createElement('p');
        //         if (valuesArr[i] == 'external') {
        //             valuesArr[i] = 'tryb zaoczny'
        //         } else if ( valuesArr[i] == 'full-time') {
        //             valuesArr[i] = 'tryb dzienny'
        //         } else valuesArr[i]
        //         newElement.innerText = valuesArr[i];
        //         document.getElementById('render-wrapper').append(newElement);
               
        //     }
        // })
    }
    
    render():void {

        
        
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }

        // const textArea = new TextAreaField("text-area", "Uwagi: ", FieldType.TextArea, "Nie mam żadnych uwag").render();
        // const checkbox = new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', FieldType.Checkbox, 'preferuje').render();
        // const selectBox = new SelectField("select-field", 'Tryb studiów do wyboru: ', FieldType.Select, '').render();
        // const inputEmail = new InputField("input-email","e-mail: ", FieldType.Email, "lorysek97@gmail.com").render();
        // const inputSurname = new InputField("input-surname", "Nazwisko: ", FieldType.Text, 'Szlachta').render();
        // const inputName = new InputField("input-name", "Imie: ", FieldType.Text, 'Patryk' ).render();
    }
}


class App {
    constructor() {
        const newForm = new Form(); 
        newForm.render();
        document.getElementById('main-btn').addEventListener('click', () => {
            newForm.getValue();
        })
        
        
    }
    
}

window.addEventListener('DOMContentLoaded', (event) => {
    const app = new App();
});
// document.getElementById('main-btn').addEventListener("click", function changeVal():void {
//     CheckboxField.
// })

// var checkBox = (<HTMLInputElement>document.getElementById('checkbox'));
// //... You still need to do all the null checks as necessary
// //The below check may be irrelevant depending upon what you are actually doing. 
// //But i am just adding here to show that you need to refer to the property "type" and 
// //not "InputType"
// if (checkBox.checked == true) { 
//      console.log('checked');
// }




// function check() {
//     var myCheckbox = (<HTMLInputElement>document.getElementById("checkbox")).value;
//     console.log(myCheckbox);
// }
// check();




