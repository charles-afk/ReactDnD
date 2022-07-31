import './App.css';
import Modal from './Modal';
function App() {
  const tabs = {
    'twitter' : {
      'order': 1,
      'extra': false,
    },
    'facebook' : {
      'order': 2,
      'extra': false,
    },
    'youtube' : {
      'order': 3,
      'extra': false,
    },
    'linkedin' : {
      'order': 4,
      'extra': false,
    },
    'instagram' : {
      'order': 1,
      'extra': true,
    },
    'snapchat' : {
      'order': 2,
      'extra': true,
    },
    'pinterest' : {
      'order': 3,
      'extra': true,
    },
  }
  

  return (
    <div className="App">
      <Modal tabs={tabs}/>
    </div>
  );
}

export default App;
