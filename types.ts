export type Language = 'ko' | 'en';

export interface TranslationData {
  navServices: string;
  navPhotos: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc1: string;
  heroDesc2: string;
  heroContactBtn: string;
  serviceHeader: string;
  serviceTitle: string;
  s1Title: string;
  s1List: string[];
  s2Title: string;
  s2List: string[];
  s3Title: string;
  s3List: string[];
  s4Title: string;
  s4List: string[];
  processHeader: string;
  processTitle: string;
  processSteps: {
    id: string;
    title: string;
    desc: string;
  }[];
  photoHeader: string;
  photoTitle: string;
  contactTitle: string;
  contactDescription: string;
  formName: string;
  formNamePlaceholder: string;
  formEmail: string;
  formEmailPlaceholder: string;
  formSubject: string;
  formSubjectPlaceholder: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formSubmitBtn: string;
  formSuccess: string;
  formError: string;
  formSending: string;
  footerRights: string;
}

export interface Translations {
  en: TranslationData;
  ko: TranslationData;
}