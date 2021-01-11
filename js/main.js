// This function creates a fragment that is later appended to the DOM to dynamically create these elements.
let stateFragment = () => {

    let stateAbbreviations = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY",
        "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
        "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ];

    let fragment = document.createDocumentFragment();

    stateAbbreviations.forEach(state => {
        let stateOption = document.createElement('option');
        stateOption.value = state;
        stateOption.innerText = state;
        fragment.appendChild(stateOption);
    });

    return fragment;

}


let dayFragment = () => {

    let daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let fragment = document.createDocumentFragment();

    daysArray.forEach(day => {
        let dayOption = document.createElement('option');
        dayOption.value = day;
        dayOption.innerText = day;
        fragment.appendChild(dayOption);
    });

    return fragment;

}