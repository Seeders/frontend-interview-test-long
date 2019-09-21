
import { dataStore } from '../js/DataStore.js';

var currentUser = null;
const currentUserId = 5;

export function GetCurrentUser() {
	if(currentUser == null) {
		currentUser = dataStore.GetDataById("Users", currentUserId);
	}
	return currentUser;			
}