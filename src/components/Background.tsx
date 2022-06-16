import React, { FunctionComponent } from "react"
import { ReactElement } from "react"
import style from "./Background.module.css"
const Background: FunctionComponent = (): ReactElement => {
  return (
    <>
      <section className={style.section + " " + style.blue}>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          iure quibusdam unde quas illo! Assumenda ad qui sequi aut voluptates!
          Corrupti, eos ducimus obcaecati inventore sit expedita cupiditate enim
          consectetur?
        </p>
        <div className={style.curve}></div>
      </section>
      <section className={style.section + " "}>
        <h1>Nice Curves</h1>
        <p>
          Dolor deserunt iure voluptates minus laborum eius similique mollitia
          error cumque dignissimos distinctio nemo velit ab quis saepe,
          adipisci, quidem est at aspernatur assumenda nam voluptatibus sequi
          expedita voluptas. Dolorem.
        </p>
      </section>
      <section className={style.section + " " + style.bubble}>
        <h1>Nice Curves</h1>
        <p>
          Esse quaerat provident rerum eos natus sint nihil? Dignissimos optio
          commodi esse nobis similique quisquam magni, quo voluptatibus nemo
          eveniet unde cum suscipit molestiae ratione voluptatum repellat
          corrupti veritatis harum!
        </p>
      </section>
      <section className={style.section + " " + style.dark}>
        <h1>Nice Curves</h1>
        <p>
          Voluptate natus explicabo numquam, incidunt aliquam sint architecto,
          adipisci cum, aliquid assumenda fugiat deleniti beatae excepturi
          quidem cumque optio et? Voluptatibus sint dignissimos animi dolor
          omnis tempore repellat vitae possimus?
        </p>
      </section>
      <div className={style.spacer + " " + style.layer1}></div>
      <section className={style.section + " "}>
        <h1>Nice Curves</h1>
        <p>
          Error vel eum minima nobis, distinctio in rem, optio fugit cum
          corrupti nostrum? Quod amet rerum doloremque excepturi neque sunt,
          adipisci voluptatem tempore, architecto quam labore. Minima sunt
          cumque nemo!
        </p>
      </section>
    </>
  )
}

export default Background
