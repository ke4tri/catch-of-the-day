import Rebase from 're-base';
import firebaseApp from '../src/helpers/apiKeys';

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
// comment
export default base;
