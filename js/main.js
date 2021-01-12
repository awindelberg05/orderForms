/*
    Fetching an HTML Template for input pairs.
    If unfamiliar with templating read the documention below
    to get an understanding : 
    https://css-tricks.com/an-introduction-to-web-components/
*/

/*
    Function : inputTemplate
    Description : This function retrieves the template from index.html and places
                  an object into the template variable.
*/
const inputTemplate = (templateID, templateText) => {
    const template = document.getElementById("label-input-template");
    const instance = document.importNode(template.content, true);

    instance.querySelector('.template-label').innerHTML = templateText;
    instance.querySelector('.template-input').placeholder = templateText;
    instance.querySelector('.template-input').id = templateID;

    // Place element in it's proper place in the dom

}

/*
    Function : selectFragment
    Description : This function creates a fragment that is later appended to the 
                    DOM to dynamically create these elements.
*/
const selectFragment = (dataArray) => {

    let fragment = document.createDocumentFragment();

    dataArray.forEach(elem => {
        let selectOption = document.createElement('option');
        selectOption.value = elem;
        selectOption.innerText = elem;
        fragment.appendChild(selectOption);
    });

    return fragment;

}

/*
    Function : btnGroupFragment
    Description  : This function creates a fragment that is used to build a
                   buttonGroup object
*/

const btnGroupFragment = (dataArray) => {

    let fragment = document.createDocumentFragment();

    dataArray.forEach(elem => {
        let btnOption = document.createElement('button');
        btnOption.innerHTML = elem;
        fragment.appendChild(btnOption);
    });

    return fragment;
}