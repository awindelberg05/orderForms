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


/*
    Function : checkWindowWidth
    Description : uses the window object to retrieve the windows width,
                  we later use this data to decide if we'll create the form
                  in as an accordian or singel page.
*/

const checkWindowWidth = () => {
    const windowSize = $(window).width();
    if (windowSize >= 900 && accordionObj != null) {
        // Destroy Accordian
        accordionObj.accordion("destroy");
        accordionObj = null;
    } else if (windowSize < 900 && accordionObj == null) {
        // Create Accordian
        accordionObj = accordionObj = $("form").accordion({
            heightStyle: "fill"
        });
    }
}


/*
    Function : changeSection
    Description : Accepts an event button element and uses the preset data fields and
                  values to set the new section visiable and the current section to hidden
*/

const changeSection = (element) => {

    document.getElementById('section-header-' + element.value).style.display = "none";
    document.getElementById(element.value).style.display = "none";
    document.getElementById('section-header-' + element.dataset.target).style.display = "block";
    document.getElementById(element.dataset.target).style.display = "block";

    console.log("This is the element target :");
    console.log(element.dataset.target);

    if (element.dataset.target === 'signatures') {
        applyDatetoLabel('crntDate');
    }

}

const updateActiveBreadcrumb = (newActive) => {
    const crntBreadcrumb = document.getElementsByClassName('crntActiveBC');
    crntBreadcrumb[0].className = "";
    /* Update the next breadCrumb*/
    const newActiveBreadcrumb = document.getElementById('bc' + newActive.charAt(0).toUpperCase() + newActive.slice(1));
    newActiveBreadcrumb.className = 'crntActiveBC';
}

const applyDatetoLabel = (elem) => {
    let dateInfo = new Date();
    document.getElementById(elem).innerHTML = dateInfo.getMonth() + 1 + "/" + dateInfo.getDate() + "/" + dateInfo.getFullYear();
}


const tempHolder = () => {
    /*
        If the event was a button press check the button
    */
    switch (isButton.value) {
        case 'personal':
            console.log("Personal");
            break;
        case 'residence':
            break;
        case 'income':
            break;
        case 'references':
            break;
        case 'other':
            break;
        case 'signatures':
            break;
        default:
            console.log("Was not able to coordinate to a section");
            break;
    }
}