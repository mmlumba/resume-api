$("#email").text("some@email.com"); // where env var goes later
$("#phone").text("123-456-7899"); // where env var goes later

const dateFormatter = (date) => date === "present" ? "present" : new Date(date).toLocaleDateString("en-US")
const createBulletList = (list) => list.map(listItem => `<li>${listItem}</li>`).join(",").replace(/\,(?!\s*?[\{\[\"\'\w])/g, "");

const EmploymentTemplate = ({role, company, organization, startDate, endDate, responsibilities}) => `
    <p>${role}</p>
    <p>${company || organization}</p>
    <p>${dateFormatter(startDate)} - ${dateFormatter(endDate)}</p>
    <ul>
        ${createBulletList(responsibilities)}
    </ul>
    <hr />
`;

const AwardTemplate = ({ organization, description, awardDate }) => `
    <p>${organization}</p>
    <p>${dateFormatter(awardDate)}</p>
    <p>${description}</p>
`

const employmentInfo = $.get(`${window.location.href}resume`, function(responseText) {
    $("#employment").html(responseText
        .filter(({type}) => type === 'employment')
        .map(EmploymentTemplate));
});

const EducationTemplate = ({credential, school, startDate, endDate}) => `
    <p>${school} - <i>${credential}</i></p>
    <p>${dateFormatter(startDate)} - ${dateFormatter(endDate)}</p>
    <hr />
`;

const educationInfo = $.get(`${window.location.href}resume`, function(responseText) {
    $("#education").html(responseText
        .filter(({type}) => type === 'education')
        .map(EducationTemplate));
});

const volunteerInfo = $.get(`${window.location.href}resume`, function(responseText) {
    $("#volunteer").html(responseText
        .filter(({type}) => type === 'volunteer')
        .map(EmploymentTemplate));
});

const awardInfo = $.get(`${window.location.href}resume`, function(responseText) {
    $("#awards").html(responseText
        .filter(({type}) => type === 'award')
        .map(AwardTemplate));
});