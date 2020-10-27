/// <reference types='codeceptjs' />
type homePage = typeof import('./pages\home.js');
type steps_file = typeof import('./steps_file.js');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, homePage: homePage }
  interface CallbackOrder { [0]: CodeceptJS.I; [1]: homePage }
  interface Methods extends CodeceptJS.Protractor {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
