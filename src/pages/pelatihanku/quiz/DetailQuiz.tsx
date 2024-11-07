import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { useState } from "react";
import {
  useDetailQuizData,
  useHistoryQuizData,
} from "../../../services/pelatihanku/QuizService";
import { QuizHistory } from "./components/HistoryQuiz";
import { QuizInfo } from "./components/QuizInfo";
import QuizDialog from "./components/QuizDialog";
import { useNavigate } from "react-router-dom";
import {  ErrorConsume, Loading } from "../../../components/APIRespone";

export const DetailQuiz = () => {
  const { subjectId, sessionId, quizId } = useParams<{
    subjectId: string;
    sessionId: string;
    quizId: string;
  }>();

  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false); // State untuk dialog konfirmasi

  const {
    data: quizData,
    isLoading: isQuizLoading,
    error: quizError,
  } = useDetailQuizData(subjectId, sessionId, quizId);

  const {
    data: historyData,
    isLoading: isHistoryLoading,
    error: historyError,
  } = useHistoryQuizData(quizId);

  if (isQuizLoading || isHistoryLoading) {
    <Loading />;
  }

  if (quizError || historyError) {
    <ErrorConsume />;
  }

  // Function to handle the quiz start confirmation
  const handleQuizStart = () => {
    setDialogOpen(false);
    navigate(`/quizAttempt/${subjectId}/${sessionId}/${quizId}`);
  };

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1"
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to="/pelatihanku">
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pelatihan-ku
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/pelatihanku/${subjectId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            {quizData?.data.subject.name}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/quiz/${subjectId}/${sessionId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pertemuan {quizData?.data.session.session_no}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Quiz
        </span>
      </div>
      {/* Quiz Info */}
      <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
        <h1 className="text-3xl font-semibold pb-3">
          {quizData?.data.quiz.title}
        </h1>
        <p className="text-lg">Pertemuan {quizData?.data.session.session_no}</p>
      </div>
      {/* Quiz Content */}
      <div className="bg-white flex mt-5 w-full px-8 h-full justify-center rounded-lg">
        <div className="w-1/2 flex items-center justify-center">
          <img src="/pelatihanku/quiz-left.png" alt="" />
        </div>
        <div className="w-1/2 py-10">
          {historyData?.data.history_data?.[0] && (
            <QuizHistory historyData={historyData} quizData={quizData} />
          )}
          <QuizInfo quizData={quizData} />
          <div>
            <div>
              <h1 className="text-xl font-semibold pt-5 pb-2">Deskripsi</h1>
              <p className="text-gray-500">
                Quiz ini bertujuan untuk menguji pengetahuan Anda tentang materi
                yang telah dipelajari di pertemuan ini.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold pt-7 pb-2">Pengaturan Quiz</h1>
            <div className="flex items-center gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-lg text-blue-500" /> Kerjakan
              Dengan Jujur
            </div>
            <div className="flex items-center gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-lg text-blue-500" /> Dilarang
              Bekerja Sama
            </div>
            <div className="flex items-center gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-lg text-blue-500" /> Apabila
              Keluar dari App, Waktu Quiz Tetap Berjalan
            </div>
            <div className="flex items-center gap-x-2 py-2">
              <MdOutlineTaskAlt className="text-lg text-blue-500" /> Percobaan
              Quiz Terakhir Merupakan Nilai Dipakai
            </div>
          </div>
          <h1 className="py-3 text-blue-500 font-medium">
            Kesempatan mengerjakan tersisa :{" "}
            {historyData?.data.remaining_attempt ?? 3} kali
          </h1>
          {/* Button Mulai Quiz */}  
          <button
            onClick={() => setDialogOpen(true)}
            className={`flex w-full items-center py-4 rounded-xl justify-center mt-5 ${
              historyData?.data.remaining_attempt === 0
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
            disabled={historyData?.data.remaining_attempt === 0}
          >
            {historyData?.data.remaining_attempt === 0
              ? "Kesempatan Habis!"
              : "Mulai Quiz"}
          </button>
        </div>
      </div>
      {/* Dialog Konfirmasi */}
      {isDialogOpen && (
        <QuizDialog
          onClose={() => setDialogOpen(false)}
          onStart={handleQuizStart}
        />
      )}
    </div>
  );
};