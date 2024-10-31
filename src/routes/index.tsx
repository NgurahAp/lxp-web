import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import { ForgetPw } from "../pages/auth/forgetpw";
import { Verification } from "../pages/auth/verification";
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute
import Dashboard from "../pages/dashboard";
import { PelatihankuDetail } from "../pages/pelatihanku/pelatihankuDetail";
import { PelatihanKet } from "../pages/nilai-sertifikat/pelatihan-keterampilan";
import { Pelatihanku } from "../pages/pelatihanku";
import { Penugasan } from "../pages/penugasan";
import { NilaiSertifikat } from "../pages/nilai-sertifikat";
import { Bootcamp } from "../pages/bootcamp";
import { AllFeatures } from "../pages/allFeatures";
import { Modul } from "../pages/pelatihanku/modul";
import { DetailModule } from "../pages/pelatihanku/modul/DetailModul";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpw" element={<ForgetPw />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/pelatihan-keterampilan" element={<PelatihanKet />} />
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
            path="/penugasan"
            element={
              <ProtectedRoute>
                <Penugasan />
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
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
