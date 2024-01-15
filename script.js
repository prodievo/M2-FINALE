const jobs = [{
  title: "Marketing Intern",
  location: "US, NY, New York"
},
{
  title: "Customer Service - Cloud Video Production",
  location: "NZ, Auckland",
},
{
  title: "Commissioning Machinery Assistant (CMA)",
  location: "US, IA, Wever",
},
{
  title: "Account Executive - Washington DC",
  location: "US, DC, Washington",
},
{
  title: "Bill Review Manager",
  location: "US, FL, Fort Worth"
},
{
  title: "Accounting Clerk",
  location: "US, MD,"
},
{
  title: "Head of Content (m/f)",
  location: "DE, BE, Berlin"
},
{
  title: "Lead Guest Service Specialist",
  location: "US, CA, San Francisco",
},
{
  title: "HP BSM SME",
  location: "US, FL, Pensacola"
},
{
  title: "Customer Service Associate - Part Time",
  location: "US, AZ, Phoenix",
},
{
  title: "ASP.net Developer Job opportunity at United States,New Jersey",
  location: "US, NJ, Jersey City",
},
{
  title: "Talent Sourcer (6 months fixed-term contract)",
  location: "GB, LND, London",
},
{
  title: "Applications Developer, Digital",
  location: "US, CT, Stamford",
},
{
  title: "Installers",
  location: "US, FL, Orlando"
},
{
  title: "Account Executive - Sydney",
  location: "AU, NSW, Sydney"
},
{
  title: "VP of Sales - Vault Dragon",
  location: "SG, 01, Singapore",
},
{
  title: "Hands-On QA Leader",
  location: "IL, Tel Aviv, Israel"
},
{
  title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
  location: "GB, SOS, Southend-on-Sea",
},
{
  title: "Visual Designer",
  location: "US, NY, New York"
},
{
  title: "Process Controls Engineer - DCS PLC MS Office - PA",
  location: "US, PA, USA Northeast",
},
{
  title: "Marketing Assistant",
  location: "US, TX, Austin"
},
{
  title: "Front End Developer",
  location: "NZ, N, Auckland"
},
{
  title: "Engagement Manager",
  location: "AE,"
},
{
  title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
  location: "US, CA, Carlsbad",
},
{
  title: "Customer Service",
  location: "GB, LND, London"
},
{
  title: "H1B SPONSOR FOR L1/L2/OPT",
  location: "US, NY, New York"
},
{
  title: "Marketing Exec",
  location: "SG,"
},
{
  title: "HAAD/DHA Licensed Doctors Opening in UAE",
  location: "AE, AZ, Abudhabi",
},
{
  title: "Talent Management Process Manager",
  location: "US, MO, St. Louis",
},
{
  title: "Customer Service Associate",
  location: "CA, ON, Toronto"
},
{
  title: "Customer Service Technical Specialist",
  location: "US, MA, Waltham",
},
{
  title: "Software Applications Specialist",
  location: "US, KS,"
},
{
  title: "Craftsman Associate",
  location: "US, WA, Everett"
},
{
  title: "Completion Engineer",
  location: "US, CA, San Ramon"
},
{
  title: "I Want To Work At Karmarama",
  location: "GB, LND,"
},
{
  title: "English Teacher Abroad",
  location: "US, NY, Saint Bonaventure",
},
];

function searchJobs(jobTitle, jobLocation) {
  const result = [];
  jobTitle = jobTitle.toLowerCase();
  jobLocation = jobLocation.toLowerCase();

  for (const job of jobs) {
    const titleLowerCase = job.title.toLowerCase();
    const locationLowerCase = job.location.toLowerCase();

    if (titleLowerCase.includes(jobTitle) && locationLowerCase.includes(jobLocation)) {
      // i campi specificati vengono eliminati
      const {
        description, requirements, benefits, company_profile, ...filteredJob
      } = job;
      result.push(filteredJob);
    }
  }

  return {
    result: result,
    count: result.length,
  };
}

function eseguiRicerca() {
  const jobTitleInput = document.getElementById('jobTitle').value;
  const jobLocationInput = document.getElementById('jobLocation').value;

  const risultatiRicerca = searchJobs(jobTitleInput, jobLocationInput);

  // i risultati vengono mostrati nella pagina
  const risultatiLista = document.getElementById('risultatiLista');
  risultatiLista.innerHTML = ''; // la lista dei risultati viene pulita

  for (const job of risultatiRicerca.result) {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = `${job.title} - ${job.location}`;
    risultatiLista.appendChild(elementoLista);
  }
}
