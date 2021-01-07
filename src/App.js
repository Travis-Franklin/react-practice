import ToDo from './ToDo';
// import ListOfToDos from "react";

// const listOfToDos = ListOfToDos;
// console.log(listOfToDos);


let toDoObject = [
  {thing: "do more things",
  time: "Today"},
  {thing: "sleep and eat",
  time: "Tomorrow"},
  {thing: "watch tv",
  time: "Yesterday"},
  {thing: "exercise",
  time: "Next Week"},
  {thing: "overthrow democracy",
  time: "after the rally"}
];




function App(props) {
    return(
      <div> Here are your todos:
        <ToDo>
         {toDoObject}
        </ToDo>
        <br></br>
      </div>
    )
  };

export default App;
