export const getBgColor = (userAnswer: string | undefined, correcttAnswer: string, asnwer: string ): string => {
    const isCorrectAnswer = userAnswer ? userAnswer === correcttAnswer : undefined;

    if((isCorrectAnswer === true && asnwer === userAnswer) || (isCorrectAnswer === false && asnwer === correcttAnswer)){
        return 'bg-[#55ac78] text-white';
    } 
    if(isCorrectAnswer === false && asnwer === userAnswer) return 'bg-[#ac5050] text-white'

    return 'bg-white text-pink'
}