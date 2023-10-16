import Exercise from "./Exercise";
const activityExample = {
    level: 2,
    section: 12,
    lesson: 5,
    activity: 1,
    exercises:[
        {type:'DEFINITION_FLASHCARD',
        content: {
            lemma:'clingy',
            definition:'Tending to stay very close to somenone (such as a parent) for emotional support, protection, etc.'
        }},
        {type:'GRADED_READER',
        content: {
            story:`Meet Anna, a young girl who loves to learn new things.
            She lives in London with her parents and her dog, Max.
            She likes to read books, play games and explore the city.
            She is curious, friendly and smart.
            She wants to improve her English skills and have fun along the way.`
        }}
    ]
}
const DbResoponse = 'DEFINITION_FLASHCARD'


export default function ActivityPlayer() {
  return (
        <Exercise type={DbResoponse} data={activityExample.exercises[0].content.lemma} />
  )
}