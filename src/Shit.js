import LabelStudio from '@heartexlabs/label-studio';
import '@heartexlabs/label-studio/build/static/css/main.css';

import {useEffect,useRef} from "react"
const labelConfig = `<View>
      <RectangleLabels name="tag" toName="img">
        <Label value="Name"/>
        <Label value="Business Name"/>
      </RectangleLabels>
      <Image name="img" value="$image"/>
      </View>
      `;

function LabelStudioUI(props) {
  const labelRef = useRef("label-studio")
  useEffect(() => {
    new LabelStudio(labelRef.current, {
       ...props,
    
        onLabelStudioLoad: function(LS) {
          var c = LS.annotationStore.addAnnotation({
            userGenerate: true
          });
          LS.annotationStore.selectAnnotation(c.id);
        },
        onSubmitAnnotation: async function (LS, annotation) {
          console.log(annotation.serializeAnnotation());
        },
        onUpdateAnnotation: async function (LS, annotation) {
          console.log(annotation.serializeAnnotation());
        }
      });
    },[])
  
    return (
      <div
        id="label-studio"
        style={{
          backgroundColor: "white",
          // padding: 10,
          // height: "calc(100vh - 50px)",
          // overflowY: "scroll"
        }}
      ></div>
    );
  }
    
function Shit({}){
    return (
        <LabelStudioUI />
    )
}
export default LabelStudioUI;