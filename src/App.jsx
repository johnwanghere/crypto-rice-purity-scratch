import { useState } from 'react'
import Checkbox from './Checkbox'
import './App.css'

function App() {
  const [checkedBoxes, setChecked] = useState(new Set());
  const [score, setScore] = useState(0);

  function checkBox(question) {
    if (!checkedBoxes.has(question.id)) {
      const newCheckedBoxes = new Set(checkedBoxes);
      newCheckedBoxes.add(question.id);
      setChecked(newCheckedBoxes);
    }
  }

  const calculateScore = () => {
    setScore(checkedBoxes.size);
    setChecked(new Set());
  }

  const questions = [
    { id: 1, data: "Have you ever owned an NFT?" },
    { id: 2, data: "Have you ever used Metamask?" },
    { id: 3, data: "Have you ever been rugged on a memecoin?" },
    { id: 4, data: "Have you ever been hacked?" },
    { id: 5, data: "Do you own more than 1 BTC?" },
    { id: 6, data: "Do you own a ledger?" },
    { id: 7, data: "Does Ansem follow you on Twitter?" },
    { id: 8, data: "Did you vote for Trump?" },
    { id: 9, data: "Have you ever launched a pump.fun coin?" },
    { id: 10, data: "Did you participate in the Blur and Blast waitlist?" }
  ];


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mb-8 w-4/12">
        <img src="./crypto-1080x675.webp"/>
      </div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center">Crypto Rice Purity Test</h1>
      </div>
      <div className="w-full max-w-2xl">
        <table className="w-full">
          <tbody>
            { score == 0 && 
              (questions.map((question) => 
                <tr key={question.id} className="border-b border-gray-700">
                  <td className="py-4 pr-4 text-center w-12">{question.id}</td>
                  <td className="py-4 items-center gap-4">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => checkBox(question)}>
                      <Checkbox onChange={() => checkBox(question)} data={question.data} />
                    </div>
                  </td>
                </tr>
              ))
            }

            { !(score == 0) && (
              <>
                <tr className="text-lg">
                  Your score is: {score}
                </tr>
                <tr>
                  <button className="bg-purple-950 text-cyan-50 px-6 py-3 m-4 rounded-lg hover:bg-purple-900 transition-colors" onClick={() => {
                    setScore(0);
                    setCheckedBoxes(new Set());
                  }}>
                    Back
                  </button>
                </tr>
              </>
              
            )}
          </tbody>
        </table>
      </div>

      { score == 0 && 
        <div className="mt-8">
          <button className="bg-purple-950 text-cyan-50 px-6 py-3 rounded-lg hover:bg-purple-900 transition-colors" onClick={calculateScore}>
            Calculate My Score
          </button>
        </div>
      }
      
    </div>
  )
}

export default App
