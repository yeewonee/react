import Ch01ComponentDeclaration from "Ch01ComponentDeclaration";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "views/Home";


function AppRoute() {
  return ( //컴포넌트 안에 또 서브 컴포넌트가 있는 경우엔 path가 정확한 것이 아니라, 뒤에 또 뭐가 붙기 때문에 exact가 안 붙음!
    <Switch> 
      <Route path="/" exact component={Home}/>
      <Route path="/ch01" component={Ch01ComponentDeclaration}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRoute;