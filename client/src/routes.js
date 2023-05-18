// Guards

import AlertPopup from './components/layouts/AlertPopup'

// Pages
import Home from './pages'
import Nurse from './pages/nurses'
import Doctor from './pages/doctor'
import Patient from './pages/patient'

import HeaderAppBar from './components/layouts/Layout'

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: (
          <>
            <AlertPopup />
            <Home />
          </>
        ),
      },
      {
        path: 'patient',
        element: (
          <>
            <HeaderAppBar />
            <AlertPopup />
            <Patient />
          </>
        ),
      },
      {
        path: 'doctor',
        element: (
          <>
            <HeaderAppBar />
            <AlertPopup />
            <Doctor />
          </>
        ),
      },
      {
        path: 'nurses',
        element: (
          <>
            <HeaderAppBar />
            <AlertPopup />
            <Nurse/>
          </>
        ),
      },
    ],
  },
]

export default routes
