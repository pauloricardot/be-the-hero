import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Routes from './src/routes';
// import ClickList from './src/components/ClickListItem';
// import ClickListItem from './src/components/ClickListItem';

export default function App() {
  return (
    <Routes /> 
  );
}

// class App extends React.Component{
// render(){
//   return(
// <div>
//  <p> passando dados pra o componente filho</p>
//   <ClickList number="123">
//     <ClickListItem></ClickListItem>
//   </ClickList>
// </div>
//   );

// }