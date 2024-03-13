// Using allowJs in tsconfig.json.
// https://bobbyhadz.com/blog/typescript-import-javascript-files
import Firestore from "@google-cloud/firestore";

// create instance of connection
const projectId = 'dauntless-bay-416001';
// @ts-ignore
const firestore = new Firestore({ projectId });
const collectionName = "Movies";

const ratings = {
  imdb:8.4,
  metacritic: 83,
};

export function logRating(key: keyof typeof ratings)
{
  console.log(ratings[key]);
}

export async function getAll()
{
  try
  {
    try
    {
      // TODO: GetAll testing.
      const collRef = firestore.collection(collectionName);
      const snapshot = await collRef.get();

      // Success: Output IDs
      snapshot.forEach((doc: { id: string; }) =>
      {
        console.log("Movies:[model_gfs.getAll] doc=" + doc.id);
      });

      // Success: Output data() sections - gives back the original documents.
      const docDatas = snapshot.docs.map((d: { data: () => any; }) => d.data());
      docDatas.forEach((doc: { Title: any; }) =>
      {
        console.log(doc.Title);
      });

      return docDatas;
    }
    catch(e:any)
    {
      console.log("Error Occurred..." + e.toString());
    }
  }
  finally
  {
    // ...
  }
}

//logRating("invalid"); // error

const seasonCounts = new Map([
  ["I love lucy", 6],
  ["The golden girls", 7]
]);

const maybeValue = seasonCounts.get("I love lucy");

// book says error will be "undefined".
//console.log(maybeValue.toUpperCase());

// book says this will compile at runtime only as undefined.
const knownValue = seasonCounts.get("mickie")!;
//console.log(knownValue.toString());

interface Joke
{
  style: "story" | "one-liner";
}

function tellJoke(joke:Joke)
{
  if (joke.style === "one-liner")
  {
    console.log(joke.style);
  }
}

const narrowJoke = {
    style: "one-liner" as const,
}

tellJoke(narrowJoke); // ok

const wideJoke = {
  style: "one-liner"
}

//tellJoke(wideJoke); // should be type error!

// Book: p146

interface LinkedNode<Value>
{
  next? : LinkedNode<Value>;
  value: Value;
}

function getLast<Value>(node: LinkedNode<Value>): Value {
  return node.next ? getLast(node.next) : node.value;
}

let lastDate = getLast({value: new Date("09-13-1993")});

let lastFruit = getLast({ next: { value: "banana" }, value: "apple"});

//let lastMismatch = getLast({ next: {value:123}, value: false}); // book says error occurs here.

// Book: p148

class CurriedCallback<Input> {
  _callback: (input:Input) => void;

  constructor(callback: (input:Input) => void) {
    this._callback = (input:Input) => {
      console.log("Input: ", input);
      callback(input);
    };
  }

  call(input: Input) {
    this._callback(input);
  }
}

new CurriedCallback((input:string) => { console.log(input.length); });
//new CurriedCallback( (input) => { console.log(input.length) } ); // book says should be unknown error

// Test
let myInstance = new CurriedCallback((input:string) => { console.log("internal 2nd callback."); });
myInstance.call("apples");

// Book: p154 - Generic with defaults

interface Quote<T = string>
{
  value : T;
}

let explicit: Quote<number> = { value : 123 };
let implicit: Quote = { value: "stuff" };
//let mismatch: Quote = { value: 123 }; // book says error here, because default is string.

// 2nd example: defaults refer to itself.

interface KeyValuePair<Key, Value = Key>
{
  key : Key;
  value: Value;
}

let allExplicit: KeyValuePair<string,  number> = {
  key : "Ratings",
  value: 10
}

let oneDefaulting: KeyValuePair<string> = {
  value: "ten",
  key: "rating"
}

/*let firstMissing: KeyValuePair = {
  key: "rating",
  value: 10
}*/ // book says error here, because init generic type has to be declared.

// Book p156 - constraint generic types

interface WithLength
{
  length: number;
}

function logWithLength<T extends WithLength>(input: T) {
  console.log(`Length: ${input.length}`);
  return input;
}

logWithLength("passes in text");
logWithLength([false, true]);
logWithLength({ length: 123 });

let myDate:Date = new Date();
//logWithLength(new Date()); // compiler immediately sees the 'length' requirement is missing.

// Book p156 - constraint/keyof with generic types

function get<T, Key extends keyof T>(container: T, key : Key)
{
  return container[key];
}

const roles = {
  favorite: "Fargo",
  others: ["Almost Famous", "Burn After Reading", "NomadLand"],
}

const fav = get(roles, "favorite"); // type: string
console.log("Roles for 'favorite' = " + fav);
const others = get(roles, "others"); // type: string[]
console.log("Roles for 'others' = " + others);

// Book shows using keyof only causes a union of types
function get2<T>(container: T, key: keyof T)
{
  return container[key];
}

const found = get2(roles, "favorite");

// Book p158 - Promise<T>

const textEventually = new Promise<string>( (resolve) => {
  setTimeout( () => resolve("Done!"), 1000);
});

textEventually.then( (text) => { console.log(`Promise result=${text.length}`); } );