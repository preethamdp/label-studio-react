// import logo from './logo.svg';
import './App.css';

// import AddLabels from './AddLabels';
import LabelStudioUI from './Shit';

function App() {
  const config= `
  <View>
  <Image name="image" value="$image"/>
  <BrushLabels name="tag" toName="image">
    <Label value="Planet" background="rgba(0, 0, 255, 0.7)"/>
    <Label value="Moonwalker" background="rgba(255, 0, 0, 0.7)"/>
  </BrushLabels>
</View>
   
  `

  const interfaces = [
    "panel",
    "update",
    "submit",
    "skip",
    "controls",
    "infobar",
    "topbar",
    "instruction",
    "side-column",
    "annotations:history",
    "annotations:tabs",
    "annotations:menu",
    "annotations:current",
    "annotations:add-new",
    "annotations:delete",
    "annotations:view-all",
    "predictions:tabs",
    "predictions:menu",
    "auto-annotation",
    "edit-history"
  ]

  const user = {
    pk: 1,
    firstName: "James",
    lastName: "Dean"
  }

  const task = {
    annotations: [],
    predictions: [],
    id: 1,
    data: {
      image: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
      text:"samele text"
    }
  }

  return (
    <div className="App">
      <LabelStudioUI  config={config} interfaces={interfaces} user={user} task={task} />
    </div>
  );
}

export default App;
