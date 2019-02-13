import Rebase from 're-base';
// import firebase from 'firebase';
import firebaseApp from '../src/helpers/apiKeys';


const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
