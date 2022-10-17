import { Result } from 'postcss';
import React, { useState } from 'react'
import emphasis from '../img/emphasis.png'
import contrast from '../img/contrast.png'
const DesignAss = () => {

 
        // const [currentState, setCurrentState] = useState(1);
     
     
        // const handleClick = (inputt) => {
        //  if(answer===one)
        //  alert('you have passed');
        // }
     
        const questions = [
         {
             questionText: 'Which of these term best describe what is wrong with this design?',
             img: <img src={emphasis} alt=''/>,
             answerOptions: [
                 { answerText: 'Proportional', isCorrect: false },
                 { answerText: 'Contrast', isCorrect: false },
                 { answerText: 'Emphasis', isCorrect: true },
                 { answerText: 'None of the above', isCorrect: false },
             ], 
             id: 1,
         },
         {
            questionText: 'Which of these term best describe what is wrong with this design?',
            img: <img src={contrast} alt=''/>,
             answerOptions: [
                 { answerText: 'White-space', isCorrect: false },
                 { answerText: 'Contrast', isCorrect: true },
                 { answerText: 'Proportional', isCorrect: false },
                 { answerText: 'Emphasis', isCorrect: false },
             ],
         },
         {
            questionText: 'vacant area on the page surrounding the components of your composition is known?',
            answerOptions: [
               { answerText: 'Repetition', isCorrect: false },
               { answerText: 'Contrast', isCorrect: false },
               { answerText: 'white-space', isCorrect: true },
               { answerText: 'Emphasis', isCorrect: false },
           ],
        },
         {
             questionText: ' which of these is the act of placing importance or value on a specific object when designing?',
             answerOptions: [
                { answerText: 'Repetition', isCorrect: false },
                { answerText: 'white-space', isCorrect: false },
                { answerText: 'Proportional', isCorrect: false },
                { answerText: 'Emphasis', isCorrect: true },
            ],
         },
         {
             questionText: '______ elements reinforce and unify a design?',
             answerOptions: [
                { answerText: 'Proportional', isCorrect: false },
                 { answerText: 'Repetition', isCorrect: true },
                 { answerText: 'Contrast', isCorrect: false },
                 { answerText: 'white-space', isCorrect: false },
             ],
             button: <button type='button'>submit</button>
         },
     ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [Result, setResult] = useState('Res');
    const [firstQuestion, setFirstQuestion] = useState('')

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


    const handleClick = () => {
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        }else {
            setShowScore(true)
        }
    }

    // function prevBtn() {
    //     const prevQuestion = currentQuestion - 1
    //     setCurrentQuestion(prevQuestion)
    // }
    function nextBtn() {
        const nextQuestion = currentQuestion + 1
        setCurrentQuestion(nextQuestion)
    }
    function retake() {
        window.location.reload()
        // setShowScore(false)
        // setScore(score - 4)
        // if (questions.length === 4){
        //     setCurrentQuestion(questions.length - 4)
        // }
    }
    
   

  return (
    <div>
       
       <div className='answer-section'>{questions[currentQuestion].answerOptions.map((answerOption, index) => {
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        })}</div>
        

         <div className='testbody'>
       <div className='bg-[#252d4a] m-6 test max-[300px] sm:max-w-[700px] md:max-w-[800px] mx-auto'>
       {showScore ? (
				<div className=' grid grid-rows-2'>
                    { score < 5 ? <p className='mt-2 py-3 text-[12px] sm:text-[14px] md:text-[17px]'>Hmm... You are not a failure! Retake the test</p> : <p className='py-3 text-[12px] sm:text-[14px] md:text-[17px] font-[500]'>Congratulations, I think you'd make a great Graphic designer; practice more to become the best version of yourself, and your efforts will be crowned with success.</p> }
                   <div className='flex'> 
                       <button onClick={() => setResult('result')} className='h-10 text-[12px] sm:text-[14px] md:text-[17px]'>See result</button>
                       <button onClick={retake} className='h-10 text-[12px] sm:text-[14px] md:text-[17px]'>Retake the test</button>
                   </div>
                     {Result === 'result' && <p>You scored {score} out of {questions.length}</p>}
				</div>  
         
			) : (
				<>
                <div  className=''>
                <div>
						<div className='question-count text-[14px] sm:text-[17px] md:text-[25px]'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
                      
                       
                    </div>

					<div className='mx-auto grid sm:grid-cols-2 text-[12px] sm:text-[13px] md:text-[15px]'>
                    <div className='mx-2 m-2'>{questions[currentQuestion].img}</div>
                    <div className='text-[12px] sm:text-[13px] md:text-[15px]'>{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='my-2' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}</div>
					</div>
                    <div className='flex mt-2 mx-2'> 
                        {/* {currentQuestion === 0 ? '' : <button onClick={prevBtn} className='border-0 '>prev</button>} */}
                        {currentQuestion === 4 ? '' : <button onClick={nextBtn} className='border-0 '><p className='mx-auto'>next</p></button>} 
                        <div className='text-[12px] sm:text-[15px] md:text-[15px]' onClick={handleClick}>{questions[currentQuestion].button}</div>

                        </div>
                </div>
					
                    
				</>
			)}
       </div>
       </div>
    </div>
  )
}

export default DesignAss