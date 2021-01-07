import ToDo from './ToDo';

let toDoObject = [
  {thing: "do more things"},
  {thing: "sleep and eat"},
  {thing: "watch tv"},
  {thing: "lolz"}
];


function App(props) {
    return(
      <div> Here are your todos:
        <ToDo>
         {props=toDoObject}
        </ToDo>
        <br></br>
      </div>
    )
  };

export default App;
