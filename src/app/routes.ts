import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { HomePage } from './pages/HomePage';
import { IOPPage } from './pages/IOPPage';
import { OutpatientPage } from './pages/OutpatientPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ReferralPage } from './pages/ReferralPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { StyleGuidePage } from './pages/StyleGuidePage';
import { PatientPortalPage } from './pages/PatientPortalPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'iop', Component: IOPPage },
      { path: 'outpatient', Component: OutpatientPage },
      { path: 'admissions', Component: AdmissionsPage },
      { path: 'referral', Component: ReferralPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'style-guide', Component: StyleGuidePage },
      { path: 'portal', Component: PatientPortalPage },
    ],
  },
]);