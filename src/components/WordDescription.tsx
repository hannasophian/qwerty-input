import { hasAVowel } from "../utils/hasAVowel"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const hasExclamationMark = wordToDescribe.toLowerCase().match('!');
  const hasQuestionMark = wordToDescribe.toLowerCase().match("\\?");
  const hasPoundSign = wordToDescribe.toLowerCase().match('£');



  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasExclamationMark && <li>Contains an exclamation mark!</li>}
      {hasQuestionMark && <li>Contains a question mark?</li>}
      {hasPoundSign && <li>Contains pound sign</li>}


    </ul>
  )
}

export default WordDescription