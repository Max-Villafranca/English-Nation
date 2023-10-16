import Instructions from './Instructions'
import Respond from './Respond'
import './exercise.css'
import ActiveRecall from './Exercises/ActiveRecall'
import AudioTranscription from './Exercises/AudioTranscription'
import BreakIntoSyllables from './Exercises/BreakIntoSyllables'
import ChooseCorrectWord from './Exercises/ChooseCorrectWord'
import ComprehensionQuestions from './Exercises/ComprehensionQuestions'
import DefinitionFlashcard from './Exercises/DefinitionFlashcard'
import GradedReader from './Exercises/GradedReader'
import GrammarConcept from './Exercises/GrammarConcept'
import MatchWordDefinition from './Exercises/MatchWordDefinition'
import PhoneticTranscription from './Exercises/PhoneticTranscription'
import RhymesWith from './Exercises/RhymesWith'
import SentenceTransformation from './Exercises/SentenceTransformation'

const bodyClass = 'exerciseBody'
export default function Exercise({type, data}) {
  const body = {
  ACTIVE_RECALL: <ActiveRecall className={bodyClass} data={data} />,
  AUDIO_TRANSCRIPTION: <AudioTranscription className={bodyClass} data={data} />,
  BREAK_INTO_SYLLABLES: <BreakIntoSyllables className={bodyClass} data={data} />,
  CHOOSE_CORRECT_WORD: <ChooseCorrectWord className={bodyClass} data={data} />,
  COMPREHENSION_QUESTIONS: <ComprehensionQuestions className={bodyClass} data={data} />,
  DEFINITION_FLASHCARD: <DefinitionFlashcard className={bodyClass} data={data} />,
  GRADED_READER: <GradedReader className={bodyClass} data={data} />,
  GRAMMAR_CONCEPT: <GrammarConcept className={bodyClass} data={data} />,
  MATCH_WORD_DEFINITION: <MatchWordDefinition className={bodyClass} data={data} />,
  PHONETIC_TRANSCRIPTION: <PhoneticTranscription className={bodyClass} data={data} />,
  RHYMES_WITH: <RhymesWith className={bodyClass} data={data} />,
  SENTENCE_TRANSFORMATION: <SentenceTransformation className={bodyClass} data={data} />,
  }
  const instructions = 'Memoriza la siguiente palabra y su significado:'
  
  return (
    <div className='exercise'>
    <Instructions className='instructions' text={instructions} />
    <hr />
    {body[type]}
    <hr />
    <Respond className='respond' />
    </div>
  )
}
