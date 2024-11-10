import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { AllFeatures } from "../pages/allFeatures";
import { Bootcamp } from "../pages/bootcamp";
import Dashboard from "../pages/dashboard";
import Home from "../pages/Home";
import { Pelatihanku } from "../pages/pelatihanku";
import { Modul } from "../pages/pelatihanku/modul";
import { DetailModule } from "../pages/pelatihanku/modul/DetailModul";
import { PelatihankuDetail } from "../pages/pelatihanku/pelatihankuDetail";
import Penugasan from "../pages/penugasan";
import { NilaiSertifikat } from "../pages/nilai-sertifikat";
import { PelatihanKet } from "../pages/nilai-sertifikat/pelatihanket";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import { Login } from "../pages/auth/login";
import { Quiz } from "../pages/pelatihanku/quiz";
import { DetailQuiz } from "../pages/pelatihanku/quiz/DetailQuiz";
import { QuizAttempt } from "../pages/pelatihanku/quiz/QuizAttempt";
import { RoleplayAsses } from "../pages/roleplay-asses";
import { PilihRoleplay } from "../pages/roleplay-asses/pilih-roleplay";
import { PilihAses } from "../pages/roleplay-asses/pilih-ases";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bootcamp"
            element={
              <ProtectedRoute>
                <Bootcamp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/allFeatures"
            element={
              <ProtectedRoute>
                <AllFeatures />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pelatihanku"
            element={
              <ProtectedRoute>
                <Pelatihanku />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pelatihanku/:pelatihankuId"
            element={
              <ProtectedRoute>
                <PelatihankuDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/penugasan"
            element={
              <ProtectedRoute>
                <Penugasan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/modul/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <Modul />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailModul/:subjectId/:sessionId/:moduleId"
            element={
              <ProtectedRoute>
                <DetailModule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailQuiz/:subjectId/:sessionId/:quizId"
            element={
              <ProtectedRoute>
                <DetailQuiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizAttempt/:subjectId/:sessionId/:quizId"
            element={
              <ProtectedRoute>
                <QuizAttempt />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nilai-sertifikat"
            element={
              <ProtectedRoute>
                <NilaiSertifikat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pelatihan-keterampilan"
            element={
              <ProtectedRoute>
                <PelatihanKet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/roleplay-asses"
            element={
              <ProtectedRoute>
                <RoleplayAsses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pilih-roleplay"
            element={
              <ProtectedRoute>
                <PilihRoleplay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pilih-ases"
            element={
              <ProtectedRoute>
                <PilihAses />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
