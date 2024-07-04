import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--text-md-medium: Inter;
--font-bodoni-moda: 'Bodoni Moda';
--default-bold-footnote: 'SF Pro Text';
--default-regular-title2: 'SF Pro Display';
--assistive-2-medium: Heebo;

/* font sizes */
--text-md-medium-size: 1rem;
--input-small-medium-size: 0.88rem;
--font-size-5xs-8: 0.49rem;
--font-size-3xs-1: 0.57rem;
--headline-medium-24-size: 1.5rem;
--xs-regular-size: 0.75rem;
--badge-for-small-size-size: 0.63rem;
--input-default-medium-size: 0.94rem;
--default-bold-footnote-size: 0.81rem;
--default-regular-title2-size: 1.38rem;
--default-bold-title3-size: 1.25rem;

/* Colors */
--grey-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-2001: #eee;
--grey-200: #eaecf0;
--primary-color: #b5179e;
--white: #fff;
--gray-300: #d1d5db;
--grey-300: #d0d5dd;
--gray-400: #9ca3af;
--grey-400: #98a2b3;
--gray-800: #1f2937;
--main-text: #101828;
--fill-color-light-tertiary: rgba(118, 118, 128, 0.12);
--white-white-15: rgba(255, 255, 255, 0.15);
--gray-200: #e5e7eb;
--color-gainsboro-100: #d9d9d9;
--blue-500: #3b82f6;
--blue-1: #2f80ed;
--slate-500: #64748b;
--gray-500: #6b7280;
--grey-500: #667085;
--main-primary-color: #34a853;
--red: #eb5757;
--label-color-light-primary: #000;
--teal-500: #14b8a6;
--label-color-light-tertiary: rgba(60, 60, 67, 0.3);
--separator-color-light-with-transparency: rgba(60, 60, 67, 0.36);
--savi-500: #ca4ab7;
--blue-600: #2563eb;
--blue-300: #93c5fd;
--blue-100: #dbeafe;
--blue-200: #bfdbfe;
--red-500: #ef4444;
--yellow-500: #eab308;
--slate-400: #94a3b8;
--default-systemred-light: #ff3b30;

/* Gaps */
--gap-5xs: 0.5rem;
--gap-5xl: 1.5rem;
--gap-3xs: 0.63rem;
--gap-13xl: 2rem;
--gap-base: 1rem;
--gap-22xl: 2.56rem;
--gap-xs: 0.75rem;
--gap-12xs: 0.06rem;
--gap-111xl: 8.13rem;
--gap-31xl: 3.13rem;
--gap-3xl: 1.38rem;
--gap-15xl: 2.13rem;
--gap-6xs-5: 0.41rem;
--gap-10xs-6: 0.16rem;
--gap-9xs: 0.25rem;
--gap-194xl: 13.31rem;
--gap-xl: 1.25rem;
--gap-8xs: 0.31rem;
--gap-11xs: 0.13rem;
--gap-81xl: 6.25rem;
--gap-6xs: 0.44rem;

/* Paddings */
--padding-3xs: 0.63rem;
--padding-5xl: 1.5rem;
--padding-base: 1rem;
--padding-9xs: 0.25rem;
--padding-7xs-2: 0.33rem;
--padding-6xs-5: 0.41rem;
--padding-10xs-6: 0.16rem;
--padding-11xs: 0.13rem;
--padding-5xs: 0.5rem;
--padding-13xl: 2rem;
--padding-21xl: 2.5rem;
--padding-xs: 0.75rem;
--padding-7xs: 0.38rem;
--padding-12xs: 0.06rem;
--padding-10xs: 0.19rem;
--padding-10xs-5: 0.16rem;
--padding-8xs-5: 0.28rem;
--padding-xl: 1.25rem;

/* Border radiuses */
--br-81xl: 100px;
--br-181xl: 200px;
--br-5xs: 8px;
--br-4xs: 9px;
--br-9xs-9: 3.9px;
--br-12xs-7: 0.7px;
--br-11xs-3: 1.3px;
--br-base: 16px;
--br-980xl: 999px;
--br-7xs: 6px;
--br-11xs: 2px;
--br-10xs: 3px;
--br-12xs-5: 0.5px;
--br-12xs: 1px;

/* Effects */
--bottom-card-shadow-light: 0px 4px 8px rgba(0, 0, 0, 0.04);
--drop-shadow-md: 0px 4px 3px rgba(0, 0, 0, 0.07), 0px 2px 2px rgba(0, 0, 0, 0.06);
--drop-shadow-2xl: 0px 25px 25px rgba(0, 0, 0, 0.15);
--drop-shadow-lg: 0px 10px 8px rgba(0, 0, 0, 0.04), 0px 4px 3px rgba(0, 0, 0, 0.1);
--card-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);







/* fonts */
--body-text-normal-16: Inter;
--font-bodoni-moda: 'Bodoni Moda';

/* font sizes */
--body-text-normal-16-size: 1rem;
--font-size-13xl: 2rem;
--paragraph-p3-regular-size: 0.88rem;
--headline-bold-40-size: 2.5rem;
--font-size-5xl: 1.5rem;
--font-size-xl: 1.25rem;
--assistive-text-medium-12-size: 0.75rem;

/* Colors */
--white: #fff;
--primary-color: #b5179e;
--color-darkmagenta-100: rgba(181, 23, 158, 0.58);
--main-text: #101828;
--neutral-gray-900: #0f172a;
--neutral-gray-50: #f8fafc;
--grey-500: #667085;
--color-black: #000;
--color-plum-100: rgba(245, 185, 237, 0.3);
--color-gainsboro: #e6e6e6;

/* Gaps */
--gap-41xl: 3.75rem;
--gap-11xl: 1.88rem;
--gap-5xl: 1.5rem;
--gap-xl: 1.25rem;
--gap-base: 1rem;
--gap-9xs: 0.25rem;
--gap-2xl: 1.31rem;
--gap-5xs: 0.5rem;
--gap-51xl: 4.38rem;
--gap-xs: 0.75rem;

/* Paddings */
--padding-24xl: 2.69rem;
--padding-2xl: 1.31rem;
--padding-5xl: 1.5rem;
--padding-5xs: 0.5rem;
--padding-12xs: 0.06rem;
--padding-9xs: 0.25rem;
--padding-61xl: 5rem;
--padding-xl: 1.25rem;
--padding-33xl: 3.25rem;
--padding-4xl: 1.44rem;
--padding-lg: 1.13rem;
--padding-12xl: 1.94rem;
--padding-10xl: 1.81rem;
--padding-3xl: 1.38rem;
--padding-xs: 0.75rem;
--padding-10xs: 0.19rem;
--padding-3xs: 0.63rem;
--padding-54xl: 4.56rem;
--padding-base: 1rem;

/* Border radiuses */
--br-81xl: 100px;
--br-5xs: 8px;



/* fonts #############################################################################################################*/
--body-textmedium-16: Inter;
--font-bodoni-moda: 'Bodoni Moda';

/* font sizes */
--font-size-lg: 1.13rem;
--button-normal-14-size: 0.88rem;
--body-textmedium-16-size: 1rem;
--font-size-5xl: 1.5rem;
--headline-semi-bold-32-size: 2rem;
--font-size-lgi: 1.19rem;

/* Colors */
--white: #fff;
--color-black: #000;
--primary-color: #b5179e;
--grey-400: #98a2b3;
--blue-600: #1570ef;
--grey-300: #d0d5dd;
--main-text: #101828;
--color-gainsboro: #d9d9d9;

/* Gaps */
--gap-9xs: 0.25rem;
--gap-xl: 1.25rem;
--gap-base: 1rem;
--gap-5xl: 1.5rem;
--gap-5xs: 0.5rem;

/* Paddings */
--padding-31xl: 3.13rem;
--padding-15xl: 2.13rem;
--padding-13xl: 2rem;
--padding-2xl: 1.31rem;
--padding-xs: 0.75rem;
--padding-base: 1rem;
--padding-8xl: 1.69rem;

/* Border radiuses */
--br-5xs: 8px;




/* fonts ##################################################################################### */
--font-bodoni-moda: 'Bodoni Moda';
--body-text-bold-16: Inter;

/* font sizes */
--body-text-bold-16-size: 1rem;
--headline-semi-bold-32-size: 2rem;
--button-normal-14-size: 0.88rem;

/* Colors */
--main-text: #101828;
--white: #fff;
--color-gainsboro: #d9d9d9;
--primary-color: #b5179e;
--grey-400: #98a2b3;
--grey-300: #d0d5dd;

/* Gaps */
--gap-9xs: 0.25rem;
--gap-base: 1rem;
--gap-5xl: 1.5rem;
--gap-5xs: 0.5rem;
--gap-81xl: 6.25rem;

/* Paddings */
--padding-xs: 0.75rem;
--padding-base: 1rem;

/* Border radiuses */
--br-81xl: 100px;
--br-5xs: 8px;




/* fonts ###########################################################################################################*/
--text-md-medium: Inter;
--font-bodoni-moda: 'Bodoni Moda';
--default-bold-footnote: 'SF Pro Text';
--default-regular-title2: 'SF Pro Display';
--assistive-2-medium: Heebo;

/* font sizes */
--text-md-medium-size: 16px;
--input-small-medium-size: 14px;
--font-size-5xs-8: 7.8px;
--font-size-3xs-1: 9.1px;
--headline-medium-24-size: 24px;
--xs-regular-size: 12px;
--badge-for-small-size-size: 10px;
--input-default-medium-size: 15px;
--default-bold-footnote-size: 13px;
--default-regular-title2-size: 22px;
--default-bold-title3-size: 20px;

/* Colors */
--grey-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-2001: #eee;
--grey-200: #eaecf0;
--primary-color: #b5179e;
--white: #fff;
--gray-300: #d1d5db;
--grey-300: #d0d5dd;
--gray-400: #9ca3af;
--grey-400: #98a2b3;
--gray-800: #1f2937;
--main-text: #101828;
--fill-color-light-tertiary: rgba(118, 118, 128, 0.12);
--white-white-15: rgba(255, 255, 255, 0.15);
--gray-200: #e5e7eb;
--color-gainsboro-100: #d9d9d9;
--blue-500: #3b82f6;
--blue-1: #2f80ed;
--slate-500: #64748b;
--gray-500: #6b7280;
--grey-500: #667085;
--main-primary-color: #34a853;
--red: #eb5757;
--label-color-light-primary: #000;
--teal-500: #14b8a6;
--label-color-light-tertiary: rgba(60, 60, 67, 0.3);
--separator-color-light-with-transparency: rgba(60, 60, 67, 0.36);
--savi-500: #ca4ab7;
--blue-600: #2563eb;
--blue-300: #93c5fd;
--blue-100: #dbeafe;
--blue-200: #bfdbfe;
--red-500: #ef4444;
--yellow-500: #eab308;
--slate-400: #94a3b8;
--default-systemred-light: #ff3b30;

/* Gaps */
--gap-5xs: 8px;
--gap-5xl: 24px;
--gap-3xs: 10px;
--gap-13xl: 32px;
--gap-base: 16px;
--gap-22xl: 41px;
--gap-xs: 12px;
--gap-12xs: 1px;
--gap-111xl: 130px;
--gap-31xl: 50px;
--gap-3xl: 22px;
--gap-15xl: 34px;
--gap-6xs-5: 6.5px;
--gap-10xs-6: 2.6px;
--gap-9xs: 4px;
--gap-194xl: 213px;
--gap-xl: 20px;
--gap-8xs: 5px;
--gap-11xs: 2px;
--gap-81xl: 100px;
--gap-6xs: 7px;

/* Paddings */
--padding-3xs: 10px;
--padding-5xl: 24px;
--padding-base: 16px;
--padding-9xs: 4px;
--padding-7xs-2: 5.2px;
--padding-6xs-5: 6.5px;
--padding-10xs-6: 2.6px;
--padding-11xs: 2px;
--padding-5xs: 8px;
--padding-13xl: 32px;
--padding-21xl: 40px;
--padding-xs: 12px;
--padding-7xs: 6px;
--padding-12xs: 1px;
--padding-10xs: 3px;
--padding-10xs-5: 2.5px;
--padding-8xs-5: 4.5px;
--padding-xl: 20px;

/* Border radiuses */
--br-81xl: 100px;
--br-181xl: 200px;
--br-5xs: 8px;
--br-4xs: 9px;
--br-9xs-9: 3.9px;
--br-12xs-7: 0.7px;
--br-11xs-3: 1.3px;
--br-base: 16px;
--br-980xl: 999px;
--br-7xs: 6px;
--br-11xs: 2px;
--br-10xs: 3px;
--br-12xs-5: 0.5px;
--br-12xs: 1px;

/* Effects */
--bottom-card-shadow-light: 0px 4px 8px rgba(0, 0, 0, 0.04);
--drop-shadow-md: 0px 4px 3px rgba(0, 0, 0, 0.07), 0px 2px 2px rgba(0, 0, 0, 0.06);
--drop-shadow-2xl: 0px 25px 25px rgba(0, 0, 0, 0.15);
--drop-shadow-lg: 0px 10px 8px rgba(0, 0, 0, 0.04), 0px 4px 3px rgba(0, 0, 0, 0.1);
--card-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);


//newpassword##########################################################################################
/* fonts */
--font-bodoni-moda: 'Bodoni Moda';
--body-text-normal-16: Inter;

/* font sizes */
--headline-bold-24-size: 1.5rem;
--body-text-normal-16-size: 1rem;
--headline-semi-bold-32-size: 2rem;
--font-size-lg: 1.13rem;
--button-normal-14-size: 0.88rem;

/* Colors */
--white: #fff;
--primary-color: #b5179e;
--color-gainsboro: #d9d9d9;
--color-black: #000;
--grey-300: #d0d5dd;
--grey-400: #98a2b3;
--main-text: #101828;

/* Gaps */
--gap-9xs: 0.25rem;
--gap-5xs: 0.5rem;

/* Paddings */
--padding-31xl: 3.13rem;
--padding-xs: 0.75rem;
--padding-base: 1rem;

/* Border radiuses */
--br-81xl: 100px;
--br-5xs: 8px;

//ResetPassword#############################################################3
/* fonts */
--font-bodoni-moda: 'Bodoni Moda';
--body-text-normal-16: Inter;

/* font sizes */
--headline-bold-24-size: 1.5rem;
--body-text-normal-16-size: 1rem;
--headline-semi-bold-32-size: 2rem;
--font-size-lg: 1.13rem;

/* Colors */
--white: #fff;
--primary-color: #b5179e;
--color-gainsboro: #d9d9d9;
--color-black: #000;
--grey-400: #98a2b3;
--grey-300: #d0d5dd;
--main-text: #101828;

/* Gaps */
--gap-9xs: 0.25rem;
--gap-5xs: 0.5rem;

/* Paddings */
--padding-31xl: 3.13rem;
--padding-xs: 0.75rem;
--padding-base: 1rem;

/* Border radiuses */
--br-81xl: 100px;
--br-5xs: 8px;

/* fonts */
--button-semi-bold-14: Inter;
--font-bodoni-moda: 'Bodoni Moda';

/* font sizes */
--body-text-bold-16-size: 1rem;
--button-semi-bold-14-size: 0.88rem;
--font-size-xl: 1.25rem;
--headline-bold-48-size: 3rem;
--font-size-13xl: 2rem;
--xs-bold-size: 0.75rem;
--font-size-mini: 0.94rem;
--headline-bold-24-size: 1.5rem;

/* Colors */
--grey-50: #f9fafb;
--gray-100: #f3f4f6;
--white: #fff;
--gray-300: #d1d5db;
--grey-300: #d0d5dd;
--gray-400: #9ca3af;
--grey-400: #98a2b3;
--neutral-800: #1e293b;
--main-text: #101828;
--white-white-15: rgba(255, 255, 255, 0.15);
--primary-color: #b5179e;
--color-black: #000;
--savi-50: #f5b9ed;
--savi: #f38fe5;
--color-darkslategray: #475569;
--blue-500: #3b82f6;
--blue-1: #2f80ed;
--teal-500: #14b8a6;
--gray-200: #e5e7eb;
--blue-100: #dbeafe;
--blue-300: #93c5fd;

/* Gaps */
--gap-5xs: 0.5rem;
--gap-5xl: 1.5rem;
--gap-13xl: 2rem;
--gap-base: 1rem;
--gap-3xs: 0.63rem;
--gap-9xs: 0.25rem;
--gap-81xl: 6.25rem;

/* Paddings */
--padding-3xs: 0.63rem;
--padding-5xl: 1.5rem;
--padding-13xl: 2rem;
--padding-base: 1rem;
--padding-5xs: 0.5rem;
--padding-9xs: 0.25rem;
--padding-21xl: 2.5rem;
--padding-xs: 0.75rem;

/* Border radiuses */
--br-81xl: 100px;
--br-181xl: 200px;
--br-1860xl-1: 1879.1px;
--br-base: 16px;
--br-xs: 12px;
--br-7xs: 6px;
--br-12xs: 1px;
--br-11xs: 2px;
--br-5xs: 8px;
--br-980xl: 999px;

}
`;
