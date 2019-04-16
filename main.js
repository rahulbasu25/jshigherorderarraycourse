const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

companies.forEach(function(company, index, companies) {
  console.log(company);
  //console.log(index);
  //console.log(companies);
});

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

const retailCompanies = companies.filter(
  company => company.category === "Retail"
);

console.log(retailCompanies);

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompanies);

const tenyearcompanies = companies.filter(
  company => company.end - company.start >= 10
);

console.log(tenyearcompanies);

const companyNamesMap = companies.map(company => company.name);

console.log(companyNamesMap);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

console.log(ageMap);

const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

console.log(sortedCompanies);

const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges);

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .reduce((total, age) => total + age, 0);

console.log(combined);
