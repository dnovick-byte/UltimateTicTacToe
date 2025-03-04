import './App.css';
import BigBoard from './Components/BigBoard/BigBoard';
import Header from './Components/Header/Header';
import html2canvas from "html2canvas";


function App() {
  const captureBoard = async () => {
    const boardElement = document.getElementById("ss");

    if (!boardElement) return;

    try {
        const canvas = await html2canvas(boardElement);
        const image = canvas.toDataURL("image/png");

        // Create a download link
        const link = document.createElement("a");
        link.href = image;
        link.download = "UltimateTicTacToeChampion.png";
        link.click();
    } catch (error) {
        console.error("Error capturing board:", error);
    }
};

  return (
    <div className="container" id="ss">
      <Header />
      <BigBoard captureBoard={captureBoard}/>
    </div>
  );
}

export default App;