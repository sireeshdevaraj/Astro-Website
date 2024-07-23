import { persistentAtom } from '@nanostores/persistent';

export const survey = persistentAtom("isSurveyCompleted",false,{
    encode: JSON.stringify,
    decode: JSON.parse,
  });

export const theme = persistentAtom("dark",false,{
  // false for dark
  encode: JSON.stringify,
  decode: JSON.parse
})
