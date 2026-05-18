import {

  BrowserRouter,

  Routes,

  Route,

  Navigate

} from "react-router-dom"

import "./styles.css"

/* AUTH */

import Login from "./pages/Login"
import Register from "./pages/Register"

/* DASHBOARD */

import Dashboard from "./pages/Dashboard"

/* LABS */

import XSSLab from "./pages/XSSLab"
import SQLLab from "./pages/SQLLab"
import CSRFLab from "./pages/CSRFLab"
import IDORLab from "./pages/IDORLab"
import UploadLab from "./pages/UploadLab"
import CommandInjectionLab from "./pages/CommandInjectionLab"

/* ADVANCED LABS */

import SSRFLab from "./pages/SSRFLab"
import PathTraversalLab from "./pages/PathTraversalLab"
import MitreLab from "./pages/MitreLab"
import LiveThreatFeed from "./pages/LiveThreatFeed"
import AuthenticationLab from "./pages/AuthenticationLab"

/* OPTIONAL PAGES */

import Analytics from "./pages/Analytics"

/* AUTH CHECK */

function ProtectedRoute({ children }) {

  const token =
    localStorage.getItem("token")

  return token

    ? children

    : <Navigate to="/" />
}

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* AUTH */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* DASHBOARD */}

        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        {/* XSS */}

        <Route

          path="/xss"

          element={

            <ProtectedRoute>

              <XSSLab />

            </ProtectedRoute>
          }
        />

        {/* SQL */}

        <Route

          path="/sql"

          element={

            <ProtectedRoute>

              <SQLLab />

            </ProtectedRoute>
          }
        />

        {/* CSRF */}

        <Route

          path="/csrf"

          element={

            <ProtectedRoute>

              <CSRFLab />

            </ProtectedRoute>
          }
        />

        {/* IDOR */}

        <Route

          path="/idor"

          element={

            <ProtectedRoute>

              <IDORLab />

            </ProtectedRoute>
          }
        />

        {/* FILE UPLOAD */}

        <Route

          path="/upload"

          element={

            <ProtectedRoute>

              <UploadLab />

            </ProtectedRoute>
          }
        />

        {/* COMMAND INJECTION */}

        <Route

          path="/command"

          element={

            <ProtectedRoute>

              <CommandInjectionLab />

            </ProtectedRoute>
          }
        />

        {/* SSRF */}

        <Route

          path="/ssrf"

          element={

            <ProtectedRoute>

              <SSRFLab />

            </ProtectedRoute>
          }
        />

        {/* PATH TRAVERSAL */}

        <Route

          path="/path"

          element={

            <ProtectedRoute>

              <PathTraversalLab />

            </ProtectedRoute>
          }
        />

        {/* AUTHENTICATION */}

        <Route

          path="/auth"

          element={

            <ProtectedRoute>

              <AuthenticationLab />

            </ProtectedRoute>
          }
        />

        {/* MITRE */}

        <Route

          path="/mitre"

          element={

            <ProtectedRoute>

              <MitreLab />

            </ProtectedRoute>
          }
        />

        {/* LIVE THREAT FEED */}

        <Route

          path="/threat-feed"

          element={

            <ProtectedRoute>

              <LiveThreatFeed />

            </ProtectedRoute>
          }
        />

        {/* ANALYTICS */}

        <Route

          path="/analytics"

          element={

            <ProtectedRoute>

              <Analytics />

            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}

        <Route

          path="*"

          element={
            <Navigate to="/" />
          }
        />

      </Routes>

    </BrowserRouter>
  )
}


          
            

              

           
       

       