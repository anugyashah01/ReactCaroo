
import './App.css';
import './components/Button'
import Button from './components/Button';

export default function App() {
  return (
    <>
      {/* <Hello name="Connor" />
      <Hello1 name="Clement" />
      <Hello1 /> */}

      {/* <Comment username="Connor" time={(new Date()).toString()}>
        <>
          <h1>Hello World</h1>
          <p>This is a comment.</p>
        </>
      </Comment> */}
      <Button />
      
    </>
  );
}

function Hello(props){
  return <h1>Hello {props.name}</h1>
}

function Hello1({name = "User"}){
  return <h1>Hello {name}</h1>
}

function Comment({username, time, children}){
  return (
    <section>
      <p>{username} Commented at {time}</p>
      {children}
    </section>
  )
}



