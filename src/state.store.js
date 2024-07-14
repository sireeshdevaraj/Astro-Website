import { persistentAtom } from '@nanostores/persistent';

export const survey = persistentAtom("isSurveyCompleted",false,{
    encode: JSON.stringify,
    decode: JSON.parse,
  });