import React from 'react'

const Accordion = ({question,answer,id,target,aria}) => {
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="true" aria-controls={aria}>
        {question}
      </button>
    </h2>
    <div id={id} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {answer}
      </div>
    </div>
  </div>
</div>
  )
}

export default Accordion