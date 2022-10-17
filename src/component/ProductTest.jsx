import { Result } from 'postcss';
import React, { useRef, useState } from 'react'
import emphasis from '../img/emphasis.png'
import contrast from '../img/contrast.png'
const ProductTest = () => {
    
     
        const questions = [
         {
             questionText: 'According to the text, to be a successful UX designer one should have ?',
             answerOptions: [
                 { answerText: 'integrity', isCorrect: false },
                 { answerText: 'boldness', isCorrect: false },
                 { answerText: 'solid attention to detail', isCorrect: true },
                 { answerText: 'empathy', isCorrect: false },
             ], 
             id: 1,
         },
         
         {
            questionText: 'which of these terms is concerned with the way a product makes users think and feel?',
             answerOptions: [
                 { answerText: 'UX design', isCorrect: true },
                 { answerText: 'product design', isCorrect: false },
                 { answerText: 'UI design', isCorrect: false },
                 { answerText: 'Graphic design', isCorrect: false },
             ],
         },
         {
             questionText: 'According to the text, what is the third step when trying to build a product?',
             answerOptions: [
                 { answerText: "Understand the customer's context and needs", isCorrect: true },
                 { answerText: 'List ideas', isCorrect: false },
                 { answerText: 'Understand your goal', isCorrect: false },
                 { answerText: 'Define the audience', isCorrect: false },
             ],
         },
        
         {
             questionText: "which of these terms is concerned with a product's presentation and look?",
             answerOptions: [
                { answerText: 'UX design', isCorrect: false},
                { answerText: 'product design', isCorrect: false },
                { answerText: 'UI design', isCorrect: true  },
                { answerText: 'Graphic design', isCorrect: false },
             ],
         },
         {
            questionText: "______ is the process of critical thinking, creating and iterating products that solve users' problem.?",
            answerOptions: [
               { answerText: 'UX design', isCorrect: false},
               { answerText: 'product design', isCorrect: true },
               { answerText: 'UI design', isCorrect: false  },
               { answerText: 'Graphic design', isCorrect: false },
            ],
        },
        {
            questionText: 'what is the full meaning of UI/UX?',
            answerOptions: [
                { answerText: "User interface/User design", isCorrect: false },
                { answerText: 'User Interface/User Experience', isCorrect: true },
                { answerText: 'Product interface/Experience', isCorrect: false },
                { answerText: 'uI design', isCorrect: false },
            ],
            button: <button type='button'>submit</button>

        },
     ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [Result, setResult] = useState('Res');
    
    const [color, setColor] = useState(false)

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

    
    function nextBtn() {
        const nextQuestion = currentQuestion + 1
        setCurrentQuestion(nextQuestion)
    }
    function retake() {
        window.location.reload()
        
    }
    
    
   

  return (
    <div>
       

        
        

         <div className='testbody'>
         
       <div className='bg-[#252d4a] m-6 test max-[300px] sm:max-w-[700px] md:max-w-[800px] mx-auto'>
     
        <div>
       {showScore ? (
				<div className=' grid grid-rows-2'>
                    { score < 6 ? <p className='mt-2 py-3 text-[12px] sm:text-[14px] md:text-[17px]'>Hmm... You are not a failure! Retake the test</p> : <p className='py-3 text-[12px] sm:text-[14px] md:text-[17px] font-[500]'>Congratulations, I think you'd make a great developer; practice more to become the best version of yourself, and your efforts will be crowned with success.</p> }
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
						<div className='question-text text-[12px] sm:text-[13px] md:text-[17px]'>{questions[currentQuestion].questionText}</div>
                      
                       
                    </div>

					<div className='mx-auto grid sm:grid-cols-2 text-[12px] sm:text-[13px] md:text-[15px]'>
                    <div className='mx-2 m-2 text-[12px] sm:text-[13px] md:text-[15px]'>{questions[currentQuestion].img}</div>
                    <div>{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='my-2' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}</div>
                        
					</div>
                    
                    <div className='flex mt-2 mx-2 text-[12px] sm:text-[13px] md:text-[15px]'> 
                        {/* {currentQuestion === 0 ? '' : <button onClick={prevBtn} className='border-0 '><p className='mx-auto'>prev</p></button>} */}
                        {currentQuestion === 5 ? '' : <button onClick={nextBtn} className='border-0 '><p className='mx-auto'>next</p></button>} 
                    </div>
                    <div className='text-[12px] sm:text-[15px] md:text-[15px]' onClick={handleClick}>{questions[currentQuestion].button}</div>
                </div>
					
                    
				</>
			)}
            </div>
            
       </div>
       </div>
    </div>
  )
}

export default ProductTest