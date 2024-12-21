import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './imprint/legal-notice/legal-notice.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './imprint/privacy-policy/privacy-policy.component';


export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
