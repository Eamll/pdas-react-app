import ProfileCard from './ProfileCard'
import AlexaImage from './assets/alexa.png'
import CortanaImage from './assets/cortana.png'
import SiriImage from './assets/siri.png'
function App() {
  return (
    <>
    

    <ProfileCard title= "Alexa" handle = "@alexa99" image={AlexaImage} />
    <ProfileCard title= "Ana" handle = "@ana99"image={CortanaImage}/>
    <ProfileCard title= "Juan" handle = "@juan99" image={SiriImage}/>
    </>
    
      
    
  )
}

export default App
