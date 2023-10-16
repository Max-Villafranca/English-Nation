export default function DefinitionFlashcard({className, data}) {
    return (
    <div className={`${className} defFlashcard`}>
      <h2>{data}</h2>
      <p>
        DEFINITION_FLASHCARD
        Exercise Content
      </p>
    </div>
    )
  }
