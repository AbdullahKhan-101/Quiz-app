"use client";

import Button from "@/components/Button/Button";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import { QuestionsState } from "@/types/quiz";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};

const Quiz = ({ questions, totalQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;
  const router = useRouter();

  const handleOnAnserClick = (answer: string, currentQuestionIndex: number) => {
    if (isQuestionAnswered) return;

    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    if (isCorrect) setScore((prev) => prev + 1);

    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;

    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setCurrentQuestionIndex(newQuestionIndex);
  };

  return (
    <div className="text-white text-center">
      <p className="font-bold p-8 text-xl ">Score: {score}</p>
      <p className="font-bold pb-2 text-sm text-pink">
        Question {currentQuestionIndex + 1} out of {totalQuestions}{" "}
      </p>
      <QuestionCard
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        userAnswer={userAnswers[currentQuestionIndex]}
        correctAnswer={questions[currentQuestionIndex].correct_answer}
        onClick={handleOnAnserClick}
      />
      <div className="flex justify-between mt-16">
        <Button text="Prev" onClick={() => handleChangeQuestion(-1)} />
        <Button
          text={currentQuestionIndex === totalQuestions - 1 ? "End" : "Next"}
          onClick={
            currentQuestionIndex === totalQuestions - 1
              ? () => router.push("/")
              : () => handleChangeQuestion(1)
          }
        />
      </div>
    </div>
  );
};

export default Quiz;
