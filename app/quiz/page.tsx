import { shuffleArray } from "@/utils/arrayUtils";
// Components
import Quiz from "./Quiz";
// Types
import { Difficulty, QuestionsState, Question } from "@/types/quiz";

const TOTAL_QUESTIONS = 10;

const getQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState> => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data: { results: Array<Question> } = await (
    await fetch(endPoint, { cache: "no-store" })
  ).json();

  return data.results.map((question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

const page = async () => {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};

export default page;
