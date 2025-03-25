/**
 JSON Objects
    - stands for JavaScript Object Notation
    - it is used in other programming languages and the Core JavaScript has a built in JSON Object that contains methods for parsing JSON Objects and converting strings into a JavaScript Objects
    - JavaScript Objects are not to be confused with JSON
    - JSON is used for serializing different data types into bytes
        - serialization is the process of converting data into a series of bytes for easier transmission/transfer of information

        - syntax
            {
                "propertyA":"value",
                "propertyB":"value"
            }
 */
// JSON Objects
// {
//     "city": "Quezon City",
//     "province": "Metro Manila",
//     "country": "Philippines"
// }

//JSON Methods
//JSON Object contain methods for parsing and converting data into stringified JSPM
// Stringified is a JavaScript object converted into string to be used in other functions of the JavaScript applications

let batchesArr = [
  {
    batchName: "Batch 01",
  },
  {
    batchName: "Batch 02",
  },
  {
    batchName: "Batch 03",
  },
];

// The 'stringify' method is used to convert JavaScript objects into a string

console.log("Result from strigify method: ");
let parsedBatchesArr = JSON.parse(batchesJSONString);
console.log(JSON.parse(batchesArr));

// User details

let firstName = prompt("What is your first name: ");
let lastName = prompt("What is your last name: ");
let age = prompt("What is your age: ");
let address = {
  city: prompt("Which city do you live"),
  country: prompt("Which country does your city address belong to? "),
};

let otherData = JSON.stringify({
  firstName: firstName,
  lastName: lastName,
  age: age,
  address: address,
});

console.log(otherData);

// DATABASE
/*
  Database is an organized collection of information of data.

  Database refers to information stored in a computer system but it can also refer to physical database.

  Database management system (DBMS) is a system designed to manage the storage, retrieval and modification of data in a database.

  Database has four operations when it comes in handling of data. CRUD in short.

  Create, Read, Update, Delete.

  Relational database is type of database where the data is stored as a set of tables with rows and columns

  For unstructured data we call it NoSQL database

  SQL - structured query language. It is a language used typically in relational databases to store, retrieve, and modify data.

*/
```sql
SELECT id, first_name, last_name FROM students WHERE batch_number = 1;
```;

```jsx
db.student.find({batchNumber: 1}, {id: 1, first_name: 1, lastName: 1})
```;

// NoSQL it means Not Only SQL. NoSQL was conceptualizred when capturing complex, unstructured data became more difficult. One of the popular NoSQL databases is MongoDB.

// MongoDB is an open-source databases and the leading NoSQL database. Its language is highly expressive and generally friendly to those already familiar with the JSON structure

```json
{
  "_id": ObjectId("12317236eywwer813127838"),
  "firstName":"Juan",
  "lastName":"Dela Cruz"
  "position":"System Developer"
  "createdAt": ISODate("2019-07-18T05:46:21.028Z")
  "updatedAt":ISODate("2019-07-18T05:46:21.028Z")
}
```;

/*
 MongoDB
    - from tables to collection
    - from row to documents
    - from columns to fields
*/
