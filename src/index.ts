import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1, 3, -5, 0]);

numbersCollection.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaaAAbbrZ');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-19);
linkedList.add(15);
linkedList.sort();
linkedList.print(); 