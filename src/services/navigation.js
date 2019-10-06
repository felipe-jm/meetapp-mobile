import { NavigationActions } from 'react-navigation';

let nav;

function setTopLevelNavigator(navigatorRef) {
  nav = navigatorRef;
}

function navigate(routeName, params) {
  nav.dispath(NavigationActions.navigate({ routeName, params }));
}

export default {
  setTopLevelNavigator,
  navigate,
};
