import QwertyInput from './components/QwertyInput';
import UncontrolledInput from "./components/UncontrolledInput";

function App(): JSX.Element {
  return (
    <>
      <p><i><b>Hello</b></i></p>
      <h2>Controlled input</h2>
      <p>This controlled input accepts button input <i>and</i> keyboard input!</p>
      <QwertyInput />
      <hr />
      <h2>Uncontrolled input</h2>
      <UncontrolledInput />
    </>
  );
}

export default App;
