const formDataStruct = (() => {
    let personal = {
        fName: null,
        email: null,
        date: null,
        licenseNumber: null,
        licenseState: null,
        licenseExp: null
    }

    let coApplicant = false;

    let residential = {
        address: null,
        city: null,
        state: null,
        zip: null
    }

    let setPersonalData = (fName, email, date, licenseNumber, licenseState, licenseExp) => {
        personal.fName = fName;
        personal.email = email;
        personal.date = date;
        personal.licenseNumber = licenseNumber;
        personal.licenseState = licenseState;
        personal.licenseExp = licenseExp;
    }

    let getPersonalData = () => {
        return personal;
    }

    let setCoApplicant = () => {
        coApplicant = !coApplicant;
    }

    let getCoApplicant = () => {
        return coApplicant;
    }

    let setResidentialData = (address, city, state, zip) => {
        residential.address = address;
        residential.city = city;
        residential.state = state;
        residential.zip = zip;
    }

    let getResidentialData = () => {
        return residential;
    }


})();



const stateAbbreviations = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY",
    "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
    "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const otherIncomeArray = ["Disability", "SSI", "AFDC", "Child Support", "Other"];

const payFrequencyArray = ["Weekly", "Bi-Weekly", "Semi-Monthly", "Monthly"];